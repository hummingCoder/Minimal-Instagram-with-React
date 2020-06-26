import { createSelector } from "reselect"

export const profileSelector = createSelector(
    state => state.users.userProfile,
    (userProfile) => userProfile
)