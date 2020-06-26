import { takeLeading, delay, put } from "redux-saga/effects";
import { FETCH_FEED_POSTS, FETCH_USER_POSTS } from "./constants";
import { setFeedPostsAction, setUserPostsAction } from "./actions";

function* fetchFeedPosts() {
    let data;
    yield delay(1200);
    try {
        const successResponse = yield fetch('http://localhost:3000/posts');
        data = yield successResponse.json();

    } catch (error) {
        console.log(error)
    }
    yield put(setFeedPostsAction(data))
}
function* watchFetchFeedPosts() {
    yield takeLeading(FETCH_FEED_POSTS, fetchFeedPosts)
}

function* fetchUserPosts(action) {
    let data;
    yield delay(1200);
    try {
        const successResponse = yield fetch('http://localhost:3000/posts');
        data = yield successResponse.json();
        yield put(setUserPostsAction(data.filter(a => a.username === action.username)));

    } catch (error) {
        console.log(error)
    }
}
function* watchUserPosts() {
    yield takeLeading(FETCH_USER_POSTS, fetchUserPosts)
}
export const postsSagas = [
    watchFetchFeedPosts(),
    watchUserPosts()
]