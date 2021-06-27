import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";
import listsOrder from "./listsOrder";

const reducers = combineReducers({
	boards,
	lists,
	listsOrder,
});

export default reducers;
