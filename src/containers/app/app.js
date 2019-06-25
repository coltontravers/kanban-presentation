import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import Board from "../components/Board/Board";

import store from "../config/store";

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <h1>This is the app base!</h1>
                <Board />
            </div>
        </Router>
    </Provider>
);

export default hot(App);
