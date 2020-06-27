import { createSelector } from "reselect";

export const profileSelector = createSelector(
  (state) => state.users.userProfile,
  (userProfile) => userProfile
);
export const authenticationSelector = createSelector(
  (state) => state.users.isLoggedIn,
  (isLoggedIn) => isLoggedIn
);
