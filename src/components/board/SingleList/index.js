import React from "react";
import PropTypes from "prop-types";

//components
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";

const SingleList = ({ name, id }) => {
	return (
		<div className="single-list">
			<h6 className="single-list__title">{name}</h6>
			<SingleCard />
			<SingleCard />
			<AddCard />
		</div>
	);
};

export default SingleList;

SingleList.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
