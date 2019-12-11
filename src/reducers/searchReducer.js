import services from "../services/movies";
export const searchUpdate = event => {
	return {
		type: "UPDATE_SEARCH_KEYWORD",
		data: event.target.value
	};
};
export const searchMovie = keyword => {
	return async dispatch => {
		const data = await services.searchMovies(keyword);
		dispatch({ type: "UPDATE_SEARCH_MOVIES", data });
	};
};

const searchreducer = (state = { keyword: "", movies: "" }, action) => {
	switch (action.type) {
		case "UPDATE_SEARCH_KEYWORD":
			return { ...state, keyword: action.data };
			break;
		case "UPDATE_SEARCH_MOVIES":
			return { ...state, movies: action.data };
			break;
		default:
			return "";
			break;
	}
};

export default searchreducer;
