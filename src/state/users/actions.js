import {
  SET_PROFILE,
  FETCH_PROFILE,
  HANDLE_LOGIN,
  SET_LOGIN_STATUS,
} from "./constants";

export const setProfileAction = (userProfile) => {
  return {
    userProfile,
    type: SET_PROFILE,
  };
};

export const fetchProfileAction = (username) => {
  return {
    username,
    type: FETCH_PROFILE,
  };
};

export const handleLoginAction = (loggedUser, onSuccess, onFailure) => {
  return {
    loggedUser,
    onSuccess,
    onFailure,
    type: HANDLE_LOGIN,
  };
};

export const setLoginStatusAction = (isLoggedIn) => {
  return {
    isLoggedIn,
    type: SET_LOGIN_STATUS,
  };
};
