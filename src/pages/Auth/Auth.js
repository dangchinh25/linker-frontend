import React, { useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

import {
	InnerContainer,
	Input,
	Button,
	OuterContainer,
	SwitchMode,
} from "./AuthStyle.js"
import { Redirect } from "react-router-dom"

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

	const dispatch = useDispatch()

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

	const authSubmitHandler = async (e) => {
		e.preventDefault()

		if (auth === "login") {
			const responseData = await axios.post(
				"http://localhost:5000/user/login",
				loginData
			)
			dispatch({
				type: "LOGIN",
				payload: loginData,
			})
		} else {
			const responseData = await axios.post(
				"http://localhost:5000/user/new",
				signUpData
			)
			dispatch({
				type: "LOGIN",
				payload: responseData,
			})
		}
	}

	const Login = (
		<InnerContainer>
			<h2>Login</h2>
			<Input
				placeholder="Email..."
				name="email"
				value={loginData.email}
				onChange={onChangeAuth}
			/>
			<Input
				type="password"
				placeholder="Password..."
				name="password"
				onChange={onChangeAuth}
				value={loginData.password}
			/>
			<Button onClick={authSubmitHandler}>Login</Button>
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
				value={signUpData.name}
			/>
			<Input
				placeholder="Email..."
				name="email"
				onChange={onChangeAuth}
				value={signUpData.email}
			/>
			<Input
				type="password"
				placeholder="Password..."
				name="password"
				value={signUpData.password}
				onChange={onChangeAuth}
			/>
			<Button onClick={authSubmitHandler}>Sign Up</Button>
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
