import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import CreateBoardModal from "../CreateBoardModal";

const CreateBoardCard = ({ howManyBoards }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const showModal = () => {
		if (10 - howManyBoards === 0) return;
		setModalOpen(true);
	};

	return (
		<>
			<div className="create-board-card" onClick={showModal}>
				<p className="create-board-card__upper-p">Create new board</p>
				<p className="create-board-card__lower-p">
					{10 - howManyBoards} remaining
				</p>
				<AiOutlineQuestionCircle className="create-board-card__question" />
			</div>
			<CreateBoardModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
		</>
	);
};

export default CreateBoardCard;
