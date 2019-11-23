import React from "react";
import Validation from "../../Helpers/Validation";
import { connect } from "react-redux";
import { registerHandler } from "../../actions/authActions";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  async handleRegistration(e) {
    e.preventDefault();

    if (this.checkValidation()) {
      try {
        const { email, password } = this.state;
        await this.props.registerHandler({ email, password });
      } catch (err) {
        //
      }
    }
  }
  checkValidation() {
    let result = true;

    const { email, password, confirmPassword } = this.state;
    if (!Validation.validateEmail(email)) {
      result = false;
    }
    if (password.length < 3 || password !== confirmPassword) {
      result = false;
    }

    return result;
  }

  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="login">
        <form className="login__form">
          <input
            name="email"
            className="login__input"
            type="text"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleFormChange}
          />
          <input
            name="password"
            className="login__input"
            type="password"
            placeholder="Hasło..."
            value={this.state.password}
            onChange={this.handleFormChange}
          />
          <input
            name="confirmPassword"
            className="login__input"
            type="password"
            placeholder="Powtórz hasło..."
            value={this.state.confirmPassword}
            onChange={this.handleFormChange}
          />
          <button
            className="login__btn"
            type="submit"
            onClick={this.handleRegistration}
          >
            Zarejestruj się
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //
}

function mapDispatchToProps(dispatch) {
  return {
    registerHandler: ({ user, password }) =>
      dispatch(registerHandler({ user, password }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
