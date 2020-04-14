import App from 'next/app';
import {Provider} from "react-redux";
import store from "../store";
import React from "react";
import Router from 'next/router'
import { PersistGate } from 'redux-persist/integration/react';

import LoginModdlware from './../components/loginModdlware'
class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};
		return { pageProps };
	}
	render() {
		const {Component, pageProps,persistor} = this.props;

		return (
			<Provider store={store}>

					<LoginModdlware Component={Component} pageProps={pageProps} />
				<style jsx global>{`
                    html, body, #__next {
                        width: 100%;
                        height: 100%;
                        font-family: sans-serif;
                    }
                    
                    #__next {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column
                    }
                `}</style>

			</Provider>
		);
	}
}

export default MyApp;