import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { teamsToMatches } from "./teams.matches.js";

export const matches = pgTable("matches", {
  _id: serial("_id").primaryKey(),
});

export const matchesRelations = relations(matches, ({ many }) => ({
  teams: many(teamsToMatches),
}));

export type Match = typeof matches.$inferSelect;
export type MatchInsert = typeof matches.$inferInsert;
