export const setCategory = category => {
	return { type: "SET_CATEGORY", data: category };
};
const categoryReducer = (state = "upcoming", action) => {
	switch (action.type) {
		case "SET_CATEGORY":
			return action.data;
			break;
		default:
			return state;
			break;
	}
};

export default categoryReducer;
