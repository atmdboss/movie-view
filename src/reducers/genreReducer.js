import services from "../services/movies";
export const initGenres = () => {
	return async dispatch => {
		try {
			const data = await services.getGenres();
			dispatch({
				type: "SET_GENRES",
				data: data.genres
			});
		} catch (error) {
			console.log(error);
		}
	};
};

const genreReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_GENRES":
			return action.data;
			break;
		default:
			return state;
			break;
	}
};

export default genreReducer;
