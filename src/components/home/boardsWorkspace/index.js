import React, { useEffect, useState } from "react";
import BoardCard from "../BoardCard";
import CreateBoardCard from "../CreateBoardCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../actions/boards";

//for fetching user name user name
import trello from "../../../trelloData";
const url = "https://api.trello.com/1/members/me?";

const BoardsWorkspace = () => {
	const dispatch = useDispatch();
	const boards = useSelector((state) => state.boards);
	const [userName, setUserName] = useState("");

	useEffect(() => {
		dispatch(getBoards());
	}, [dispatch]);

	useEffect(() => {
		const fetchUsersName = async () => {
			try {
				const res = await fetch(
					`${url}key=${trello.key}&token=${trello.token}`
				);
				const data = await res.json();

				if (data) {
					setUserName(data.fullName);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchUsersName();
	}, []);

	return (
		<div className="board-workspace">
			<h3 className="board-workspace__title">{userName}'s workspace</h3>
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
