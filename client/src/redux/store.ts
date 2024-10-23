import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/playerReducer";

const store = configureStore({
  reducer: {
    player: userSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
