type Sports =
  | "soccer"
  | "football"
  | "basketball"
  | "baseball"
  | "hockey"
  | "volleyball";

type InviteStatus = "pending" | "accepted" | "declined";

type Invite = {
  id: number;
  status: InviteStatus;
  inviterId: number;
  inviterType: string;
  inviteeId: number;
  inviteeType: string;
  leagueId?: number;
  teamId?: number;
  playerId?: number;
  createdAt: Date;
  updatedAt: Date;
  league?: League;
  team?: Team;
  player?: Player;
};
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
  wins?: number;
  losses?: number;
  draws?: number;
};

type Team = BaseEntity & {
  active?: boolean;
  playerLimit: number;
  players?: Player[];
  staff?: Staff[];
  invites?: Invite[];
  seasons?: Season[];
};

type Player = BaseEntity & {
  leagues?: League[];
  teams?: Team[];
  positions?: Position[];
  stats?: PlayerStats[];
  awards?: Award[];
  invites: Invite[];
  loading?: boolean;
  error?: string | null;
};

interface RootState {
  player: Player;
}
