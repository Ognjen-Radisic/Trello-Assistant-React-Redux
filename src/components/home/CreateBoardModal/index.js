import React, { useState, useRef, useEffect } from "react";
import { BsX } from "react-icons/bs";

const CreateBoardModal = ({ modalOpen, setModalOpen }) => {
	const [boardName, setBoardName] = useState("");
	const inputRef = useRef();

	useEffect(() => {
		if (modalOpen) {
			inputRef.current.focus();
		}
	}, [modalOpen]);

	if (!modalOpen) return null;
	return (
		<>
			<div
				className="create-board-modal-overlay"
				onClick={() => setModalOpen(false)}></div>
			<div className="create-board-modal">
				<div className="create-board-modal__board-title">
					<BsX
						className="create-board-modal__escape-btn"
						onClick={() => setModalOpen(false)}
					/>

					<input
						ref={inputRef}
						type="text"
						placeholder="Add board title"
						onChange={(e) => setBoardName(e.target.value)}
					/>
					<p>Ognjen Radisic's workspace</p>
				</div>
				<div className="create-board-modal__btn-container">
					<button
						className="create-board-modal__submit-btn"
						disabled={!boardName.length}>
						Create board
					</button>
				</div>
			</div>
		</>
	);
};

export default CreateBoardModal;
