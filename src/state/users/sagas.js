import { takeLeading, delay, put } from "redux-saga/effects";
import { FETCH_PROFILE, HANDLE_LOGIN } from "./constants";
import { setProfileAction, setLoginStatusAction } from "./actions";

function* findProfile(action) {
  let data;
  yield delay(1200);
  try {
    const successResponse = yield fetch("http://localhost:3004/profile");
    data = yield successResponse.json();
    yield put(
      setProfileAction(data.find((p) => p.username === action.username))
    );
  } catch (error) {
    console.log(error);
  }
}

function* handleLogin(action) {
  let data;
  try {
    const successResponse = yield fetch("http://localhost:3004/profile");
    data = yield successResponse.json();
    const user = data.find((p) => p.username === action.loggedUser.username);
    if (user) {
      if (action.loggedUser.password === user.password) {
        yield put(setLoginStatusAction(true));
      } else {
        yield put(setLoginStatusAction(false));
        if (action.onFailure) {
          action.onFailure("Wrong Password");
        }
      }
    } else {
      if (action.onFailure) {
        action.onFailure("User not exist");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchHandleLogin() {
  yield takeLeading(FETCH_PROFILE, findProfile);
}

function* watchFindProfile() {
  yield takeLeading(HANDLE_LOGIN, handleLogin);
}

export const profileSagas = [watchFindProfile(), watchHandleLogin()];
