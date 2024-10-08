interface RootState {
  user: User;
}

interface User {
  id: string | null;
  name: string;
  awards?: [];
  positionId?: string | null;
  stats?: [];
  teams?: [];
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
