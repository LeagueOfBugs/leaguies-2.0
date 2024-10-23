import { createSlice } from "@reduxjs/toolkit";
import { fetchPlayer } from "../thunks/playerThunks";

const initialState: Player = {
  id: 0,
  name: "",
  leagues: [],
  teams: [],
  positions: [],
  stats: [],
  awards: [],
  loading: false,
  error: null,
};

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
      console.log(leagues);
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
