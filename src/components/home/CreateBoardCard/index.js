import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const CreateBoardCard = () => {
	return (
		<div className="create-board-card">
			<p className="create-board-card__upper-p">Create new board</p>
			<p className="create-board-card__lower-p">5 remaing</p>
			<AiOutlineQuestionCircle className="create-board-card__question" />
		</div>
	);
};

export default CreateBoardCard;
