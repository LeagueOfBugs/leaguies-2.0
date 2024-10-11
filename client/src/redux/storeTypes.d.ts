interface RootState {
  player: User;
}
// user reducer types
interface PlayerSportAssociation {
  playerId: number;
  sportId: number;
  sport: {
    name: string;
  };
}

interface PlayerSportResponse {
  sports: PlayerSportAssociation[] | [];
}

interface PlayerStatsAssociation {
  id: number;
  playerId: number;
  statId: number;
  statType: {
    name: string;
  };
  value: number;
}
interface PlayerStatsResponse {
  stats: PlayerStatsAssociation[];
}

interface PlayerStats {
  name: string;
  value: number;
}

interface PlayerPositionAssociation {
  playerId: number;
  positionId: number;
  position: {
    abbreviation: string;
    name: string;
    sport: {
      name: string;
    };
    subPositions: SubPositionResponse[];
  };
  subPositionId: number;
}

interface SubPositionResponse {
  name: string;
  id: number;
  abbreviation: string;
}

interface PlayerPositionResponse {
  positions: PlayerPositionAssociation[] | [];
}

interface PlayerPositions {
  sport: string;
  name: string;
  abbreviation: string;
  subPosition:
    | {
        name: string;
        abbreviation: string;
      }
    | undefined;
}

interface PlayerTeamsAssociation {
  playerId: number;
  teamId: number;
  team: {
    name: string;
    league?: {
      name: string;
    };
  };
}

interface PlayerTeamResponse {
  teams: PlayerTeamsAssociation[] | [];
}

interface PlayerTeams {
  name: string;
  league: string;
}

interface PlayerLeagueAssociation {
  league: {
    name: string;
  };
  leagueId: number;
  playerId: number;
}

interface PlayerLeaguesResponse {
  leagues: PlayerLeagueAssociation[] | [];
}

interface PlayerLeagues {
  leagueId: number;
  name: string;
}

interface Player {
  id: string | null;
  name: string;
  awards?: [];
  positions?: PlayerPositions[] | [];
  sports?: string[] | [];
  stats?: PlayerStats[] | [];
  teams?: PlayerTeams[] | [];
  leagues?: PlayerLeagues[] | [];
  loading?: boolean;
  error?: string | null;
}

interface Seasons {
  seasons: Season[];
  loading?: boolean;
  error?: string | null;
}

interface Season {
  id?: string;
  name?: string;
  startDate?: Date;
  endDate?: Date;
  isCurrent: boolean;
  matches?: Match[];
  leagueId?: string;
  trophyId?: string;
}

interface Team {
  team: {
    id: number;
    name: string;
  };
}
