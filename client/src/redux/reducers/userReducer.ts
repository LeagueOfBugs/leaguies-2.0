import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const initialState: User = {
  id: null,
  name: "",
  awards: [],
  positionId: null,
  stats: [],
  teams: [],
  loading: false,
  error: null,
};

const playerEndpoint = process.env.PLAYER_ENDPOINT || "";

export const fetchPlayer = createAsyncThunk<User, void>(
  playerEndpoint,
  async (_, { rejectWithValue }) => {
    if (!playerEndpoint) {
      return rejectWithValue("Player endpoint is not defined.");
    }
    try {
      const response = await axios.get<User>(playerEndpoint);
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
      const { id, name, awards, positionId, stats, teams } = action.payload;
      state.loading = false;
      state.error = null;

      state.id = id;
      state.name = name;
      state.awards = awards;
      state.positionId = positionId;
      state.stats = stats;
      state.teams = teams;
    });
    builder.addCase(fetchPlayer.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "failed to fetcch user: client generated error";
    });
  },
});

export default userSlice;
