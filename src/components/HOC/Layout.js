import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { connect } from "react-redux";
import { setUserInfo } from "../../actions/index";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    if (!token || !userId) {
      return;
      // this.props.setUserInfo({ isAuth: false, token: "", userId: ""})
    } else {
      this.props.setUserInfo({ isAuth: true, token, userId });
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
    setUserInfo: user => dispatch(setUserInfo(user))
  };
}

export default connect(null, mapDispatchToProps)(Layout);
