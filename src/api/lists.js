import trello from "../trelloData";

const base_url = "https://api.trello.com/1/boards/";
const list_url = "https://api.trello.com/1/lists";
// const delete_url = "https://api.trello.com/1/lists/:idList/closed?";

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

// There is no functionality for deleting list, but this next best solution
// ARCHIVE LIST, but I'll call it delete list for simplicity reasons
export const deleteList = (listID) =>
	fetch(
		`${list_url}/${listID}/closed?key=${trello.key}&token=${trello.token}&value=true`,
		{
			method: "PUT",
		}
	);
