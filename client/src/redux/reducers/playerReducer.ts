import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const initialState: Player = {
  id: null,
  name: "",
  leagues: [],
  awards: [],
  positions: [],
  stats: [],
  teams: [],
  loading: false,
  error: null,
};

const playerEndpoint = "http://localhost:8080/api/players/14";

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
      const { name, awards, positions, stats, teams, leagues } = action.payload;
      state.name = name;
      state.leagues = leagues;
      state.teams = teams;
      state.positions = positions;
      state.stats = stats;
      state.awards = awards;
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
