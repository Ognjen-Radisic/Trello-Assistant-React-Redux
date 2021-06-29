//===TEMPLATE===//
// state = [listID1, listID2, listID3]

const listsOrder = (state = [], action) => {
	switch (action.type) {
		case "GET_LISTS":
			return action.payload.listsOrderByID;
		case "RESET_LISTS_ORDER":
			return [];
		case "CREATE_LIST":
			return [...state, action.payload.listID];
		case "DELETE_LIST":
			return state.filter((item) => item !== action.payload.listID);
		default:
			return state;
	}
};

export default listsOrder;
