///list example
// const lists = {
//     "list1_id":{
//         id: "list1_id",
//         name: "list_name",
//         cards: ["card1_id, card2_id, card3_id"]
//     },
// }

const listsReducer = (lists = {}, action) => {
	switch (action.type) {
		case "CREATE_LIST":
			return lists;
		case "GET_LISTS":
			return action.payload.newListsFormat;
		case "GET_CARDS":
			const { curListID, cardsIDs } = action.payload;
			const list = lists[curListID];
			list.cards = [...cardsIDs];
			return { ...lists, [curListID]: list };
		case "DELETE_LIST":
			return lists;
		case "UPDATE_LIST":
			return lists;
		default:
			return lists;
	}
};

export default listsReducer;
