export const createUserData = (userInfo, images) => {
	const {
		lastName,
		firstName,
		yearBirth,
		gender,
		desc,
		dateBirth,
		monthBirth,
	} = userInfo

	const newData = {
		name: firstName + " " + lastName,
		age: new Date().getFullYear() - yearBirth,
		dateBirth,
		monthBirth,
		yearBirth,
		gender,
		desc: desc,
		images,
	}

	return newData
}
