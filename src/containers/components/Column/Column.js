import React, { Component } from "react";
import BoardItem from "../BoardItem/BoardItem";
import { ColumnWrapper, ColumnHeader } from "./Column.styles";

class Column extends Component {
    render() {
        const { column } = this.props;

        console.log("COLUMN:", column);

        return column.items.map((columnItem, index) => {
            return (
                <ColumnWrapper>
                    <ColumnHeader>{column.name}</ColumnHeader>
                    <BoardItem key={index} item={columnItem} />
                </ColumnWrapper>
            );
        });
    }
}

export default Column;
