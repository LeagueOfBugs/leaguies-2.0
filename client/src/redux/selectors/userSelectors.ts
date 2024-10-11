import { RootState } from "../store";

// Selector to get the user state
export const selectPlayer = (state: RootState) => state.player;
