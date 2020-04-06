import React from "react"
import styled from "styled-components"
import GeneralStep from "../components/Onboarding/GeneralStep"

const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 500px;
	height: 100vh;
	margin: auto;
	background-color: white;
	border-radius: 30px;
`

function Onboarding() {
	return (
		<OuterContainer>
			<GeneralStep />
		</OuterContainer>
	)
}

export default Onboarding
