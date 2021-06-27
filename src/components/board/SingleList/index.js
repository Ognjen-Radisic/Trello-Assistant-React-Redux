import React from "react";
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";

const SingleList = ({ name }) => {
	return (
		<div className="single-list">
			<h6>LIST 1</h6>
			<SingleCard />
			<SingleCard />
			<AddCard />
		</div>
	);
};

export default SingleList;
