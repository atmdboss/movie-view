import services from "../services/movies";
export const searchUpdate = event => {
	return {
		type: "UPDATE_SEARCH_KEYWORD",
		data: event.target.value
	};
};
export const clearSearch = () => {
	return {
		type: "UPDATE_SEARCH_KEYWORD",
		data: ""
	};
};
export const searchMovie = keyword => {
	return async dispatch => {
		const data = await services.searchMovies(keyword);
		dispatch({ type: "UPDATE_SEARCH_MOVIES", data });
	};
};
export const changePageSearch = (keyword, page) => {
	return async dispatch => {
		try {
			const data = await services.searchMovies(keyword, page);
			dispatch({
				type: "UPDATE_SEARCH_MOVIES",
				data
			});
		} catch (error) {
			console.log(error);
		}
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
			return state;
			break;
	}
};

export default searchreducer;
