import React, { useState, useEffect, useRef, useCallback } from "react"

import styled from "styled-components"
import { Button } from "../Onboarding/StepStyle"

const PreviewImage = styled.div`
	width: 8rem;
	height: 8rem;
	border: 1px solid #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 10px;
	margin-bottom: 5px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}
`

const PickImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 15px;
`

function ImageUpload({ addImage }) {
	const [file, setFile] = useState()
	const [previewUrl, setPreviewUrl] = useState()
	const [isValid, setIsValid] = useState(false)

	const filePickerRef = useRef()

	useEffect(() => {
		if (!file) return

		const fileReader = new FileReader()
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result)
		}
		fileReader.readAsDataURL(file)
	}, [file])

	const pickerHandler = (event) => {
		let pickedFile
		let fileIsValid = isValid
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0]
			setFile(pickedFile)
			setIsValid(true)
			fileIsValid = true
		} else {
			setIsValid(false)
			fileIsValid = false
		}
		addImage(pickedFile)
	}

	const pickImageHandler = () => {
		filePickerRef.current.click()
	}

	return (
		<div>
			<input
				ref={filePickerRef}
				type="file"
				style={{ display: "none" }}
				accept=".jpg, .png, .jpeg"
				onChange={pickerHandler}
			/>
			<PickImageContainer>
				<PreviewImage>
					{previewUrl && <img src={previewUrl} alt="Preview" />}
					{!previewUrl && <p>Please pick an image</p>}
				</PreviewImage>
				<Button onClick={pickImageHandler}>Pick Image</Button>
			</PickImageContainer>
		</div>
	)
}

export default ImageUpload
