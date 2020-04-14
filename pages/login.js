import Link from 'next/link';
import React, {useState} from "react";
import {login} from '../store/auth/actions'
import {connect} from "react-redux"
import {loginForm} from "../components/style"

const Login = ({login}) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const handleUserNameChange = (event) => {
		const value = event.target.value;
		setUserName(value);
	};

	const handleSignIn = (password) => {
		const token = btoa(password);

		login(token)

	};

	const handlePasswordChange = (event) => {
		const value = event.target.value;
		setPassword(value);
	};

	const handleLogIn = () => {
		if (userName === "admin" && password === "admin") {
			handleSignIn(password);
		}
	};

	return (
		<div style={loginForm}>
			<input placeholder="login" value={userName} onChange={handleUserNameChange}/>
			<input placeholder="password" type="password" value={password} onChange={handlePasswordChange}/>
			<button onClick={handleLogIn}>Log in</button>
		</div>
	);
}
const mapDispatchToProps = dispatch =>({
	login: token => dispatch(login(token))
})

export default connect(null,mapDispatchToProps)(Login)