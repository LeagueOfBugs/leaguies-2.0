import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const initialState: Player = {
  id: null,
  name: "",
  awards: [],
  positions: [],
  sports: [],
  stats: [],
  teams: [],
  leagues: [],
  loading: false,
  error: null,
};

const playerEndpoint = "http://localhost:8080/api/players/1";
console.log(playerEndpoint);

export const fetchPlayer = createAsyncThunk(
  playerEndpoint,
  async (_, { rejectWithValue }) => {
    if (!playerEndpoint) {
      return rejectWithValue("Player endpoint is not defined.");
    }
    try {
      const response = await axios.get(playerEndpoint);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || "Failed to fetch player data."
        );
      } else if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred.");
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlayer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPlayer.fulfilled, (state, action) => {
      const { name, awards, positions, sports, stats, teams, leagues } =
        action.payload;
      console.log("in reducer", action.payload);

      // STATS
      const playerStats = stats as PlayerStatsAssociation[];
      const formattedStatsArray = Array.isArray(playerStats)
        ? playerStats.map((stat) => ({
            name: stat.statType.name,
            value: stat.value,
          }))
        : [];

      // SPORTS
      const playerSports = sports as PlayerSportAssociation[];
      const formattedSportsArray = Array.isArray(playerSports)
        ? playerSports.map((sport) => sport.sport.name)
        : [];

      // POSITIONS
      const playerPositions = positions as PlayerPositionAssociation[];
      const formattedPositionsArray = Array.isArray(playerPositions)
        ? playerPositions.map((position) => {
            const subPositionId = position.subPositionId;
            const findSubPosition = position.position.subPositions.find(
              (subPos) => subPos.id === subPositionId
            );

            return {
              sport: position.position.sport.name,
              name: position.position.name,
              abbreviation: position.position.abbreviation,
              subPosition: findSubPosition,
            };
          })
        : [];

      // TEAMS
      const playerTeams = teams as PlayerTeamResponse;
      const formattedTeamsArray = Array.isArray(playerTeams)
        ? playerTeams.map((team) => {
            const newTeam = {
              name: team.team.name,
              league: team.team.league ? team.team.league.name : null,
            };
            return newTeam;
          })
        : [];

      // LEAGUES
      const playerLeagues = leagues as PlayerLeaguesResponse;
      const formattedLeaguesArray = Array.isArray(playerLeagues)
        ? playerLeagues.map((league) => {
            return { name: league.league.name, leagueId: league.league.id };
          })
        : [];

      state.name = name;
      state.awards = awards;
      state.positions = formattedPositionsArray;
      state.stats = formattedStatsArray;
      state.sports = formattedSportsArray;
      state.teams = formattedTeamsArray;
      state.leagues = formattedLeaguesArray;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchPlayer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "failed to fetch user: client generated error";
    });
  },
});

export default userSlice;
