import React, { useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from "react-select"
import {
	StepContainer,
	Input,
	InputContainer,
	Button,
	Textarea,
	SelectContainer,
} from "./GeneralStepStyle"

const StyledPicker = styled(DatePicker)`
	padding: 15px;
	outline: none;
	border-radius: 30px;
	border: 1px solid black;
	cursor: pointer;
`

const StyledSelect = styled(Select)`
	width: 190px;
	outline: none;
	border-radius: 30px;
`

function GeneralStep() {
	const [userInfo, setUserInfo] = useState({
		lastName: "",
		firstName: "",
		dateBirth: 0,
		monthBirth: 0,
		yearBirth: 0,
		gender: "Male",
		desc: "",
	})
	const [date, setDate] = useState(new Date())

	const onChangeHandler = (e) =>
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

	const data = useSelector((state) => state.usersData)
	console.log(data)

	const dispatch = useDispatch()

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

	const genderSelection = [
		{ value: "Male", label: "Male" },
		{ value: "Female", label: "Female" },
		{ value: "Other", label: "Other" },
	]

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

			<SelectContainer>
				<h3>Your date of birth</h3>
				<StyledPicker
					dateFormat="yyyy/MM/dd"
					selected={date}
					onChange={(date) => {
						setUserInfo({
							...userInfo,
							dateBirth: date.getDate(),
							monthBirth: date.getMonth(),
							yearBirth: date.getFullYear(),
						})

						setDate(date)
					}}
				/>
			</SelectContainer>

			<SelectContainer>
				<h3>Your gender</h3>
				<StyledSelect options={genderSelection} />
			</SelectContainer>

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
