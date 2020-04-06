import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import SwipePage from "./pages/SwipePage"
import CurrentUser from "./pages/CurrentUser"
import Onboarding from "./pages/OnBoarding"

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

					<Route path="/onboarding" component={Onboarding} />
				</Router>
			</div>
		</Provider>
	)
}

export default App
