import React, {useEffect,useState} from "react";
import {connect} from 'react-redux'
import Router, {useRouter} from 'next/router'
import Loader from './loader';

const  LoginModdlware = ({Component,pageProps,token,loading}) => {
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
	if(!((token === "" && router.pathname!=="/login") || (token !== "" && router.pathname==="/login")) && !loading) {
		return <Component {...pageProps} />
	}
	else {
		return  <Loader />
	}
}
const mapStateToProps = state => ({
	loading: state.authRedicer.token.loading,
	token: state.authRedicer.token.token
})
export default connect(mapStateToProps)(LoginModdlware)