import React from "react";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";

//redux
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../actions/cards";

const SingleCard = ({ id, name }) => {
	const deleteCard = () => {};
	return (
		<div className="single-card">
			<p>{name}</p>
			<FiTrash2 className="single-card__delete-icon" onClick={deleteCard} />
		</div>
	);
};

export default SingleCard;

SingleCard.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
