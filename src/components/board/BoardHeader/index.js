import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getBoardName, updateBoardName } from "../../../api/boards";

//redux
import { useDispatch } from "react-redux";

const BoardHeader = () => {
	//when we click on the title it changes into input element to allow editing
	const [editMode, setEditMode] = useState(false);
	const [boardName, setBoardName] = useState("");
	const { boardid } = useParams();
	const dispatch = useDispatch();

	const getBoardNameOnMount = async (idOfBoard) => {
		try {
			const response = await getBoardName(idOfBoard);
			const data = await response.json();
			if (data) {
				const requestedBoardName = data._value;
				setBoardName(requestedBoardName);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.value.length <= 20) setBoardName(e.target.value);
	};
	const handleFocus = (e) => {
		e.target.select();
	};
	const handleCloseEdit = () => {
		setEditMode(false);
		updateBoardName(boardid, boardName);
		// dispatch(editListTitle(listID, listTitle));
	};

	useEffect(() => {
		getBoardNameOnMount(boardid);
	}, [boardid]);

	return (
		<div className="board-header">
			{editMode ? (
				<input
					type="text"
					value={boardName}
					onChange={handleChange}
					autoFocus
					onFocus={handleFocus}
					onBlur={handleCloseEdit}
				/>
			) : (
				<h3 onClick={() => setEditMode(true)}>{boardName}</h3>
			)}
		</div>
	);
};

export default BoardHeader;
