import React, { useState } from "react"
import styled from "styled-components"
import GeneralStep from "../components/Onboarding/GeneralStep/GeneralStep"
import { Layout } from "../components/shared/Layout"
import ChooseImageStep from "../components/Onboarding/ChooseImage/ChooseImageStep"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "../../src/components/Onboarding/StepStyle"

function Onboarding() {
	const [userInfo, setUserInfo] = useState({
		lastName: "",
		firstName: "",
		dateBirth: new Date().getDate(),
		monthBirth: new Date().getMonth(),
		yearBirth: new Date().getFullYear(),
		gender: "Male",
		desc: "",
	})
	const [currentStep, setCurrentStep] = useState(0)

	const onChangeHandler = (e) =>
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

	const data = useSelector((state) => state)

	const dispatch = useDispatch()

	const next = (event) => {
		if (
			userInfo.lastName == "" ||
			userInfo.firstName == "" ||
			userInfo.desc == ""
		) {
			alert("Please fill all field")
			return
		} else {
			setCurrentStep(currentStep + 1)
		}
	}

	const prev = (event) => {
		setCurrentStep(currentStep - 1)
	}

	const doneOnboarding = () => {
		dispatch({ type: "NEW ONBOARDING", payload: userInfo })
		setUserInfo({
			lastName: "",
			firstName: "",
			dateBirth: new Date().getDate(),
			monthBirth: new Date().getMonth(),
			yearBirth: new Date().getFullYear(),
			gender: "Male",
			desc: "",
		})
		window.location = "/swipe"
	}

	const steps = [
		<GeneralStep
			next={next}
			onChangeHandler={onChangeHandler}
			userInfo={userInfo}
			setUserInfo={setUserInfo}
		/>,
		<ChooseImageStep prev={prev} doneOnboarding={doneOnboarding} />,
	]

	return <Layout>{steps[currentStep]}</Layout>
}

export default Onboarding
