import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchPlayer = createAsyncThunk<User>("", async () => {});

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
