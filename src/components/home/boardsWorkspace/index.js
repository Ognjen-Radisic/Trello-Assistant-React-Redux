import React from "react";
import BoardCard from "../BoardCard";

const BoardsWorkspace = () => {
	return (
		<div className="board-workspace">
			<h3 className="board-workspace__title">Ognjen Radisic's workspace</h3>
			<div className="board-workspace__container">
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
			</div>
		</div>
	);
};

export default BoardsWorkspace;
