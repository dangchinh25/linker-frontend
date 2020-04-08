import React, { useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"

const StepContainer = styled.div`
	display: flex;
	height: 90vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 10px;
`

const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
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

const Textarea = styled.textarea`
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

function GeneralStep() {
	const [userInfo, setUserInfo] = useState({
		lastName: "",
		firstName: "",
		yearBirth: 0,
		gender: "Male",
		desc: "",
	})

	const onChangeHandler = (e) =>
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

	const data = useSelector((state) => state.usersData)
	console.log(data)

	const dispatch = useDispatch()

	let year = []
	for (let i = 1980; i <= 2001; i++) {
		year.push(i)
	}

	const onClick = (event) => {
		if (
			userInfo.lastName == "" ||
			userInfo.firstName == "" ||
			userInfo.desc == ""
		) {
			alert("Please fill all field")

			return
		}
		dispatch({
			type: "NEW USER",
			payload: userInfo,
		})
	}

	const yearSelection = year.map((item) => <option>{item}</option>)

	const genderSelection = ["Male", "Female", "Other"].map((item) => (
		<option>{item}</option>
	))

	return (
		<StepContainer>
			<InputContainer>
				<Input
					type="text"
					placeholder="Last name"
					name="lastName"
					onChange={onChangeHandler}
				/>
				<Input
					type="text"
					placeholder="First name"
					name="firstName"
					onChange={onChangeHandler}
				/>
			</InputContainer>

			<InputContainer>
				<label for="year">Year of Birth: </label>
				<select
					id="year"
					name="yearBirth"
					onChange={onChangeHandler}
				>
					{yearSelection}
				</select>

				<label for="gender">Gender:</label>
				<select
					id="gender"
					name="gender"
					onChange={onChangeHandler}
				>
					{genderSelection}
				</select>
			</InputContainer>

			<Textarea
				cols="48"
				rows="7"
				placeholder="Short description"
				name="desc"
				onChange={onChangeHandler}
			/>
			<Button onClick={onClick}>Next</Button>
		</StepContainer>
	)
}

export default GeneralStep
