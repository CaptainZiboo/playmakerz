import { relations } from "drizzle-orm";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { users } from "./users.js";
import { teamsToMatches } from "./teams.matches.js";
import { teamsToMatchRounds } from "./teams.match-rounds.js";
import { teamsToPlayers } from "./teams.players.js";
import { tournamentsToTeams } from "./tournaments.teams.js";
import { tournamentStagesToTeams } from "./tournament-stages.teams.js";

export const teams = pgTable("teams", {
  _id: serial("_id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

export const teamsRelations = relations(teams, ({ many }) => ({
  players: many(teamsToPlayers),
  matches: many(teamsToMatches),
  match_rounds: many(teamsToMatchRounds),
  tournaments: many(tournamentsToTeams),
  tournament_stages: many(tournamentStagesToTeams),
}));

export type Team = typeof teams.$inferSelect;
export type TeamInsert = typeof teams.$inferInsert;
