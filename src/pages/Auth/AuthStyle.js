import styled from "styled-components"

export const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 500px;
	height: 100vh;
	margin: auto;
	background-color: white;
	border-radius: 30px;
`

export const InnerContainer = styled.div`
	display: flex;
	height: 95%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Input = styled.input`
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

export const Button = styled.button`
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

export const SwitchMode = styled.button`
	border: none;
	background: none;
	outline: none;
	font-size: 15px;
	cursor: pointer;
	color: blue;
`
