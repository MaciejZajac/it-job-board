import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUserInfo } from "../../actions";
import Validation from "../../Helpers/Validation";
import Auth from "../../API/Auth";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      isActive: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.validation = this.validation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocusAction = this.handleFocusAction.bind(this);
    this.handleBlurAction = this.handleBlurAction.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validation() {
    let result = true;
    if (!Validation.validateEmail(this.state.login)) {
      result = false;
    }
    if (this.state.password.length < 4) {
      result = false;
    }

    return result;
  }

  handleFocusAction(e) {
    this.setState({
      isActive: e.target.name
    });
  }
  handleBlurAction(e) {
    this.setState({
      isActive: ""
    });
  }

  async handleLogin(e) {
    e.preventDefault();

    if (this.validation()) {
      let result;
      try {
        result = await Auth.loginHandler(this.state.login, this.state.password);
        const { userId, token } = result.data.login;

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);
        // const remainingMilliseconds = 60 * 60 * 1000;
        // const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
        // sessionStorage.setItem("expiryDate", expiryDate);
        this.props.setUserInfo({ isAuth: true, token, userId });

        this.props.history.push("/");
      } catch (err) {
        console.log("err", err);
      }
    }
  }
  render() {
    return (
      <div className="login">
        <form className="login__form">
          <div className="form__input-container">
            <span
              className={`form__input-placeholder ${
                this.state.isActive === "login" || this.state.login
                  ? "form__input-placeholder--active"
                  : ""
              }`}
            >
              Login
            </span>
            <input
              className="login__input"
              name="login"
              type="text"
              value={this.state.login}
              onChange={this.handleInputChange}
              onFocus={this.handleFocusAction}
              onBlur={this.handleBlurAction}
            />
          </div>
          <div className="form__input-container">
            <span
              className={`form__input-placeholder ${
                this.state.isActive === "password" || this.state.password
                  ? "form__input-placeholder--active"
                  : ""
              }`}
            >
              Hasło
            </span>
            <input
              className="login__input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              onFocus={this.handleFocusAction}
              onBlur={this.handleBlurAction}
            />
          </div>
          <button
            className="login__btn"
            type="submit"
            onClick={this.handleLogin}
          >
            Zaloguj się
          </button>
          <Link to="/resetPassword">Przypomnij hasło</Link>
          <br />
          <div>
            Nie masz konta?
            <Link to="/register">Załóż konto</Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {
  return {
    setUserInfo: user => dispatch(setUserInfo(user))
  };
}

export default connect(null, mapDispatchToProps)(Login);
