import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsX } from "react-icons/bs";

//redux
import { useDispatch } from "react-redux";
import { createList } from "../../../actions/lists";

const AddCard = ({ listID }) => {
	const [addingMode, setAddingMode] = useState(false);
	const [cardName, setCardName] = useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value.length <= 100) setCardName(e.target.value);
	};
	const addNewCard = () => {
		console.log(cardName);
		if (!cardName || cardName[0] === " ") return;
		// dispatch(createCard(listID, cardName));
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
				<div className="add-list__input">
					<div className="bum">
						<h6>hello</h6>
						<input
							type="text"
							value={cardName}
							onChange={handleChange}
							onBlur={handleClose}
							autoFocus
						/>
						<div className="add-list__btn-container">
							<button onClick={addNewCard}>Add Card</button>
							<BsX onClick={() => setAddingMode(false)} />
						</div>
					</div>
				</div>
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
