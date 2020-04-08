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

function Auth() {
	const [auth, setAuth] = useState("login")

	const setLogin = () => {
		setAuth("login")
	}
	const setSignUp = () => {
		setAuth("signup")
	}

	const Login = (
		<InnerContainer>
			<h2>Login</h2>
			<Input placeholder="Email..." />
			<Input placeholder="Password..." />
			<Button>Login</Button>
			<p>
				Don't have an account?,
				<button onClick={setSignUp}>Sign Up</button>
			</p>
		</InnerContainer>
	)

	const SignUp = (
		<InnerContainer>
			<h2>Sign Up</h2>
			<Input placeholder="Email..." />
			<Input placeholder="Password..." />
			<Button>Login</Button>
			<p>
				Already had an accout?,
				<button onClick={setLogin}>Login</button>
			</p>
		</InnerContainer>
	)

	const AuthComponent = auth === "login" ? Login : SignUp

	return <OuterContainer>{AuthComponent}</OuterContainer>
}

export default Auth
