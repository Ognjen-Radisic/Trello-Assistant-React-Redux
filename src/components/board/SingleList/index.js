import React from "react";
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";

const SingleList = ({ name }) => {
	return (
		<div className="single-list">
			<h6 className="single-list__title">LIST 1</h6>
			<SingleCard />
			<SingleCard />
			<AddCard />
		</div>
	);
};

export default SingleList;
