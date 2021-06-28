import React, { useEffect } from "react";
import PropTypes from "prop-types";

//components
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../../../actions/cards";

const SingleList = ({ id }) => {
	const lists = useSelector((state) => state.lists); //list object to get list name and property cards array
	const cardsObj = useSelector((state) => state.cards); // cards object to get names of cards
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCards(id));
	}, [dispatch, id]);

	return (
		<div className="single-list">
			<h6 className="single-list__title">{lists[id].name}</h6>
			{lists[id].cards.map((item) => {
				return <SingleCard key={item} id={item} name={cardsObj[item].name} />;
			})}

			<AddCard />
		</div>
	);
};

export default SingleList;

SingleList.propTypes = {
	id: PropTypes.string.isRequired,
};
