import React, { useState } from "react"
import styled from "styled-components"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

const CardContainer = styled.div`
	position: relative;
	box-sizing: border-box;
	height: 80vh;
	width: 100%;
	border-radius: 1rem;
	padding: 10px;

	.info {
		position: absolute;
		z-index: 999;
		margin-left: 40px;
		left: 0;
		right: 0;
		top: 80%; /* Adjust this value to move the positioned div up and down */
		color: #fff;
		width: 60%; /* Set the width of the positioned div */
	}

	.right {
		position: absolute;
		top: 50%;
		right: 3px;
		border-radius: 50%;
		padding: 2px;
		cursor: pointer;
		box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
		transition: 0.2s all ease;

		&:hover {
			transform: scale(1.1);
		}
	}

	.left {
		position: absolute;
		top: 50%;
		left: 3px;
		border-radius: 50%;
		padding: 2px;
		cursor: pointer;
		box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
		transition: 0.2s all ease;

		&:hover {
			transform: scale(1.1);
		}
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 1.5rem;
	cursor: pointer;
	transition: 0.2s all ease;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);

	&:hover {
		transform: scale(1.01);
	}
`

function InfoCard({ name, age, desc, image, type }) {
	const [currentImage, setCurrentImage] = useState(0)

	const nextImage = () => {
		if (currentImage === image.length - 1) {
			setCurrentImage(0)
			return
		}
		setCurrentImage(currentImage + 1)
	}
	const prevImage = () => {
		if (currentImage <= 0) {
			setCurrentImage(image.length - 1)
			return
		}
		setCurrentImage(currentImage - 1)
	}

	const CardRender =
		type === "continue" ? (
			<CardContainer>
				<Image src={`/images/users/${image[currentImage]}`} />
				<ArrowBackIosIcon className="left" onClick={prevImage} />
				<ArrowForwardIosIcon
					className="right"
					onClick={nextImage}
				/>

				<div className="info">
					<p>{name}</p>
					<p>{age}</p>
					<p>{desc}</p>
				</div>
			</CardContainer>
		) : (
			<CardContainer>No more people around</CardContainer>
		)

	return CardRender
}

export default InfoCard
