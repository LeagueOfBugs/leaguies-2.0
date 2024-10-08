import { createSlice } from "@reduxjs/toolkit";

const initialState: Seasons = {
  seasons: [],
  loading: true,
  error: null,
};

const seasonSlice = createSlice({
  name: "seasons",
  initialState,
  reducers: {},
});

export default seasonSlice;
