import trello from "../trelloData";

const base_url = "https://api.trello.com/1/lists/";
const url = "https://api.trello.com/1/cards";

export const fetchCardsInList = (listID) =>
	fetch(`${base_url}${listID}/cards?key=${trello.key}&token=${trello.token}`, {
		method: "GET",
	});

export const createCard = (listID, name) =>
	fetch(
		`${url}?key=${trello.key}&token=${trello.token}&idList=${listID}&name=${name}`,
		{
			method: "POST",
		}
	);

export const deleteCard = (cardID) =>
	fetch(`${url}/${cardID}?key=${trello.key}&token=${trello.token}`, {
		method: "DELETE",
	});
