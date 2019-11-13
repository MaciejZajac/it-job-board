import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    console.log("wylogowano.");
  }
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <div>
            <Link to="/" className="nav__logo">
              LOGO
            </Link>
          </div>
          <div>
            <Link to="/post-offer" className="nav__link">
              Post a job
            </Link>
            {this.props.token ? (
              <span className="nav__link" onClick={this.handleLogout}>
                Logout
              </span>
            ) : (
              <Link to="/login" className="nav__link">
                Log in
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    token: state.reducer.token
  };
}

export default connect(mapStateToProps)(Header);
