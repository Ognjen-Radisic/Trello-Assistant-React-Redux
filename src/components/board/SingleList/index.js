import React from "react";
import PropTypes from "prop-types";

//components
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";

//redux
import { useSelector } from "react-redux";

const SingleList = ({ id }) => {
	const lists = useSelector((state) => state.lists);

	return (
		<div className="single-list">
			<h6 className="single-list__title">{lists[id].name}</h6>
			<SingleCard />
			<SingleCard />
			<AddCard />
		</div>
	);
};

export default SingleList;

SingleList.propTypes = {
	id: PropTypes.string.isRequired,
};
