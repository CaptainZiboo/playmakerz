import { relations } from "drizzle-orm";
import { pgTable, serial } from "drizzle-orm/pg-core";
import { tournamentStagesToTeams } from "./tournament-stages.teams.js";

export const tournamentStages = pgTable("tournament_stages", {
  _id: serial("_id").primaryKey(),
});

export const tournamentStagesRelations = relations(
  tournamentStages,
  ({ many }) => ({
    teams: many(tournamentStagesToTeams),
  })
);

export type TournamentStage = typeof tournamentStages.$inferSelect;
export type TournamentStageInsert = typeof tournamentStages.$inferInsert;
