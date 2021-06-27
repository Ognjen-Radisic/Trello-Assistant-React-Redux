const listsReducer = (lists = [], action) => {
	switch (action.type) {
		case "CREATE_BOARD":
			return lists;
		case "GET_LISTS":
			return action.payload;
		case "DELETE_BOARD":
			return lists;
		default:
			return lists;
	}
};

export default listsReducer;
