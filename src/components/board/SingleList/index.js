import React, { useEffect } from "react";
import PropTypes from "prop-types";

//components
import AddCard from "../AddCard";
import SingleCard from "../SingleCard";
import { FiTrash2 } from "react-icons/fi";

//redux
import { useSelector, useDispatch } from "react-redux";
import { deleteList } from "../../../actions/lists";
import { getCards } from "../../../actions/cards";

const SingleList = ({ listID }) => {
	const lists = useSelector((state) => state.lists); //list object to get list name and property cards array
	const cardsObj = useSelector((state) => state.cards); // cards object to get names of cards
	const dispatch = useDispatch();

	const handleDeleteCard = () => {
		dispatch(deleteList(listID));
	};

	useEffect(() => {
		dispatch(getCards(listID));
	}, [dispatch, listID]);

	return (
		<div className="single-list">
			<div className="single-list__top-container">
				<h6 className="single-list__title">{lists[listID].name}</h6>
				<FiTrash2
					className="single-list__delete-icon"
					onClick={handleDeleteCard}
				/>
			</div>

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
