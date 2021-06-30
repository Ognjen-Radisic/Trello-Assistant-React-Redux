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
			const { [action.payload.listID]: removed_item, ...filteredLists } = lists;
			return { ...filteredLists };
		case "UPDATE_LIST":
			return lists;
		case "CARD_DRAG_END":
			const {
				draggableId,
				sourceIndex,
				sourceDroppableId,
				destinationIndex,
				destinationDroppableId,
			} = action.payload;

			//if card is dropped in the same list and it has different position
			if (sourceDroppableId === destinationDroppableId) {
				//this is the array that card is removed from
				const newArray = Array.from(lists[sourceDroppableId].cards);
				newArray.splice(sourceIndex, 1);
				newArray.splice(destinationIndex, 0, draggableId);

				return {
					...lists,
					[sourceDroppableId]: {
						...lists[sourceDroppableId],
						cards: [...newArray],
					},
				};
			} else {
				const arrRemovedElement = Array.from(lists[sourceDroppableId].cards);
				arrRemovedElement.splice(sourceIndex, 1);

				const arrAddedElement = Array.from(lists[destinationDroppableId].cards);
				arrAddedElement.splice(destinationIndex, 0, draggableId);
				return {
					...lists,
					[sourceDroppableId]: {
						...lists[sourceDroppableId],
						cards: [...arrRemovedElement],
					},
					[destinationDroppableId]: {
						...lists[destinationDroppableId],
						cards: [...arrAddedElement],
					},
				};
			}
		default:
			return lists;
	}
};

export default listsReducer;
