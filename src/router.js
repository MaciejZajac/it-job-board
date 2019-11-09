import React from "react";
import App from "./App";
import Layout from "./components/HOC/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import Login from "./components/login/Login";
const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/post-offer' component={Login} />
                    <Route exact path='/register' component={Login} />
                    <Route exact path='/login' component={Login} />
                    {/* <Route exact='/home' component={App} /> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
export default Router;
