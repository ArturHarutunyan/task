import {SET_COMMENTS, SET_POSTS} from "./actions";
let posts = []
if (typeof window!=="undefined") {
	const date = +new Date();
	if(window.localStorage.postsCreatedAt && ((date - window.localStorage.postsCreatedAt)/1000/60/60 < 24 ) ) {
		posts = window.localStorage.getItem("posts") ? JSON.parse(window.localStorage.getItem("posts")) : posts
	}
}

export default function postReducer (state = {posts: posts}, action) {
	switch (action.type) {
		case SET_POSTS:
			window.localStorage.setItem("posts", JSON.stringify(action.payload))
			window.localStorage.setItem("postsCreatedAt", +new Date())
			;
			return {...state, posts: action.payload};
		case SET_COMMENTS:

			const currentPost = state.posts.find((post) => post.id === action.payload.id);
			currentPost.comments = action.payload.comments
			window.localStorage.setItem("posts", JSON.stringify(state.posts))
			window.localStorage.setItem("postsCreatedAt", +new Date())
			return {...state, posts: state.posts};




		default:
			return {...state};
	}
}