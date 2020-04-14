export const SET_POSTS = "SET_POSTS";
export const SET_COMMENTS = "SET_COMMENTS";


export const setPosts = (posts) => ({
	type: SET_POSTS,
	payload: posts
});
export const setComments = (id,comments) => ({
	type: SET_COMMENTS,
	payload: {
		id:id,
		comments:comments
	}
});