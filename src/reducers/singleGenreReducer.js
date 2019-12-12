import services from "../services/movies";

export const initSingleGenre = id => {
	return async dispatch => {
		const data = await services.getSingleGenre(id);
		console.log("data gotten", data);
		dispatch({ type: "SET_GENRE", data });
	};
};

export const changePageGenre = (id, page) => {
	return async dispatch => {
		try {
			const data = await services.getSingleGenre(id, page);
			dispatch({
				type: "SET_GENRE",
				data
			});
		} catch (error) {
			console.log(error);
		}
	};
};
export const unsetGenre = () => ({ type: "UNSET_GENRE" });

const singleGenreReducer = (state = null, action) => {
	switch (action.type) {
		case "SET_GENRE":
			return action.data;
			break;
		case "UNSET_GENRE":
			return null;
			break;
		default:
			return state;
			break;
	}
};

export default singleGenreReducer;
