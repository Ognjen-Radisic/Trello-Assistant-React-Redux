import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { BsX } from "react-icons/bs";

//redux
import { useDispatch } from "react-redux";
import { createBoard } from "../../../actions/boards";

const CreateBoardModal = ({ modalOpen, setModalOpen }) => {
	const [boardName, setBoardName] = useState("");
	const inputRef = useRef();
	const dispatch = useDispatch();

	const createNewBoard = () => {
		dispatch(createBoard(boardName));
		setBoardName("");
		setModalOpen(false);
	};

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
						disabled={!boardName.length}
						onClick={createNewBoard}>
						Create board
					</button>
				</div>
			</div>
		</>
	);
};

export default CreateBoardModal;

CreateBoardModal.propTypes = {
	modalOpen: PropTypes.bool.isRequired,
	setModalOpen: PropTypes.func.isRequired,
};
