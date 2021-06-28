import trello from "../trelloData";

const base_url = "https://api.trello.com/1/boards/";
const list_url = "https://api.trello.com/1/lists";

export const fetchLists = (boardID) =>
	fetch(
		`${base_url}${boardID}/lists?key=${trello.key}&token=${trello.token}&fields=name`,
		{
			method: "GET",
		}
	);

export const createList = (boardID, name) =>
	fetch(
		`${list_url}?key=${trello.key}&token=${trello.token}&name=${name}&idBoard=${boardID}&pos=bottom`,
		{
			method: "POST",
		}
	);
