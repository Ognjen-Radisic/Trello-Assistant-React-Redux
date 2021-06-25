import React from "react";
import { FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { deleteBoard } from "../../../actions/boards";

const BoardCard = ({ name, id }) => {
	const dispatch = useDispatch();

	const deleteCard = () => {
		dispatch(deleteBoard(id));
	};

	return (
		<div className="board-card">
			<div className="board-card__container">
				<h6 className="board-card__title">{name}</h6>
				<div className="board-card__delete">
					<FiTrash2 className="board-card__delete-icon" onClick={deleteCard} />
				</div>
			</div>
		</div>
	);
};

export default BoardCard;

BoardCard.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
