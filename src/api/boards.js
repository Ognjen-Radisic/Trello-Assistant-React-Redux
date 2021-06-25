import trello from "../trelloData";

const url = "https://api.trello.com/1/members/me/boards";
const base_url = "https://api.trello.com/1/boards/";

export const fetchBoards = () =>
	fetch(`${url}?fields=name&key=${trello.key}&token=${trello.token}`, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
	});

export const deleteBoard = (id) => {
	fetch(`${base_url}${id}?key=${trello.key}&token=${trello.token}`, {
		method: "DELETE",
	});
};
