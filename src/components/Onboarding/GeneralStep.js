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

	const yearSelection = year.map((item) => <option>{item}</option>)

	const genderSelection = ["Male", "Female", "Other"].map((item) => (
		<option>{item}</option>
	))

	return (
		<StepContainer>
			<input
				type="text"
				placeholder="Last name"
				name="lastName"
				onChange={onChangeHandler}
			/>
			<input
				type="text"
				placeholder="First name"
				name="firstName"
				onChange={onChangeHandler}
			/>

			<div>
				<label for="year">Year:</label>
				<select
					id="year"
					name="yearBirth"
					onChange={onChangeHandler}
				>
					{yearSelection}
				</select>
			</div>

			<div>
				<label for="gender">Gender:</label>
				<select
					id="gender"
					name="gender"
					onChange={onChangeHandler}
				>
					{genderSelection}
				</select>
			</div>

			<textarea
				placeholder="Short description"
				name="desc"
				onChange={onChangeHandler}
			/>
			<button
				onClick={() =>
					dispatch({
						type: "NEW USER",
						payload: userInfo,
					})
				}
			>
				Submit
			</button>
		</StepContainer>
	)
}

export default GeneralStep
