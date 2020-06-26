import { SET_FEED_POSTS, FETCH_FEED_POSTS, FETCH_USER_POSTS, SET_USER_POSTS } from "./constants"

export const setFeedPostsAction = (feedPosts) => {
    return {
        feedPosts,
        type: SET_FEED_POSTS
    }
}

export const fetchFeedPostsActions = (username) => {
    return {
        username,
        type: FETCH_FEED_POSTS
    }
}
export const fetchUserPostsAction = (username) => {
    return {
        username,
        type: FETCH_USER_POSTS
    }
}
export const setUserPostsAction = (userPosts) => {
    return {
        userPosts,
        type: SET_USER_POSTS
    }
}
