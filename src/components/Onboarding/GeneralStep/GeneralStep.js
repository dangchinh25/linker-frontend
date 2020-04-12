import React, { useState } from "react"
import styled from "styled-components"
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
} from "../StepStyle"

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

function GeneralStep({ onChangeHandler, next, userInfo, setUserInfo }) {
	const [date, setDate] = useState(new Date())

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
					value={userInfo.lastName}
				/>
				<Input
					type="text"
					placeholder="First name"
					name="firstName"
					onChange={onChangeHandler}
					value={userInfo.firstName}
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
				<StyledSelect
					options={genderSelection}
					onChange={(e) =>
						setUserInfo({ ...userInfo, gender: e.value })
					}
					defaultValue={{
						label: userInfo.gender,
						value: userInfo.gender,
					}}
				/>
			</SelectContainer>

			<Textarea
				cols="48"
				rows="7"
				placeholder="Short description"
				name="desc"
				onChange={onChangeHandler}
				value={userInfo.desc}
			/>
			<Button onClick={next}>Next</Button>
		</StepContainer>
	)
}

export default GeneralStep
