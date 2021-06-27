const listsOrder = (state = [], action) => {
	switch (action.type) {
		case "GET_LISTS":
			return action.payload.map((item) => item.id);
		default:
			return state;
	}
};

export default listsOrder;
