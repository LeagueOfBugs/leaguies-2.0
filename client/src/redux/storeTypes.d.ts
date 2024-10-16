interface RootState {
  player: User;
  leagues: League[];
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

interface Stat {
  name: string;
  value: number;
}

type Sports = 'soccer' | 'football' | 'basketball' | 'baseball' | 'hockey' | 'volleyball';

interface PlayerStats {
  [key in Sports]?: Stat[];
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
  position: string;
  positionAbbreviation: string;
  subPosition: string | null;
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
  id: number;
  name: string;
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

interface Award {
  name: number;
}

interface Player {
  id: string | null;
  name: string;
  awards?: Award[];
  positions?: PlayerPositions[] | [];
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
  id: string;
  name: string;
  active: boolean;
  startDate?: Date;
  endDate?: Date;
  trophy?: string;
}

interface Team {
  id: number;
  name: string;
}

interface Players {
  id: number;
  name: string;
}

interface League {
  active: boolean;
  id: number;
  name: string;
  players?: Players[];
  seasons?: Season[];
  sport?: string;
  teams?: Team[];
}
