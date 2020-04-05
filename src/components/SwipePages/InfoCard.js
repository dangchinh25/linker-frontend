import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
	position: relative;
	box-sizing: border-box;
	height: 80vh;
	width: 100%;
	border-radius: 1rem;
	padding: 5px;

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
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 1.5rem;
`

function InfoCard({ name, age, desc, image }) {
	return (
		<CardContainer>
			<Image src={`/images/users/${image}`} />
			<div className="info">
				<p>{name}</p>
				<p>{age}</p>
				<p>{desc}</p>
			</div>
		</CardContainer>
	)
}

export default InfoCard
