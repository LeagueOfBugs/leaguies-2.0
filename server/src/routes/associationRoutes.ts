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
import {
  associationTeamToSeason,
  deleteTeamtoSeasonAssociation,
} from "../controllers/teamSeasonController";
import {
  associationPlayerToSport,
  deletePlayerToSportAssociation,
} from "../controllers/playerSportController";
import {
  associationPlayerToLeague,
  deletePlayerToLeagueAssociation,
} from "../controllers/playerLeagueController";
import {
  assocciationPlayerToPosition,
  deletePlayerToPositionAssociation,
} from "../controllers/playerPositionController";

async function associations(server: FastifyInstance) {
  // players to teams
  server.post("/player-team", associatePlayerToTeam);
  server.delete("/player/:playerId/team/:teamId", deletePlayerTeamAssociation);

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

  // teams to season
  server.post("/team-season", associationTeamToSeason);
  server.delete(
    "/team/:teamId/season/:seasonId",
    deleteTeamtoSeasonAssociation
  );

  // player to sport
  server.post("/player-sport", associationPlayerToSport);
  server.delete(
    "/player/:playerId/sport/:sportId",
    deletePlayerToSportAssociation
  );

  // player to league
  server.post("/player-league", associationPlayerToLeague);
  server.delete(
    "/player/:playerId/league/:leagueId",
    deletePlayerToLeagueAssociation
  );

  // player to position
  server.post("/player-position", assocciationPlayerToPosition);
  server.delete(
    "/player/:playerId/position/:positionId",
    deletePlayerToPositionAssociation
  );
}

export default associations;
