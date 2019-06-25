import React, { Component } from "react";
import { connect } from "react-redux";
import Column from "../Column/Column";
import { BoardWrapper } from "./Board.styles";

class Board extends Component {
    render() {
        const { boardItems } = this.props;

        console.log("THE PROPS:", this.props);
        return (
            <BoardWrapper>
                {boardItems.columns.map((column, index) => {
                    // If at all possible, don't use index as the key.
                    // eslint-disable-next-line react/no-array-index-key
                    return <Column key={index} column={column} />;
                })}
            </BoardWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        boardItems: state.boardItems
    };
};

export default connect(mapStateToProps)(Board);
