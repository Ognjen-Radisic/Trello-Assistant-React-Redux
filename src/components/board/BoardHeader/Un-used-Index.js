import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//redux
import { useSelector } from "react-redux";

///THIS COMPONENT is not used, But I will leave as a riminder to mayself of this situation
/// because on page refresh (or directly accessing this url) useSelector cannot retreive state that does not exist (it's not yet created)
/// redux state for boards is made on root path '/', so when we go from base path it works fine, otherwise reducer is undefined
/// one of the solutions is to fetch neccesary data each time component renders
/// grab name of the board with api call, not through redux state

const BoardHeader = () => {
	//when we click on the title it changes into input element to allow editing
	const [editMode, setEditMode] = useState(false);
	const [boardName, setBoardName] = useState("");
	const { boardid } = useParams();
	console.log(boardid);

	//go through boards reducer state and pull the board that have id from paramater
	const boardObj = useSelector((state) => {
		const curObj = state.boards.find((item) => item.id === boardid);
		console.log(curObj);
		return curObj;
	});

	useEffect(() => {
		if (boardObj) {
			setBoardName(boardObj.name);
		}
	}, [boardObj]);

	return (
		<div className="board-header">
			{editMode ? <input /> : <h3>{boardName}</h3>}
		</div>
	);
};

export default BoardHeader;
