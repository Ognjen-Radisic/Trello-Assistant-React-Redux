import * as api from "../api/lists";

export const getLists = (boardID) => async (dispatch) => {
	try {
		const response = await api.fetchLists(boardID);
		const data = await response.json();

		dispatch({ type: "GET_LISTS", payload: data });
	} catch (error) {
		console.log(error);
	}
};
