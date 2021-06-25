const boardsReducer = (boards = [], action) => {
	switch (action.type) {
		case "GET_BOARDS":
			return action.payload;
		case "CREATE_BOARD":
			return boards;
		default:
			return boards;
	}
};

export default boardsReducer;
