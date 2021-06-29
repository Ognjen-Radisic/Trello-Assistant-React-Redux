import React, { useEffect } from "react";
import AddList from "../AddList";
import SingleList from "../SingleList";
import { useParams } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../../actions/lists";

const BoardBody = () => {
	const listsOrder = useSelector((state) => state.listsOrder);
	const dispatch = useDispatch();
	const { boardid } = useParams();

	useEffect(() => {
		dispatch(getLists(boardid));
		return () => {
			dispatch({ type: "RESET_LISTS_ORDER" });
		};
	}, [dispatch, boardid]);

	return (
		<div className="board-body">
			{listsOrder.map((item) => {
				return <SingleList key={item} listID={item} />;
			})}
			<AddList id={boardid} />
		</div>
	);
};

export default BoardBody;
