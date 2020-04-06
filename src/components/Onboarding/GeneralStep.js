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
		name: "",
		dateBirth: 0,
		monthBirth: 0,
		yearBirth: 0,
		gender: "Male",
		desc: "",
	})

	const onChangeHandler = (e) =>
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

	const data = useSelector((state) => state.usersData)
	console.log(data)

	const dispatch = useDispatch()

	let date = []
	let month = []
	let year = []
	for (let i = 1980; i <= 2001; i++) {
		year.push(i)
	}
	for (let i = 1; i <= 31; i++) {
		date.push(i)
		if (i <= 12) month.push(i)
	}

	const dateSelection = date.map((item) => <option>{item}</option>)
	const monthSelection = month.map((item) => <option>{item}</option>)
	const yearSelection = year.map((item) => <option>{item}</option>)

	const genderSelection = ["Male", "Female", "Other"].map((item) => (
		<option>{item}</option>
	))

	return (
		<StepContainer>
			<input
				type="text"
				placeholder="name"
				name="name"
				onChange={onChangeHandler}
			/>
			<div>
				<label for="date">Date:</label>
				<select
					id="date"
					name="dateBirth"
					onChange={onChangeHandler}
				>
					{dateSelection}
				</select>

				<label for="month">Month:</label>
				<select
					id="month"
					name="monthBirth"
					onChange={onChangeHandler}
				>
					{monthSelection}
				</select>

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
