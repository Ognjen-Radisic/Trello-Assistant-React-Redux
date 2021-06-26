import React, { useState } from "react";
import { useParams } from "react-router";

//redux
import { useDispatch, useSelector } from "react-redux";

const BoardHeader = () => {
	//when we click on the title it changes into input element to allow editing
	const [editMode, setEditMode] = useState(false);
	const { boardid } = useParams();

	//dispatch, for board name update
	const dispatch = useDispatch();

	//go through boards reducer state and pull the board that have id from paramater
	const boardObj = useSelector((state) => state.boards).find(
		(item) => item.id === boardid
	);

	return (
		<div className="board-header">
			{editMode ? <input /> : <h3>{boardObj.name}</h3>}
		</div>
	);
};

export default BoardHeader;
