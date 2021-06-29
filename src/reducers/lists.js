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
			return { ...lists, ...action.payload.newList };
		case "GET_LISTS":
			return action.payload.newListsFormat;
		case "GET_CARDS":
			const { curListID, cardsIDs } = action.payload;

			return {
				...lists,
				[curListID]: {
					...lists[curListID],
					cards: [...cardsIDs],
				},
			};
		case "CREATE_CARD":
			const { listID, cardID } = action.payload;
			return {
				...lists,
				[listID]: {
					...lists[listID],
					cards: [...lists[listID].cards, cardID],
				},
			};
		case "DELETE_CARD":
			const idList = action.payload.listID;
			const idCard = action.payload.cardID;
			const newCards = lists[idList].cards.filter((item) => item !== idCard);
			return { ...lists, [idList]: { ...lists[idList], cards: [...newCards] } };
		case "DELETE_LIST":
			return lists;
		case "UPDATE_LIST":
			return lists;
		default:
			return lists;
	}
};

export default listsReducer;
