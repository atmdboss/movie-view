import services from "../services/movies";

export const initUpcoming = () => {
	return async dispatch => {
		try {
			const data = await services.getUpcoming();
			dispatch({
				type: "UPDATE_UPCOMING",
				data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const changePageUpcoming = page => {
	return async dispatch => {
		try {
			const data = await services.getUpcoming(page.toString());
			dispatch({
				type: "UPDATE_UPCOMING",
				data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const movies = {
	topRated: "",
	popular: "",
	featured: "",
	upcoming: ""
};
const movieReducer = (state = movies, action) => {
	switch (action.type) {
		case "UPDATE_UPCOMING":
			return { ...state, upcoming: action.data };
			break;

		default:
			return state;
			break;
	}
};

export default movieReducer;
