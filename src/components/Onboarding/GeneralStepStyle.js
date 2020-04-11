import styled from "styled-components"

export const StepContainer = styled.div`
	display: flex;
	height: 90vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 10px;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
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

export const Textarea = styled.textarea`
	padding: 10px 23px;
	border-radius: 20px;
	border: 1px solid black;
	font-size: 15px;
	line-height: 25px;
	font-family: "Baloo Thambi 2";
	outline: none;
	margin-top: 15px;
	margin-bottom: 15px;
	resize: none;
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

export const SelectContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin-bottom: 15px;
	h3 {
		margin-top: auto;
		margin-bottom: auto;
	}
`
