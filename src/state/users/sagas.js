import { takeLeading, delay, put } from "redux-saga/effects";
import { FETCH_PROFILE } from "./constants";
import { setProfileAction } from "./actions";
function* findProfile(action) {
    let data;
    yield delay(1200);
    try {
        const successResponse = yield fetch('http://localhost:3004/profile');
        data = yield successResponse.json();
        yield put(setProfileAction(data.find(p => p.username === action.username)))
    } catch (error) {
        console.log(error)
    }
}
function* watchFindProfile() {
    yield takeLeading(FETCH_PROFILE, findProfile)
}
export const profileSagas = [
    watchFindProfile()
]