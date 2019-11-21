import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { connect } from "react-redux";
import { setUserInfo, setUserToken } from "../../actions/authActions";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    const token = sessionStorage.getItem("token");
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log("token", token);
    console.log("user", user);
    if (!token || !user.userId) {
      return;
      // this.props.setUserInfo({ isAuth: false, token: "", userId: ""})
    } else {
      this.props.setUserToken(token);
      this.props.setUserInfo(user);
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUserInfo: user => dispatch(setUserInfo(user)),
    setUserToken: token => dispatch(setUserToken(token))
  };
}

export default connect(null, mapDispatchToProps)(Layout);
