import {SET_TOKEN, LOGOUT} from "./actions";


let token = {
	token: "",
	loading: false,
}
if (typeof window !== "undefined") {
	token = {
		token: window.localStorage.getItem("token") ? window.localStorage.getItem("token") : token.token,
		loading: false
	}
}

export default function authRedicer(state = {token: token}, action) {
	switch (action.type) {
		case SET_TOKEN:
			window.localStorage.setItem("token", action.payload);
			return {
				...state,
				token: {
					...state.token,
					token: action.payload,
					loading: false
				}
			};
		case LOGOUT:
			window.localStorage.removeItem("token");
			return {
				...state, token: {
					token: "",
					loading: false,
				}
			}
		default:
			return {...state};
	}
}