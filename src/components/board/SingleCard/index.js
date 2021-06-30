import React from "react";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";

//redux
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../actions/cards";

//drag-drop imports
import { Draggable } from "react-beautiful-dnd";

const SingleCard = ({ id, name, listID, index }) => {
	const dispatch = useDispatch();

	const handleDeleteCard = () => {
		dispatch(deleteCard(id, listID));
	};
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					className="single-card"
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}>
					<p>{name}</p>
					<FiTrash2
						className="single-card__delete-icon"
						onClick={handleDeleteCard}
					/>
				</div>
			)}
		</Draggable>
	);
};

export default SingleCard;

SingleCard.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	listID: PropTypes.string.isRequired,
};
