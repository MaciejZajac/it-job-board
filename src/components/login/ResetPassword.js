import React from "react";
import Validation from "../../Helpers/Validation";
import Auth from "../../API/Auth";

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  checkValidation() {
    let result = true;

    const { email } = this.state;
    if (!Validation.validateEmail(email)) {
      result = false;
    }

    return result;
  }

  handleFormChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handlePasswordChange(e) {
    e.preventDefault();
    if (this.checkValidation()) {
      const result = await Auth.resetPassword(this.state.email);
    }
  }

  render() {
    return (
      <div className="login">
        <form className="login__form">
          <input
            className="login__input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleFormChange}
            placeholder="Email..."
          />
          <button
            className="login__btn"
            type="submit"
            onClick={this.handlePasswordChange}
          >
            Wyślij link do przypomnienia hasła
          </button>
        </form>
      </div>
    );
  }
}
