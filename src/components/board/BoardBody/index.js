import React, { useEffect } from "react";
import AddList from "../AddList";
import SingleList from "../SingleList";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../../actions/lists";
import { useParams } from "react-router-dom";

const BoardBody = () => {
	const listsOrder = useSelector((state) => state.listsOrder);
	const dispatch = useDispatch();
	const { boardid } = useParams();

	useEffect(() => {
		dispatch(getLists(boardid));
	}, [dispatch, boardid]);

	return (
		<div className="board-body">
			{listsOrder.map((item) => {
				return <SingleList key={item} id={item} />;
			})}
			<AddList />
		</div>
	);
};

export default BoardBody;
