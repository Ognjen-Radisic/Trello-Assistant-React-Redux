import React, { useEffect } from "react";
import AddList from "../AddList";
import SingleList from "../SingleList";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../../actions/lists";
import { useParams } from "react-router-dom";

const BoardBody = () => {
	const lists = useSelector((state) => state.lists);
	const dispatch = useDispatch();
	const { boardid } = useParams();

	useEffect(() => {
		dispatch(getLists(boardid));
	}, [dispatch, boardid]);

	return (
		<div className="board-body">
			{lists.map((item) => {
				return <SingleList key={item.id} id={item.id} name={item.name} />;
			})}
			<AddList />
		</div>
	);
};

export default BoardBody;
