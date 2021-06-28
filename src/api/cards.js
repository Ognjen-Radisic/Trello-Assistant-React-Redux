import trello from "../trelloData";

const base_url = "https://api.trello.com/1/lists/";

export const fetchCardsInList = (listID) =>
	fetch(`${base_url}${listID}/cards?key=${trello.key}&token=${trello.token}`, {
		method: "GET",
	});
