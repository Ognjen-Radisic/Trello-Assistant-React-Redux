import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import { useParams } from "react-router";

//redux
import { useDispatch } from "react-redux";
import { createList } from "../../../actions/lists";

const AddList = () => {
	const [addingMode, setAddingMode] = useState(false);
	const [listName, setListName] = useState("");
	const { boardid } = useParams();
	const dispatch = useDispatch();

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value.length <= 100) setListName(e.target.value);
	};
	const addNewList = () => {
		dispatch(createList(boardid, listName));
		console.log("hello");
		setListName("");
	};

	return (
		<>
			{addingMode ? (
				<div className="add-list__input">
					<input
						type="text"
						value={listName}
						onChange={handleChange}
						autoFocus
						// onBlur={() => setAddingMode(false)}
					/>
					<div className="add-list__btn-container">
						<button onClick={addNewList}>ADD</button>
						<BsX onClick={() => setAddingMode(false)} />
					</div>
				</div>
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
