import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { matchRoundsToPlayers } from "./match-rounds.players.js";
import { teamsToPlayers } from "./teams.players.js";

export const users = pgTable("users", {
  _id: serial("_id").primaryKey(),
});

export const userRelations = relations(users, ({ one, many }) => ({
  teams: many(teamsToPlayers),
  match_rounds: many(matchRoundsToPlayers),
}));

export type User = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
