import trello from "../trelloData";

/// "https://api.trello.com/1/boards/:id/lists?";

const base_url = "https://api.trello.com/1/boards/";

export const fetchLists = (boardID) =>
	fetch(
		`${base_url}${boardID}/lists?key=${trello.key}&token=${trello.token}&fields=name`,
		{
			method: "GET",
		}
	);
