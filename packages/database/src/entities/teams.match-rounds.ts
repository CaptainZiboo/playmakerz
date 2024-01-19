import { integer, pgTable } from "drizzle-orm/pg-core";
import { teams } from "./teams.js";
import { matchRounds } from "./match-rounds.js";
import { relations } from "drizzle-orm";

export const teamsToMatchRounds = pgTable("teams_match_rounds", {
  team_id: integer("team_id")
    .notNull()
    .references(() => teams._id),
  match_round_id: integer("match_round_id")
    .notNull()
    .references(() => matchRounds._id),
});

export const teamsToMatchRoundsRelations = relations(
  teamsToMatchRounds,
  ({ one }) => ({
    team: one(teams, {
      fields: [teamsToMatchRounds.team_id],
      references: [teams._id],
    }),
    match_round: one(matchRounds, {
      fields: [teamsToMatchRounds.match_round_id],
      references: [matchRounds._id],
    }),
  })
);

export type TeamsToMatchRounds = typeof teamsToMatchRounds.$inferSelect;
export type TeamsToMatchRoundsInsert = typeof teamsToMatchRounds.$inferInsert;
