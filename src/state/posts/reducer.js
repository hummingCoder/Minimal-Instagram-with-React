import { initialState, SET_FEED_POSTS, SET_DETAIL_POST, SET_USER_POSTS } from "./constants";

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED_POSTS:
            return { ...state, feedPosts: action.feedPosts }
        case SET_USER_POSTS:
            return { ...state, userPosts: action.userPosts }
        default:
            break;
    }
    return state;
}

