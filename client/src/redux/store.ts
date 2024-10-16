import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/playerReducer";
import leagueSlice from "./reducers/leagueReducer";

const store = configureStore({
  reducer: {
    player: userSlice.reducer,
    // seasons: seasonSlice.reducer,
    league: leagueSlice.reducer,
    // teams: () => {},
    // players: () => {},
    // matches: () => {},
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
