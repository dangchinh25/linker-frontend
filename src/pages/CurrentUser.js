import React from "react"
import styled from "styled-components"
import Header from "../components/shared/Header"
import { Layout } from "../components/shared/Layout"
import { PersonalContainer, InfoContainer } from "./PagesStyle"

function CurrentUser() {
	return (
		<Layout>
			<Header />
			<PersonalContainer>
				<InfoContainer>
					<h2>Chinh Le</h2>
					<h3>19</h3>
				</InfoContainer>
				<InfoContainer>
					<p>Bio: Yolo</p>
				</InfoContainer>
			</PersonalContainer>
		</Layout>
	)
}

export default CurrentUser
