import services from "../services/movies";

export const initSingleGenre = id => {
	return async dispatch => {
		const data = await services.getSingleGenre(id);
		console.log("data gotten", data);
		dispatch({ type: "SET_GENRE", data });
	};
};

const singleGenreReducer = (state = "", action) => {
	switch (action.type) {
		case "SET_GENRE":
			return action.data;
			break;
		default:
			return state;
			break;
	}
};

export default singleGenreReducer;
