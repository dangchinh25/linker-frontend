import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeaderContainer = styled.div`
	width: 100%;
	height: 7vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`
const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-top: 5px;
	padding: 9px;
	background-color: white;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
	outline: none;
	cursor: pointer;
	transition: 0.3s all ease;

	&:hover {
		transform: scale(1.1);
	}

	img {
		width: 100%;
	}
`

const SwitchButton = styled.input`
	-webkit-appearance: none;
	appearance: none;
	height: 44px;
	width: 100px;
	background-color: #c6c6cc;
	border-radius: 30px;
	border: 1px solid #c6c6cc;
	outline: none;
	position: relative;
	transition: 300ms;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
	cursor: pointer;
	margin-top: 14px;

	&:checked {
	}

	&::before {
		content: "";
		width: 42px;
		height: 42px;
		position: absolute;
		background-color: #ffffff;
		border-radius: 50%;
		top: 0px;
		left: 0px;
		transition: 200ms;
		background-image: url("/images/misc/logo.png");
		background-position: center;
	}

	&:checked::before {
		left: 57px;
	}

	img {
		width: 100%;
		transform: scale(1.5);
	}
`

function Header() {
	return (
		<HeaderContainer>
			<Link to="/userprofile">
				<Button>
					<img src="images/misc/user.png" />
				</Button>
			</Link>
			<Link to="/swipe">
				<SwitchButton type="checkbox" />
			</Link>
			<Link to="/match">
				<Button>
					<img src="images/misc/messages.png" />
				</Button>
			</Link>
		</HeaderContainer>
	)
}

export default Header
