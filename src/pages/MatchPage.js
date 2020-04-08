import React from "react"
import styled from "styled-components"
import Header from "../components/shared/Header"

const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 500px;
	height: 100vh;
	margin: auto;
	background-color: white;
	border-radius: 30px;
`

function MatchPage() {
	return (
		<OuterContainer>
			<Header />
			<div>
				<p>Matches</p>
			</div>
			<div>
				<p>Search matches</p>
			</div>
			<div>
				<p>New matches</p>
			</div>
			<div>Messages</div>
		</OuterContainer>
	)
}

export default MatchPage
