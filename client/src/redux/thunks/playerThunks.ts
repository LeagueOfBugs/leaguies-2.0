import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const playerEndpoint = "http://localhost:8080/api/players/14";

export const fetchPlayer = createAsyncThunk<Player>(
  playerEndpoint,
  async (_, { rejectWithValue }) => {
    if (!playerEndpoint) {
      return rejectWithValue("Player endpoint is not defined.");
    }
    try {
      const response = await axios.get(playerEndpoint);
      console.log(response.data);
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
