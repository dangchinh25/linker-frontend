import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import SwipePage from "./pages/SwipePage"
import CurrentUser from "./pages/CurrentUser"
import Onboarding from "./pages/OnBoarding"
import Auth from "./pages/Auth"
import MatchPage from "./pages/MatchPage"

function App() {
	const [likePeople, setLikePeople] = useState([])
	const [superlikePeople, setSuperlikePeople] = useState([])
	const [dislikePeople, setDislikePeople] = useState([])

	const like = (person) => setLikePeople([...likePeople, person])
	const dislike = (person) => setDislikePeople([...dislikePeople, person])
	const superlike = (person) =>
		setSuperlikePeople([...superlikePeople, person])

	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Switch>
						<Route path="/auth" component={Auth} />
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
							path="/userprofile"
							component={CurrentUser}
						/>
						<Route path="/match" component={MatchPage} />

						<Route
							path="/onboarding"
							component={Onboarding}
						/>
					</Switch>
				</Router>
			</div>
		</Provider>
	)
}

export default App
