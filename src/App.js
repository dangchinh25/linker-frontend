import React, { useState } from "react"
import "./App.css"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import SwipePage from "./pages/SwipePage"
import CurrentUser from "./pages/CurrentUser"
import Onboarding from "./pages/OnBoarding"
import Auth from "./pages/Auth/Auth"
import MatchPage from "./pages/MatchPage"
import { useSelector, useDispatch } from "react-redux"

function App() {
	const [likePeople, setLikePeople] = useState([])
	const [superlikePeople, setSuperlikePeople] = useState([])
	const [dislikePeople, setDislikePeople] = useState([])

	const like = (person) => setLikePeople([...likePeople, person])
	const dislike = (person) => setDislikePeople([...dislikePeople, person])
	const superlike = (person) =>
		setSuperlikePeople([...superlikePeople, person])

	const isAuth = useSelector((state) => state.isAuth)

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/auth" component={Auth} />
					{isAuth ? (
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
					) : null}
					{isAuth ? (
						<Route
							path="/userprofile"
							component={CurrentUser}
						/>
					) : null}
					{isAuth ? (
						<Route path="/match" component={MatchPage} />
					) : null}

					{isAuth ? (
						<Route
							path="/onboarding"
							component={Onboarding}
						/>
					) : null}
					<Redirect to="/auth" />
				</Switch>
			</Router>
		</div>
	)
}

export default App
