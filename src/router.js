import React from "react";
import App from "./App";
import Layout from "./components/HOC/Layout";
import { Router as BrowserRouter, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact='/' component={App} />
                    <Route exact='/home' component={App} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
export default Router;
