import { integer, pgTable } from "drizzle-orm/pg-core";
import { tournaments } from "./tournaments.js";
import { teams } from "./teams.js";
import { relations } from "drizzle-orm";

export const tournamentsToTeams = pgTable("tournaments_teams", {
  tournament_id: integer("tournament_id")
    .notNull()
    .references(() => tournaments._id),
  team_id: integer("team_id")
    .notNull()
    .references(() => teams._id),
});

export const tournamentsToTeamsRelations = relations(
  tournamentsToTeams,
  ({ one }) => ({
    tournament: one(tournaments, {
      fields: [tournamentsToTeams.tournament_id],
      references: [tournaments._id],
    }),
    team: one(teams, {
      fields: [tournamentsToTeams.team_id],
      references: [teams._id],
    }),
  })
);

export type TournamentsToTeams = typeof tournamentsToTeams.$inferSelect;
export type TournamentsToTeamsInsert = typeof tournamentsToTeams.$inferInsert;
