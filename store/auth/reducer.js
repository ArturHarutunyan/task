import {SET_TOKEN,LOGOUT} from "./actions";
let token = ""
if (typeof window!=="undefined") {
	token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : token
}

export default function authRedicer (state = {token: token}, action) {
	switch (action.type) {
		case SET_TOKEN:
			window.localStorage.setItem("token", action.payload);
			return {...state, token: action.payload};
		case LOGOUT:
			window.localStorage.removeItem("token");
			return {...state,token: ""}
		default:
			return {...state};
	}
}