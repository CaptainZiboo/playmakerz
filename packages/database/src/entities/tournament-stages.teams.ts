import { integer, pgTable } from "drizzle-orm/pg-core";
import { tournamentStages } from "./tournament-stages.js";
import { teams } from "./teams.js";
import { relations } from "drizzle-orm";

export const tournamentStagesToTeams = pgTable("tournament_stages_teams", {
  tournament_stage_id: integer("tournament_stage_id")
    .notNull()
    .references(() => tournamentStages._id),
  team_id: integer("team_id")
    .notNull()
    .references(() => teams._id),
});

export const tournamentStagesToTeamsRelations = relations(
  tournamentStagesToTeams,
  ({ one }) => ({
    tournament_stage: one(tournamentStages, {
      fields: [tournamentStagesToTeams.tournament_stage_id],
      references: [tournamentStages._id],
    }),
    team: one(teams, {
      fields: [tournamentStagesToTeams.team_id],
      references: [teams._id],
    }),
  })
);

export type TournamentStagesToTeams =
  typeof tournamentStagesToTeams.$inferSelect;
export type TournamentStagesToTeamsInsert =
  typeof tournamentStagesToTeams.$inferInsert;
