import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";
import listsOrder from "./listsOrder";
import cards from "./cards";

const reducers = combineReducers({
	boards,
	lists,
	listsOrder,
	cards,
});

export default reducers;
