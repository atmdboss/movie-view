export const searchUpdate = event => {
	return {
		type: "UPDATE_SEARCH_STATE",
		data: event.target.value
	};
};

const searchreducer = (state = "", action) => {
	switch (action.type) {
		case "UPDATE_SEARCH_STATE":
			return action.data;
			break;
		default:
			return "";
			break;
	}
};

export default searchreducer;
