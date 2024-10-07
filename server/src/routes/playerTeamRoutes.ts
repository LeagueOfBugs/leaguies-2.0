import { FastifyInstance } from "fastify";
import {
  associatePlayerToTeam,
  deletePlayerTeamAssociation,
} from "../controllers/playerTeamController";
import {
  associateRefereeToMatch,
  deleteRefereeMatchAssociation,
} from "../controllers/matchReferee";

async function matchRoutes(server: FastifyInstance) {
  server.post("/player-team", associatePlayerToTeam);
  server.delete("/player/:playerId/team/:teamId", deletePlayerTeamAssociation);
  server.post("/referee-match", associateRefereeToMatch);
  server.delete(
    "/referee/:refereeId/match/:matchId",
    deleteRefereeMatchAssociation
  );
}

export default matchRoutes;
