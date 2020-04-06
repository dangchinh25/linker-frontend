import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import InfoCard from "../components/SwipePages/InfoCard"
import Header from "../components/SwipePages/Header"
import data from "../data.json"
import Actions from "../components/SwipePages/Actions"

const OuterContainer = styled.div`
	box-sizing: border-box;
	width: 500px;
	height: 100vh;
	margin: auto;
	background-color: white;
	border-radius: 30px;
`

const FooterContainer = styled.div`
	width: 100%;
	height: 13vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

function SwipePage({ like, dislike, superlike }) {
	const data = useSelector((state) => state.usersData)

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
		<OuterContainer>
			<Header />
			<InfoCard
				name={people[current].name}
				age={people[current].age}
				desc={people[current].desc}
				image={people[current].image}
			/>

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
		</OuterContainer>
	)
}

export default SwipePage
