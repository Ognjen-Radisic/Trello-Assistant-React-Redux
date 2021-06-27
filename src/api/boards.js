import trello from "../trelloData";

const url = "https://api.trello.com/1/members/me/boards";
const base_url = "https://api.trello.com/1/boards/";

export const createBoard = (name) =>
	fetch(`${base_url}?key=${trello.key}&token=${trello.token}&name=${name}`, {
		method: "POST",
	});

export const fetchBoards = () =>
	fetch(`${url}?fields=name&key=${trello.key}&token=${trello.token}`, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
	});

export const deleteBoard = (id) =>
	fetch(`${base_url}${id}?key=${trello.key}&token=${trello.token}`, {
		method: "DELETE",
	});

//used only to get board name when board page loads
export const getBoardName = (id) =>
	fetch(`${base_url}${id}/name?key=${trello.key}&token=${trello.token}`, {
		method: "GET",
	});

//update board, also used only in board header component, to update new name of the table, it doenst touch the redux state
export const updateBoardName = (id, name) =>
	fetch(
		`${base_url}${id}?key=${trello.key}&token=${trello.token}&name=${name}`,
		{
			method: "PUT",
		}
	);
