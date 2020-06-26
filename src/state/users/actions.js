import { SET_PROFILE, FETCH_PROFILE } from "./constants"

export const setProfileAction = (userProfile) => {
    return {
        userProfile,
        type: SET_PROFILE
    }
}

export const fetchProfileAction = (username) => {
    return {
        username,
        type: FETCH_PROFILE
    }
}

