import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { users } from "./users.js";
import { matchRounds } from "./match-rounds.js";
import { relations } from "drizzle-orm";

export const matchRoundsToPlayers = pgTable(
  "match_rounds_players",
  {
    match_round_id: integer("match_round_id")
      .notNull()
      .references(() => matchRounds._id),
    player_id: integer("player_id")
      .notNull()
      .references(() => users._id),
  },
  (t) => ({
    pk: primaryKey({
      columns: [t.match_round_id, t.player_id],
    }),
  })
);

export const matchRoundsToPlayersRelations = relations(
  matchRoundsToPlayers,
  ({ one }) => ({
    match_round: one(matchRounds, {
      fields: [matchRoundsToPlayers.match_round_id],
      references: [matchRounds._id],
    }),
    player: one(users, {
      fields: [matchRoundsToPlayers.player_id],
      references: [users._id],
    }),
  })
);

export type MatchRoundsToPlayers = typeof matchRoundsToPlayers.$inferSelect;
export type MatchRoundsToPlayersInsert =
  typeof matchRoundsToPlayers.$inferInsert;
