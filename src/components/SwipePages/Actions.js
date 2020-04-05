import React from "react"
import styled from "styled-components"

const MainButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90px;
	height: 90px;
	border: none;
	padding: 20px;
	background-color: white;
	border-radius: 50%;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
	margin-bottom: 20px;
	outline: none;
	cursor: pointer;
	transition: 0.3s all ease;

	&:hover {
		transform: scale(1.1);
	}

	img {
		width: 100%;
		height: auto;
	}
`

const SubButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border: none;
	padding: 12px;
	background-color: white;
	border-radius: 50%;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
	margin-bottom: 20px;
	outline: none;
	cursor: pointer;
	transition: 0.3s all ease;

	&:hover {
		transform: scale(1.1);
	}

	img {
		width: 100%;
		height: auto;
	}
`

function Actions({ types, nextPerson }) {
	const renderButton = (types) => {
		switch (types) {
			case "LIKE":
				return (
					<MainButton onClick={() => nextPerson(types)}>
						<img src="images/misc/like.png" />
					</MainButton>
				)

			case "DISLIKE":
				return (
					<MainButton onClick={() => nextPerson(types)}>
						<img src="images/misc/dislike.png" />
					</MainButton>
				)

			case "SUPERLIKE":
				return (
					<SubButton onClick={() => nextPerson(types)}>
						<img src="images/misc/superlike.png" />
					</SubButton>
				)

			case "REWIND":
				return (
					<SubButton>
						<img src="images/misc/rewind.png" />
					</SubButton>
				)

			default:
				break
		}
	}

	return renderButton(types)
}

export default Actions
