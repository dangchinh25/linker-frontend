import data from "../data.json"
import { createNewUser } from "./actions"

const initialState = { usersData: data }

export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "NEW USER":
			return {
				usersData: [
					...state.usersData,
					createNewUser(action.payload),
				],
			}

		default:
			return state
	}
}
