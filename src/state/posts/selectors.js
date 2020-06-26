import { createSelector } from "reselect"

export const feedPostsSelector = createSelector(
    state => state.posts.feedPosts,
    (feedPosts) => feedPosts
)
export const userPostsSelector = createSelector(
    state => state.posts.userPosts,
    (userPosts) => userPosts
)