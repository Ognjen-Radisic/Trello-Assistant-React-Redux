//===TEMPLATE===//
// state = [listID1, listID2, listID3]

const listsOrder = (state = [], action) => {
	switch (action.type) {
		case "GET_LISTS":
			return action.payload.listsOrderByID;
		default:
			return state;
	}
};

export default listsOrder;
