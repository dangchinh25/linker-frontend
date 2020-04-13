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
import { useSelector } from "react-redux"

function App() {
	const [likePeople, setLikePeople] = useState([])
	const [superlikePeople, setSuperlikePeople] = useState([])
	const [dislikePeople, setDislikePeople] = useState([])

	const like = (person) => setLikePeople([...likePeople, person])
	const dislike = (person) => setDislikePeople([...dislikePeople, person])
	const superlike = (person) =>
		setSuperlikePeople([...superlikePeople, person])

	const isAuth = useSelector((state) => state.authReducer.isAuthenticated)
	console.log(isAuth)
	let routes

	if (isAuth) {
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
				<Route path="/userprofile" component={CurrentUser} />
				<Route path="/match" component={MatchPage} />

				<Route path="/onboarding" component={Onboarding} />
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
