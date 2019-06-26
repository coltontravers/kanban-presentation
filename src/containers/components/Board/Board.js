import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../Column/Column";
import { reOrderBoardItems } from "../../actions/actions";
import { BoardWrapper } from "./Board.styles";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

class Board extends Component {
    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            console.log("DROPPABLE ID:", source.droppableId);
            // const items = reorder(
            //     this.getList(source.droppableId),
            //     source.index,
            //     destination.index
            // );

            // let state = { items };

            // if (source.droppableId === "droppable2") {
            //     state = { selected: items };
            // }

            // this.setState(state);
        } else {
            // const newResult = move(
            //     this.getList(source.droppableId),
            //     this.getList(destination.droppableId),
            //     source,
            //     destination
            // );
            // Make the call the update redux instead of state here.
            // this.setState({
            //     items: result.droppable,
            //     selected: result.droppable2
            // });
        }
    };

    render() {
        const { boardItems } = this.props;

        return (
            <BoardWrapper>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    {boardItems.columns.map(column => {
                        return <Column key={column.id} column={column} />;
                    })}
                </DragDropContext>
            </BoardWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        boardItems: state.boardItems
    };
};

const mapDispatchToProps = dispatch => ({
    reOrderBoardItems: columns => dispatch(reOrderBoardItems(columns))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);
