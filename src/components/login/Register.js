import React from "react";

export default class Register extends React.Component {
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

        const graphqlQuery = {
          query: `
                        mutation {
                            createUser(userInput: {
                                email: "${email}",
                                password: "${password}"
                            }) {
                                _id
                                email
                            }
                        }
                    `
        };

        const response = await fetch("http://localhost:8080/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(graphqlQuery)
        });

        console.log("response", response);

        this.props.history.push("/login");

        // this.setState({
        //     email: "",
        //     password: "",
        //     confirmPassword: ""
        // });
      } catch (err) {
        console.log("err", err);
      }
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkValidation() {
    let result = true;

    const { email, password, confirmPassword } = this.state;
    if (!this.validateEmail(email)) {
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
