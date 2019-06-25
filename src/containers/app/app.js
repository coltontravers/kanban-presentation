import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";
import Board from "../components/Board/Board";
import { GlobalStyles } from "./global.styles";

import store from "../config/store";

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Board />
                <GlobalStyles />
            </div>
        </Router>
    </Provider>
);

export default hot(App);
