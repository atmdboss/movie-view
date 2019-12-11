import services from "../services/movies";

export const initMovie = id => {
	return async dispatch => {
		const data = await services.getSingleMovie(id);
		dispatch({ type: "SET_MOVIE", data });
	};
};
export const unmountMovie = () => {
	return { type: "UNSET_MOVIE" };
};

const singleMovieReducer = (state = "", action) => {
	switch (action.type) {
		case "SET_MOVIE":
			return action.data;
			break;
		case "UNSET_MOVIE":
			return "";
			break;
		default:
			return state;
			break;
	}
};

export default singleMovieReducer;
