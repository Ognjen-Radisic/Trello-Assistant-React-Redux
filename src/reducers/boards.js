const boardsReducer = (boards = [], action) => {
	switch (action.type) {
		case "GET_BOARDS":
			return boards;
		case "CREATE_BOARD":
			return boards;
		default:
			return boards;
	}
};

export default boardsReducer;
