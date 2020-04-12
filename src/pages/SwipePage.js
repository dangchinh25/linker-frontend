import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import InfoCard from "../components/SwipePages/InfoCard"
import Header from "../components/shared/Header"
import data from "../data.json"
import Actions from "../components/SwipePages/Actions"
import { Layout } from "../components/shared/Layout"

const FooterContainer = styled.div`
	width: 100%;
	height: 13vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

function SwipePage({ like, dislike, superlike }) {
	const data = useSelector((state) => state.onBoardingReducer.usersData)

	const [people, setPeople] = useState(data)
	const [current, setCurrent] = useState(0)

	const actionTypes = {
		like: "LIKE",
		dislike: "DISLIKE",
		superlike: "SUPERLIKE",
		rewind: "REWIND",
	}

	const nextPerson = (types) => {
		switch (types) {
			case actionTypes.like:
				like(people[current])
				break

			case actionTypes.dislike:
				dislike(people[current])
				break

			case actionTypes.superlike:
				superlike(people[current])
				break

			default:
				break
		}

		setCurrent(current + 1)
	}

	return (
		<Layout>
			<Header />
			{current < people.length ? (
				<InfoCard
					type="continue"
					name={people[current].name}
					age={people[current].age}
					desc={people[current].desc}
					image={people[current].image}
				/>
			) : (
				<InfoCard type="stop" />
			)}

			<FooterContainer>
				<Actions types={actionTypes.rewind} />
				<Actions
					types={actionTypes.dislike}
					nextPerson={nextPerson}
				/>
				<Actions
					types={actionTypes.superlike}
					nextPerson={nextPerson}
				/>
				<Actions types={actionTypes.like} nextPerson={nextPerson} />
			</FooterContainer>
		</Layout>
	)
}

export default SwipePage
