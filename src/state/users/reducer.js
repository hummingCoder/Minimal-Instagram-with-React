import { initialState, SET_PROFILE } from "./constants";

export const profileReducer = (state = initialState, action) => {
    console.log("profileReducer -> action", action)
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, userProfile: action.userProfile }
        default:
            break;
    }
    return state;
}

