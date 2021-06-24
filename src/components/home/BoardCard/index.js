import React from "react";
import { FiTrash2 } from "react-icons/fi";

const BoardCard = () => {
	return (
		<div className="board-card">
			<div className="board-card__container">
				<h6 className="board-card__title">hello</h6>
				<div className="board-card__delete">
					<FiTrash2 className="board-card__delete-icon" />
				</div>
			</div>
		</div>
	);
};

export default BoardCard;
