import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import CreateBoardModal from "../CreateBoardModal";

const CreateBoardCard = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div className="create-board-card" onClick={() => setModalOpen(true)}>
				<p className="create-board-card__upper-p">Create new board</p>
				<p className="create-board-card__lower-p">5 remaining</p>
				<AiOutlineQuestionCircle className="create-board-card__question" />
			</div>
			<CreateBoardModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
		</>
	);
};

export default CreateBoardCard;
