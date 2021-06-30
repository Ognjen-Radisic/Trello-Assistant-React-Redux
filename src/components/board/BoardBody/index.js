import React, { useEffect } from "react";
import AddList from "../AddList";
import SingleList from "../SingleList";
import { useParams } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../../actions/lists";

//drag-drop imports
import { DragDropContext } from "react-beautiful-dnd";

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

	//drag-drop-functionality
	const onDragEnd = (result) => {
		const { draggableId, source, destination } = result;

		//this is the condition the check if user dropped draggable (card) outside of the droppable container (possible lists)
		if (!destination) {
			return;
		}

		//this condition checks did card change it's place, if not, do nothing
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		//there will be 2 dispatches. One to update state on server, and one for local reducer update
		//later it can be done with only one dispatch for server update
		//this dispatch is for only local update, data does not persist
		dispatch({
			type: "CARD_DRAG_END",
			payload: {
				draggableId, //id of the dragged card
				sourceIndex: source.index, //index in the cards array inside of list where card was before dragging
				sourceDroppableId: source.droppableId, // id of the list where card was before dragging started
				destinationIndex: destination.index, //  index of cardID in the cards array after card is dropped
				destinationDroppableId: destination.droppableId, //id of a list in which card is dropped
			},
		});
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="board-body">
				{listsOrder.map((listID) => {
					return <SingleList key={listID} listID={listID} />;
				})}
				<AddList id={boardid} />
			</div>
		</DragDropContext>
	);
};

export default BoardBody;
