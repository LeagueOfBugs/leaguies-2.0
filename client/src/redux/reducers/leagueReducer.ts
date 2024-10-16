import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const initialState = {
  league: {},
  loading: false,
  error: null,
};

const leagueEndpoint = "http://localhost:8080/api/leagues/";
export const fetchLeague = createAsyncThunk(
  leagueEndpoint,
  async (leagueId: string, { rejectWithValue }) => {
    if (!leagueEndpoint) {
      return rejectWithValue("League endpoint is not defined.");
    }
    try {
      const response = await axios.get(`${leagueEndpoint}${leagueId}`);
    //   console.log("response", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const leagueSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLeague.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchLeague.fulfilled, (state, action) => {
      console.log(action.payload);
      state.league = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchLeague.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default leagueSlice;
