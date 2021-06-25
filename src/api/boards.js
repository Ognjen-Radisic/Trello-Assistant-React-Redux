import trello from "../trelloData";

const url = "https://api.trello.com/1/members/me/boards";

export const fetchBoards = () =>
	fetch(`${url}?fields=name&key=${trello.key}&token=${trello.token}`, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
	});
