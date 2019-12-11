import services from "../services/movies";

export const initCategory = category => {
	return async dispatch => {
		try {
			const data = await services.getCategory(category);
			dispatch({
				type: "UPDATE_MOVIE",
				data,
				category
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const changePageCategory = (category, page) => {
	return async dispatch => {
		try {
			const data = await services.getCategory(category, page.toString());
			dispatch({
				type: "UPDATE_MOVIE",
				data,
				category
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const movies = {
	top_rated: "",
	popular: "",
	now_playing: "",
	upcoming: ""
};
const movieReducer = (state = movies, action) => {
	switch (action.type) {
		case "UPDATE_MOVIE":
			return { ...state, [action.category]: action.data };
			break;
		default:
			return state;
			break;
	}
};

export default movieReducer;
