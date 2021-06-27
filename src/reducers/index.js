import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";

const reducers = combineReducers({
	boards,
	lists,
});

export default reducers;
