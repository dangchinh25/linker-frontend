import React, { useState } from "react"
import "./App.css"
import SwipePage from "./pages/SwipePage"

function App() {
	const [likePeople, setLikePeople] = useState([])
	const [superlikePeople, setSuperlikePeople] = useState([])
	const [dislikePeople, setDislikePeople] = useState([])

	const like = (person) => setLikePeople([...likePeople, person])
	const dislike = (person) => setDislikePeople([...dislikePeople, person])
	const superlike = (person) =>
		setSuperlikePeople([...superlikePeople, person])

	return (
		<div className="App">
			<SwipePage like={like} dislike={dislike} superlike={superlike} />
		</div>
	)
}

export default App
