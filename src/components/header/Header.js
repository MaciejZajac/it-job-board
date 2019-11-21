import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearUserInfo } from "../../actions/authActions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.clearUserInfo();
  }
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <div>
            <Link to="/" className="nav__logo">
              LOGO
            </Link>
            {this.props.token && (
              <Link to="/dashboard" className="nav__link">
                Dashboard
              </Link>
            )}
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
  return {
    token: state.authReducer.token
  };
}
function mapDispatchToProps(dispatch) {
  return {
    clearUserInfo: () => dispatch(clearUserInfo())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
