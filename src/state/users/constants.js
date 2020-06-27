
export const initialState = {
    userProfile: null,
    isLoggedIn: localStorage.getItem('isLoggedIn') === "true",
    loggedUser : localStorage.getItem('loggedUser') ?? null
};

export const FETCH_PROFILE = "@USERS_FETCH_PROFILE";
export const SET_PROFILE = "@USERS_FETCH_PROFILE";

export const HANDLE_LOGIN = "@HANDLE_LOGIN";
export const SET_LOGIN_STATUS = "@SET_LOGIN_STATUS";


