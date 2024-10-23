type Sports =
  | "soccer"
  | "football"
  | "basketball"
  | "baseball"
  | "hockey"
  | "volleyball";

type PlayerStats = {
  [key in Sports]?: Stat[];
};

type SubPosition = {
  name: string;
  abbreviation: string;
};

type Position = {
  sport: string;
  position: string;
  positionAbbreviation: string;
  subPosition: SubPosition;
};

type Award = {
  name: string;
};

type BaseEntity = {
  id: number;
  name: string;
};

type League = BaseEntity & {
  active: boolean;
  teamLimit: number;
  staff: Staff[];
  sport: string;
  players?: Player[];
  seasons?: Season[];
  teams?: Team[];
};

type Staff = BaseEntity & {
  role: string;
  leagueId: number;
};

type Season = BaseEntity & {
  active: boolean;
  startDate: Date;
  endDate: Date;
  trophy: string;
};

type Team = BaseEntity & {
  active?: boolean;
};

type Player = BaseEntity & {
  leagues?: League[];
  teams?: Team[];
  positions?: Position[];
  stats?: PlayerStats[];
  awards?: Award[];
  loading?: boolean;
  error?: string | null;
};

interface RootState {
  player: Player;
}
