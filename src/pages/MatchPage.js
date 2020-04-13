import React from "react"
import styled from "styled-components"
import Header from "../components/shared/Header"
import { Layout } from "../components/shared/Layout"

function MatchPage() {
	return (
		<Layout>
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
		</Layout>
	)
}

export default MatchPage
