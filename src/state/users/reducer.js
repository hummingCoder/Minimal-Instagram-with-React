import { initialState, SET_PROFILE, SET_LOGIN_STATUS } from "./constants";

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, userProfile: action.userProfile };
    case SET_LOGIN_STATUS:
      localStorage.setItem("isLoggedIn", action.isLoggedIn);
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      break;
  }
  return state;
};
