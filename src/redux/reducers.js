import data from "../data.json"

const initialState = { usersData: data }

export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "NEW USER":
			const {
				name,
				dateBirth,
				monthBirth,
				yearBirth,
				gender,
				desc,
			} = action.payload

			const newUser = {
				name: name,
				age: new Date().getFullYear() - yearBirth,
				desc: desc,
			}

			return {
				usersData: [...state.usersData, newUser],
			}

		default:
			return state
	}
}
