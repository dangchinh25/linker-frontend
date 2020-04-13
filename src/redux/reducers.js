import data from "../data.json"
import { createUserData } from "./actions"

const onboardingState = {
	usersData: data,
	images: [],
	isOnboard: false,
}

const authState = {
	isAuthenticated: false,
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

		default:
			return state
	}
}

export const authReducer = (state = authState, action) => {
	switch (action.type) {
		case "LOGIN":
			const { userId, token, expDate } = action.payload
			const localExpDate =
				expDate || new Date(new Date().getTime() + 1000 * 60 * 60)
			localStorage.setItem(
				"userAuth",
				JSON.stringify({
					userId,
					token,
					expiration: localExpDate.toISOString(),
				})
			)

			return {
				...state,
				isAuthenticated: true,
			}

		case "LOGOUT":
			localStorage.removeItem("userData")

		default:
			return state
	}
}
