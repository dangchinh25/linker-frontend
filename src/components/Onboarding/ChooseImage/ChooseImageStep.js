import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import ImageUpload from "../../shared/ImageUpload"
import { useSelector, useDispatch } from "react-redux"
import { StepContainer, Button } from "../StepStyle"

const PickerContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`
const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	margin-top: 20px;
	justify-content: space-around;
`

function ChooseImageStep({ prev, doneOnboarding }) {
	const [countFile, setCountFile] = useState(0)

	const dispatch = useDispatch()

	const addImage = useCallback((value) => {
		dispatch({
			type: "NEW IMAGE",
			payload: value,
		})
		setCountFile(countFile + 1)
	})

	const data = useSelector((state) => state.images)

	return (
		<StepContainer>
			<h2>Choose your profile images</h2>
			<PickerContainer>
				<ImageUpload addImage={addImage} />
				<ImageUpload addImage={addImage} />
				<ImageUpload addImage={addImage} />
				<ImageUpload addImage={addImage} />
				<ImageUpload addImage={addImage} />
				<ImageUpload addImage={addImage} />
			</PickerContainer>
			<ButtonContainer>
				<Button onClick={prev}>Back</Button>
				<Button onClick={doneOnboarding}>Done</Button>
			</ButtonContainer>
		</StepContainer>
	)
}

export default ChooseImageStep
