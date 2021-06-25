import * as api from "../api/boards";

export const getBoards = () => async (dispatch) => {
	try {
		const response = await api.fetchBoards();
		const data = await response.json();

		dispatch({ type: "GET_BOARDS", payload: data });
	} catch (error) {
		console.log(error);
	}
};
