import React, { Component } from "react";
import { BoardItemWrapper } from "./BoardItem.styles";

export default class BoardItem extends Component {
    render() {
        const { item } = this.props;

        return <BoardItemWrapper>{item.name}</BoardItemWrapper>;
    }
}
