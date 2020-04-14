export const SET_TOKEN = "SET_TOKEN";
export const LOGOUT = "LOGOUT";

export const login = (token) => ({
	type: SET_TOKEN,
	payload: token
});
export const logout = () => ({
	type: LOGOUT,

})