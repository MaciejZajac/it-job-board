import React from "react";
import App from "./App";
import Layout from "./components/HOC/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Page404 from "./components/page404/Page404";
import Register from "./components/login/Register";
const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/post-offer' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route component={Page404} />
                    {/* <Route exact path='/motivation' component={Login} /> */}
                    {/* <Route exact='/home' component={App} /> */}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};
export default Router;
