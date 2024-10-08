import { configureStore } from "@reduxjs/toolkit";
import seasonSlice from "./reducers/seasonReducer";
import userSlice from "./reducers/seasonReducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    seasons: seasonSlice.reducer,
    // leagues: () => {},
    // teams: () => {},
    // players: () => {},
    // matches: () => {},
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
