import React from "react";
import AddList from "../AddList";
import SingleList from "../SingleList";

const BoardBody = () => {
	return (
		<div className="board-body">
			<SingleList />
			<SingleList />
			<AddList />
		</div>
	);
};

export default BoardBody;
