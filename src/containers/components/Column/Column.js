import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardItem from "../BoardItem/BoardItem";
import { ColumnWrapper, ColumnHeader } from "./Column.styles";

class Column extends Component {
    render() {
        const { column } = this.props;

        return (
            <ColumnWrapper>
                <ColumnHeader>{column.name}</ColumnHeader>
                <Droppable droppableId={column.id}>
                    {provided => (
                        <div ref={provided.innerRef}>
                            {column.items.map(columnItem => {
                                return (
                                    <BoardItem
                                        key={columnItem.id}
                                        item={columnItem}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </ColumnWrapper>
        );
    }
}

export default Column;
