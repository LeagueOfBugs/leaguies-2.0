import { FastifyInstance } from "fastify";
import {
  associatePlayerToTeam,
  deletePlayerTeamAssociation,
} from "../controllers/playerTeamController";
import {
  associateRefereeToMatch,
  deleteRefereeMatchAssociation,
} from "../controllers/matchReferee";
import {
  associationPlayerToStats,
  deletePlayerToStatsAssociation,
} from "../controllers/playerStats";

async function associations(server: FastifyInstance) {
  // players to teams
  server.post("/player-team", associatePlayerToTeam);
  server.delete("/player/:playerId/team/:teamId",deletePlayerTeamAssociation);

  // referees to matches
  server.post("/referee-match", associateRefereeToMatch);
  server.delete(
    "/referee/:refereeId/match/:matchId",
    deleteRefereeMatchAssociation
  );

  // stats to players
  server.post("/player-stats", associationPlayerToStats);
  server.delete(
    "/player/:playerId/stat/:statTypeId",
    deletePlayerToStatsAssociation
  );
}

export default associations;
