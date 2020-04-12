import React from "react"
import styled from "styled-components"
import Header from "../components/shared/Header"
import { Layout } from "../components/shared/Layout"

const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 500px;
	height: 100vh;
	margin: auto;
	background-color: white;
	border-radius: 30px;
`

function CurrentUser() {
	return (
		<Layout>
			<Header />
			<h2>Chinh Le</h2>
			<h3>19</h3>
			<p>Yoloooo</p>
		</Layout>
	)
}

export default CurrentUser
