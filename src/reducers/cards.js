///cards example
// const cards = {
//     "card1_id":{
//         idList: "list1_id",
//         name: "list_name",
//         pos: float,
//     },
// }
const cardsReducer = (cards = {}, action) => {
	switch (action.type) {
		case "GET_CARDS":
			return { ...cards, ...action.payload.cards };

		default:
			return cards;
	}
};

export default cardsReducer;
