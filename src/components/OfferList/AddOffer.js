import React from "react";
import { connect } from "react-redux";
import { addNewOffer } from "../../API/Offer";
class AddOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      jobTitle: "",
      companyCity: ""
    };

    this.validation = this.validation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddOfferRequest = this.handleAddOfferRequest.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validation() {
    let result = true;

    const { companyName, companyCity, jobTitle } = this.state;
    if (
      companyName.length < 4 ||
      companyCity.length < 4 ||
      jobTitle.length < 4
    ) {
      result = false;
    }

    return result;
  }
  async handleAddOfferRequest() {
    //
    if (this.validation()) {
      try {
        await this.props.addNewOffer({ ...this.state }, this.props.token);
        // this.setState({
        //   companyName: "",
        //   jobTitle: "",
        //   companyCity: ""
        // })
      } catch (err) {}
    }
  }

  render() {
    const { companyName, jobTitle, companyCity } = this.state;
    return (
      <div className="form">
        <input
          name="companyName"
          type="text"
          placeholder="Nazwa firmy..."
          className="form__input"
          value={companyName}
          onChange={this.handleInputChange}
        />
        <input
          name="jobTitle"
          type="text"
          placeholder="Nazwa stanowiska..."
          className="form__input"
          value={jobTitle}
          onChange={this.handleInputChange}
        />
        <input
          name="companyCity"
          type="text"
          placeholder="Miasto..."
          className="form__input"
          value={companyCity}
          onChange={this.handleInputChange}
        />
        {/* <select name="companySize">
          <option value="0to10">0 - 10</option>
          <option value="10to50">10 - 50</option>
          <option value="50to100">50 - 100</option>
          <option value="100to500">100 - 500</option>
          <option value="500to">500+</option>
        </select> */}
        {/* <textarea name="companyDescription" placeholder="Opis firmy" /> */}
        <button
          type="submit"
          className="form__btn"
          onClick={this.handleAddOfferRequest}
        >
          Zaakceptuj
        </button>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addNewOffer: ({ companyName, jobTitle, companyCity }, token) =>
      dispatch(addNewOffer({ companyName, jobTitle, companyCity }, token))
  };
}
function mapStateToProps(state) {
  return {
    token: state.authReducer.token
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOffer);
