///cards example
// const cards = {
//     "card1_id":{
//         idList: "list1_id",
//         name: "card_name",
//         pos: float,
//     },
// }
const cardsReducer = (cards = {}, action) => {
	switch (action.type) {
		case "GET_CARDS":
			return { ...cards, ...action.payload.cards };
		case "GET_LISTS":
			return {};
		case "CREATE_CARD":
			return { ...cards, ...action.payload.newCard };
		case "DELETE_CARD":
			const cardID = action.payload.cardID;
			const { [cardID]: removed_item, ...filterdCards } = cards;
			return filterdCards;
		default:
			return cards;
	}
};

export default cardsReducer;
