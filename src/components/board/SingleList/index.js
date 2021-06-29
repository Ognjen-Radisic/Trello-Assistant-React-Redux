import React, { useEffect } from "react";
import PropTypes from "prop-types";

//components
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../../../actions/cards";

const SingleList = ({ listID }) => {
	const lists = useSelector((state) => state.lists); //list object to get list name and property cards array
	const cardsObj = useSelector((state) => state.cards); // cards object to get names of cards
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCards(listID));
	}, [dispatch, listID]);

	return (
		<div className="single-list">
			<h6 className="single-list__title">{lists[listID].name}</h6>
			{lists[listID].cards.map((item) => {
				return (
					<SingleCard
						key={item}
						id={item}
						name={cardsObj[item].name}
						listID={listID}
					/>
				);
			})}

			<AddCard listID={listID} />
		</div>
	);
};

export default SingleList;

SingleList.propTypes = {
	listID: PropTypes.string.isRequired,
};
