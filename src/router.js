import React from "react";
import App from "./App";
import Layout from "./components/HOC/Layout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Page404 from "./components/page404/Page404";
import Register from "./components/login/Register";
import history from "./history";
import ResetPassword from "./components/login/ResetPassword";
import Reset from "./components/login/Reset";
import AddOffer from "./components/OfferList/AddOffer";
import Dashboard from "./components/dashboard/Dashboard";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={() =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={App} />
            <ProtectedRoute
              exact
              path="/post-offer"
              isAuthenticated={this.props.isAuthenticated}
              component={AddOffer}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/reset/:token" component={Reset} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Page404} />
            {/* <Route exact path='/motivation' component={Login} /> */}
            {/* <Route exact='/home' component={App} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    isAuthenticated: state.authReducer.isAuth
  };
}

export default connect(mapStateToProps)(Router);
