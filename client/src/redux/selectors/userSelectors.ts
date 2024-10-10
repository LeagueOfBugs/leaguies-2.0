import { RootState } from "../store";

// Selector to get the user state
export const selectUser = (state: RootState) => state.user;
