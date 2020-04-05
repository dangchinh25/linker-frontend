import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
	width: 100%;
	height: 7vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

function Header() {
	const actionTypes = {
		message: "MESSAGES",
		user: "USER",
	}

	return <HeaderContainer></HeaderContainer>
}

export default Header
