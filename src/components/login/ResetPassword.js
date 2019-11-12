import React from "react";

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

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkValidation() {
    let result = true;

    const { email } = this.state;
    if (!this.validateEmail(email)) {
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
      const graphqlQuery = {
        query: `
              query {
                resetPassword(email: "${this.state.email}") {
                    email
                }
              }
          `
      };

      fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(graphqlQuery)
      });
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
