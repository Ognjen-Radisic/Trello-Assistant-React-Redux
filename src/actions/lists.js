import * as api from "../api/lists";

export const getLists = (boardID) => async (dispatch) => {
	try {
		const response = await api.fetchLists(boardID);
		const data = await response.json();

		//===TEMPLATE===//
		// const listOrder= [listID1, listID2, listID3]

		//this is for $$listOrder$$ reducer
		const listsOrderByID = data.map((list) => list.id);

		///=============TEMPLATE==============///
		// const lists = {
		//     "list1_id":{
		//         id: "list1_id",
		//         name: "list_name",
		//         cards: ["card1_id, card2_id, card3_id"]
		//     },
		// }

		//this is for $$lists$$ reducer
		const newListsFormat = {};
		data.forEach((element) => {
			newListsFormat[element.id] = {
				id: element.id,
				name: element.name,
				cards: [],
			};
		});

		dispatch({
			type: "GET_LISTS",
			payload: {
				newListsFormat,
				listsOrderByID,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const createList = (boardID, name) => async (dispatch) => {
	try {
		const response = await api.createList(boardID, name);
		const data = await response.json();

		const listID = data.id;

		const newList = {};
		newList[listID] = {
			id: listID,
			name: name,
			cards: [],
		};

		dispatch({
			type: "CREATE_LIST",
			payload: {
				newList,
				listID,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteList = (listID) => async (dispatch) => {
	try {
		await api.deleteList(listID);

		dispatch({ type: "DELETE_LIST", payload: { listID } });
	} catch (error) {
		console.log(error);
	}
};
