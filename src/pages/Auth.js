import React, { useState } from "react"
import styled from "styled-components"

const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 500px;
	height: 100vh;
	margin: auto;
	background-color: white;
	border-radius: 30px;
`

const InnerContainer = styled.div`
	display: flex;
	height: 95%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Input = styled.input`
	padding: 10px 10px;
	padding-left: 20px;
	border-radius: 30px;
	border: 1px solid black;
	font-size: 15px;
	line-height: 25px;
	font-family: "Baloo Thambi 2";
	outline: none;
	margin-bottom: 15px;
	margin-right: 10px;
`

const Button = styled.button`
	padding: 8px 20px;
	border: 1px solid black;
	border-radius: 15px;
	cursor: pointer;
	transition: 0.2s all ease;
	outline: none;

	&:hover {
		transform: scale(1.1);
	}
`

const SwitchMode = styled.button`
	border: none;
	background: none;
	outline: none;
	font-size: 15px;
	cursor: pointer;
	color: blue;
`

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
