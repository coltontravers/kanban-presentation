import React, { Component } from "react";
import { connect } from "react-redux";

class Board extends Component {
    render() {
        console.log("THE PROPS:", this.props);
        return <div />;
    }
}

const mapStateToProps = state => {
    return {
        testing: { ...state }
    };
};

export default connect(mapStateToProps)(Board);
