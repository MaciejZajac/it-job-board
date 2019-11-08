import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import store from "./store";
import "./styles/main.scss";
import Router from "./router";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("root")
);
