import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsX } from "react-icons/bs";

//redux
import { useDispatch } from "react-redux";
import { createCard } from "../../../actions/cards";

const AddCard = ({ listID }) => {
	const [addingMode, setAddingMode] = useState(false);
	const [cardName, setCardName] = useState("");
	const dispatch = useDispatch();

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value.length <= 100) setCardName(e.target.value);
	};
	const addNewCard = (e) => {
		e.preventDefault();
		// console.log(cardName);
		if (!cardName || cardName[0] === " ") return;
		dispatch(createCard(listID, cardName));
		setCardName("");
	};
	const handleClose = () => {
		setTimeout(() => {
			setAddingMode(false);
		}, 100);
	};

	return (
		<>
			{addingMode ? (
				<form className="add-card-form">
					<input
						onSubmit={handleFormSubmit}
						type="text"
						value={cardName}
						onChange={handleChange}
						onBlur={handleClose}
						autoFocus
						placeholder="Enter a title for this card..."
					/>
					<div className="add-card-form__btn-container">
						<button className="add-card-form__submit-btn" onClick={addNewCard}>
							Add Card
						</button>
						<BsX
							onClick={() => setAddingMode(false)}
							className="add-card-form__close-btn"
						/>
					</div>
				</form>
			) : (
				<div className="add-card" onClick={() => setAddingMode(true)}>
					<BiPlus />
					<p>Add another card</p>
				</div>
			)}
		</>
	);
};

export default AddCard;
