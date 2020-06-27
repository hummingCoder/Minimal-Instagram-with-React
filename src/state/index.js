import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { postsReducer } from "./posts/reducer";
import { profileReducer } from "./users/reducer";
import { postsSagas } from "./posts/sagas";
import { profileSagas } from "./users/sagas";
import { all } from "redux-saga/effects";

const reducers = combineReducers({
  posts: postsReducer,
  users: profileReducer,
});

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* allSagas() {
  yield all([...postsSagas, ...profileSagas]);
}

sagaMiddleware.run(allSagas);
