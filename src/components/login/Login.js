import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ValidationService from "../../Services/ValidationService";
import AuthService from "../../Services/AuthService";
import { ConstantsEnum } from "../../constants/Constants";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.validation = this.validation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validation() {
    let result = true;
    if (!ValidationService.validateEmail(this.state.login)) {
      result = false;
    }
    if (this.state.password.length < 4) {
      result = false;
    }

    return result;
  }

  async handleLogin(e) {
    e.preventDefault();

    if (this.validation()) {
      const result = await AuthService.loginHandler(
        this.state.login,
        this.state.password
      );
      this.props.dispatch({
        type: ConstantsEnum.SET_USER_TOKEN,
        token: result.data.login.token
      });
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="login">
        <form className="login__form">
          <input
            className="login__input"
            name="login"
            type="text"
            placeholder="Email..."
            value={this.state.login}
            onChange={this.handleInputChange}
          />
          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="Hasło..."
            value={this.state.password}
            onChange={this.handleInputChange}
          />
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

export default connect()(Login);
