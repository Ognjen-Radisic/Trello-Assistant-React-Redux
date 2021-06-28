import React from "react";
import PropTypes from "prop-types";

const SingleCard = ({ id, name }) => {
	return (
		<div className="single-card">
			<p>{name}</p>
		</div>
	);
};

export default SingleCard;

SingleCard.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
