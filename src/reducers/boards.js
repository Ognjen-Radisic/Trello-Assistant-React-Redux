const boardsReducer = (boards = [], action) => {
	switch (action.type) {
		case "CREATE_BOARD":
			return [...boards, action.payload];
		case "GET_BOARDS":
			return action.payload;
		case "DELETE_BOARD":
			return boards.filter((item) => item.id !== action.payload);
		default:
			return boards;
	}
};

export default boardsReducer;
