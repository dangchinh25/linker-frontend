import React, { useState } from "react"
import styled from "styled-components"
import {
	InnerContainer,
	Input,
	Button,
	OuterContainer,
	SwitchMode,
} from "./AuthStyle.js"

function Auth() {
	const [auth, setAuth] = useState("login")
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	})
	const [signUpData, setSignUpData] = useState({
		email: "",
		password: "",
		name: "",
	})

	const setAuthState = () => {
		auth === "login" ? setAuth("signup") : setAuth("login")
	}

	const onChangeAuth = (e) => {
		auth === "login"
			? setLoginData({ ...loginData, [e.target.name]: e.target.value })
			: setSignUpData({
					...signUpData,
					[e.target.name]: e.target.value,
			  })
	}

	const Login = (
		<InnerContainer>
			<h2>Login</h2>
			<Input
				placeholder="Email..."
				name="email"
				onChange={onChangeAuth}
			/>
			<Input
				type="password"
				placeholder="Password..."
				name="password"
				onChange={onChangeAuth}
			/>
			<Button>Login</Button>
			<p>
				Don't have an account?,
				<SwitchMode onClick={setAuthState}>Sign Up</SwitchMode>
			</p>
		</InnerContainer>
	)

	const SignUp = (
		<InnerContainer>
			<h2>Sign Up</h2>
			<Input
				placeholder="Name..."
				name="name"
				onChange={onChangeAuth}
			/>
			<Input
				placeholder="Email..."
				name="email"
				onChange={onChangeAuth}
			/>
			<Input
				type="password"
				placeholder="Password..."
				name="password"
				onChange={onChangeAuth}
			/>
			<Button>Sign Up</Button>
			<p>
				Already had an accout?,
				<SwitchMode onClick={setAuthState}>Login</SwitchMode>
			</p>
		</InnerContainer>
	)

	const AuthComponent = auth === "login" ? Login : SignUp

	return <OuterContainer>{AuthComponent}</OuterContainer>
}

export default Auth
