import React, { useState, useCallback, useEffect } from "react"
import "./App.css"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import SwipePage from "./pages/SwipePage"
import CurrentUser from "./pages/CurrentUser"
import Onboarding from "./pages/OnBoarding"
import Auth from "./pages/Auth/Auth"
import MatchPage from "./pages/MatchPage"
import { useSelector, useDispatch } from "react-redux"

let logOutTimer

function App() {
	const [likePeople, setLikePeople] = useState([])
	const [superlikePeople, setSuperlikePeople] = useState([])
	const [dislikePeople, setDislikePeople] = useState([])

	const like = (person) => setLikePeople([...likePeople, person])
	const dislike = (person) => setDislikePeople([...dislikePeople, person])
	const superlike = (person) =>
		setSuperlikePeople([...superlikePeople, person])

	const { isAuthenticated, userId, token, expDate } = useSelector(
		(state) => state.authReducer
	)

	const dispatch = useDispatch()

	useEffect(() => {
		if (token && expDate) {
			const remainingTime = expDate.getTime() - new Date().getTime()
			logOutTimer = setTimeout(
				dispatch({ type: "LOGOUT" }),
				remainingTime
			)
		} else {
			clearTimeout(logOutTimer)
		}
	}, [token, expDate])

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userAuth"))
		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			dispatch({
				type: "LOGIN",
				payload: {
					userId: storedData.userId,
					token: storedData.token,
				},
			})
		}
	}, [])

	let routes

	if (token) {
		routes = (
			<Switch>
				<Route
					path="/swipe"
					render={() => (
						<SwipePage
							like={like}
							dislike={dislike}
							superlike={superlike}
						/>
					)}
				/>
				<Route
					path="/userprofile/:userId"
					component={CurrentUser}
				/>
				<Route path="/match" component={MatchPage} />

				<Route path="/onboarding/:userId" component={Onboarding} />
				<Redirect to="/swipe" />
			</Switch>
		)
	} else {
		routes = (
			<Switch>
				<Route path="/auth" component={Auth} />

				<Redirect to="/auth" />
			</Switch>
		)
	}

	return (
		<div className="App">
			<Router>{routes}</Router>
		</div>
	)
}

export default App
