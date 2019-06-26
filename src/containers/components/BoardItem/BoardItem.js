import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BoardItemWrapper } from "./BoardItem.styles";

export default class BoardItem extends Component {
    render() {
        const { item } = this.props;

        return (
            <BoardItemWrapper>
                <Draggable draggableId={item.id} index={item.id}>
                    {provided => (
                        <BoardItemWrapper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            {item.name}
                        </BoardItemWrapper>
                    )}
                </Draggable>
            </BoardItemWrapper>
        );
    }
}
