import data from "../data.json"
import { createUserData } from "./actions"

const onboardingState = {
	usersData: data,
	images: [],
	isOnboard: false,
	isAuth: false,
}

export const onBoardingReducer = (state = onboardingState, action) => {
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

		case "AUTH":
			return {
				...state,
				isAuth: true,
			}

		default:
			return state
	}
}
