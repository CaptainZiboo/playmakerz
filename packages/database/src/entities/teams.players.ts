import { integer, pgTable } from "drizzle-orm/pg-core";
import { users } from "./users.js";
import { teams } from "./teams.js";
import { relations } from "drizzle-orm";

export const teamsToPlayers = pgTable("teams_players", {
  team_id: integer("team_id")
    .notNull()
    .references(() => teams._id),
  player_id: integer("player_id")
    .notNull()
    .references(() => users._id),
});

export const teamsToPlayersRelations = relations(teamsToPlayers, ({ one }) => ({
  team: one(teams, {
    fields: [teamsToPlayers.team_id],
    references: [teams._id],
  }),
  player: one(users, {
    fields: [teamsToPlayers.player_id],
    references: [users._id],
  }),
}));

export type TeamsToPlayers = typeof teamsToPlayers.$inferSelect;
export type TeamsToPlayersInsert = typeof teamsToPlayers.$inferInsert;
