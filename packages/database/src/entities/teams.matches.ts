import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { teams } from "./teams.js";
import { matches } from "./matches.js";
import { relations } from "drizzle-orm";

export const teamsToMatches = pgTable(
  "teams_matches",
  {
    team_id: integer("team_id")
      .notNull()
      .references(() => teams._id),
    match_id: integer("match_id")
      .notNull()
      .references(() => matches._id),
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.team_id, t.match_id],
    }),
  })
);

export const teamsToMatchesRelations = relations(teamsToMatches, ({ one }) => ({
  team: one(teams, {
    fields: [teamsToMatches.team_id],
    references: [teams._id],
  }),
  match: one(matches, {
    fields: [teamsToMatches.match_id],
    references: [matches._id],
  }),
}));

export type TeamsToMatches = typeof teamsToMatches.$inferSelect;
export type TeamsToMatchesInsert = typeof teamsToMatches.$inferInsert;
