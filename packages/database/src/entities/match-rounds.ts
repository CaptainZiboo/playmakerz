import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { matches } from "./matches.js";
import { matchRoundsToPlayers } from "./match-rounds.players.js";
import { teamsToMatchRounds } from "./teams.match-rounds.js";

export const matchRounds = pgTable("match_rounds", {
  _id: serial("_id").primaryKey(),
  match_id: integer("match_id"),
});

export const matchRoundsRelations = relations(matchRounds, ({ one, many }) => ({
  match: one(matches, {
    fields: [matchRounds.match_id],
    references: [matches._id],
  }),
  teams: many(teamsToMatchRounds),
  players: many(matchRoundsToPlayers),
}));

export type MatchRound = typeof matchRounds.$inferSelect;
export type MatchRoundInsert = typeof matchRounds.$inferInsert;
