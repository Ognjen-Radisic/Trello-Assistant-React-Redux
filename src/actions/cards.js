import * as api from "../api/cards";

export const getCards = (listID) => async (dispatch) => {
	try {
		const response = await api.fetchCardsInList(listID);
		const data = await response.json();

		//this is for $$lists$$ reducer (2 payloads)
		const cardsIDs = data.map((card) => card.id);
		const curListID = listID;

		///=============TEMPLATE==============///
		///cards example
		// const cards = {
		//     "card1_id":{
		//         idList: "list1_id",
		//         name: "list_name",
		//         pos: float,
		//     },
		// }

		//this is for $$cards$$ reducer
		const cards = {};
		data.forEach((element) => {
			cards[element.id] = {
				idList: element.idList,
				name: element.name,
				pos: element.pos,
			};
		});

		dispatch({
			type: "GET_CARDS",
			payload: {
				curListID, // id of the specif list (current list)
				cards, // object of all cards structured in specific format (template above)
				cardsIDs, //array of card ids for specif list
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const createCard = (listID, name) => async (dispatch) => {
	try {
		const response = await api.createCard(listID, name);
		const data = await response.json();

		const cardID = data.id;

		const newCard = {};
		newCard[cardID] = {
			idList: listID,
			name: name,
			pos: data.pos,
		};

		dispatch({
			type: "CREATE_CARD",
			payload: {
				cardID,
				listID,
				newCard,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
