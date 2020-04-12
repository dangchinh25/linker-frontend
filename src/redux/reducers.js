import data from "../data.json"
import { createUserData } from "./actions"

const initialState = {
	usersData: data,
	images: [],
	isOnboard: false,
	isAuth: false,
}

export const onBoardingReducers = (state = initialState, action) => {
	switch (action.type) {
		case "NEW ONBOARDING":
			return {
				...state,
				usersData: [
					...state.usersData,
					createUserData(action.payload, state.images),
				],
				images: [],
				isOnboard: true,
			}

		case "NEW IMAGE":
			return action.payload
				? {
						...state,
						images: [...state.images, action.payload],
				  }
				: state

		default:
			return state
	}
}
