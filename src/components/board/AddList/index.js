import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsX } from "react-icons/bs";

//redux
import { useDispatch } from "react-redux";
import { createList } from "../../../actions/lists";

const AddList = ({ id }) => {
	const [addingMode, setAddingMode] = useState(false);
	const [listName, setListName] = useState("");
	const dispatch = useDispatch();

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value.length <= 100) setListName(e.target.value);
	};
	const addNewList = (e) => {
		e.preventDefault();

		if (!listName || listName[0] === " ") return;
		// console.log(listName);
		dispatch(createList(id, listName));
		setListName("");
	};
	const handleClose = () => {
		setTimeout(() => {
			setAddingMode(false);
		}, 100);
	};

	return (
		<>
			{addingMode ? (
				<form className="add-list__input">
					<input
						onSubmit={handleFormSubmit}
						type="text"
						value={listName}
						onChange={handleChange}
						onBlur={handleClose}
						autoFocus
					/>
					<div className="add-list__btn-container">
						<button onClick={addNewList}>Add list</button>
						<BsX onClick={() => setAddingMode(false)} />
					</div>
				</form>
			) : (
				<div className="add-list" onClick={() => setAddingMode(true)}>
					<BiPlus />
					<h6>Add another list</h6>
				</div>
			)}
		</>
	);
};

export default AddList;
