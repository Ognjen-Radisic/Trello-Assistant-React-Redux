import React, { useEffect } from "react";
import BoardCard from "../BoardCard";
import CreateBoardCard from "../CreateBoardCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../actions/boards";

const BoardsWorkspace = () => {
	const dispatch = useDispatch();
	const boards = useSelector((state) => state.boards);

	useEffect(() => {
		dispatch(getBoards());
	}, [dispatch]);

	return (
		<div className="board-workspace">
			<h3 className="board-workspace__title">Ognjen Radisic's workspace</h3>
			<div className="board-workspace__container">
				<CreateBoardCard howManyBoards={boards.length} />
				{boards.map((item) => {
					return <BoardCard key={item.id} name={item.name} id={item.id} />;
				})}
			</div>
		</div>
	);
};

export default BoardsWorkspace;
