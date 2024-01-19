import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { tournamentsToTeams } from "./tournaments.teams.js";

export const tournaments = pgTable("tournaments", {
  _id: serial("_id").primaryKey(),
});

export const tournamentsRelations = relations(tournaments, ({ many }) => ({
  teams: many(tournamentsToTeams),
}));

export type Tournament = typeof tournaments.$inferSelect;
export type TournamentInsert = typeof tournaments.$inferInsert;
