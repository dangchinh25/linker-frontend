export const createNewUser = (userInfo) => {
	const { lastName, firstName, yearBirth, gender, desc } = userInfo

	const newUser = {
		name: firstName + " " + lastName,
		age: new Date().getFullYear() - yearBirth,
		gender,
		desc: desc,
	}

	return newUser
}
