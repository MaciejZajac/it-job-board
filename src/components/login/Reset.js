import React from "react";

export default class Reset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: ""
    };

    this.validation = this.validation.bind(this);
    this.handlePasswordReset = this.handlePasswordReset.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handlePasswordReset(e) {
    e.preventDefault();

    if (this.validation()) {
      // console.log("poprawiam hasło!");
      // console.log(
      //   "this.props.match.params.token",
      //   this.props.match.params.token
      // );
    }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validation() {
    const { password, confirmPassword } = this.state;
    let result = true;
    if (
      password.length < 4 ||
      password.toString() !== confirmPassword.toString()
    ) {
      result = false;
    }

    return result;
  }

  render() {
    return (
      <div className="login">
        <form className="login__form">
          <input
            type="password"
            name="password"
            className="login__input"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="hasło..."
          />
          <input
            type="password"
            name="confirmPassword"
            className="login__input"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
            placeholder="powtórz hasło..."
          />
          <button
            type="submit"
            className="login__btn"
            onClick={this.handlePasswordReset}
          >
            Ustaw nowe hasło
          </button>
        </form>
      </div>
    );
  }
}
