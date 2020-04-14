import React, {useEffect,useState} from "react";
import {connect} from 'react-redux'
import Router, {useRouter} from 'next/router'
import Loader from './loader';

const  LoginModdlware = ({Component,pageProps,token}) => {
	const router = useRouter()
	useEffect(()=>{
		if (token === ""){
			if(router.pathname!=="/login") {
				Router.push('/login')
			}
		}else{
			if(router.pathname==="/login") {
				Router.push('/')
			}
		}
	})
	if(!((token === "" && router.pathname!=="/login") || (token !== "" && router.pathname==="/login"))) {
		return <Component {...pageProps} />
	}
	else {
		return  <Loader />
	}
}
const mapStateToProps = state => ({
	token: state.authRedicer.token
})
export default connect(mapStateToProps)(LoginModdlware)