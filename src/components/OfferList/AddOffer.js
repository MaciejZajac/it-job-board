import React from "react";
import { connect } from "react-redux";
import { addOfferRequest } from "../../actions/offerActions";
class AddOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      jobTitle: "",
      companyCity: "",
      companyDescription: "",
      jobDescription: ""
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
        await this.props.addOfferRequest({
          ...this.state,
          token: this.props.token
        });
      } catch (err) {}
    }
  }

  render() {
    const { companyName, jobTitle, companyCity } = this.state;
    return (
      <div className="form">
        <div className="form__main-info">
          <div style={{ width: "25%" }}>
            <input
              type="file"
              name="compnayLogo"
              className="form__input-logo"
            />
          </div>
          <div style={{ width: "75%" }}>
            <div>
              <input
                name="jobTitle"
                type="text"
                placeholder="Nazwa stanowiska..."
                className="form__input"
                value={jobTitle}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                name="companyName"
                type="text"
                placeholder="Nazwa firmy..."
                className="form__input"
                value={companyName}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                name="companyCity"
                type="text"
                placeholder="Miasto..."
                className="form__input"
                value={companyCity}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="form__second-info">
          <div>
            <select name="companySize">
              <option value="0to10">0 - 10</option>
              <option value="10to50">10 - 50</option>
              <option value="50to100">50 - 100</option>
              <option value="100to500">100 - 500</option>
              <option value="500to">500+</option>
            </select>
          </div>
          <div className="form__textarea-container">
            <h4>Company description</h4>
            <textarea
              name="companyDescription"
              placeholder="Opis firmy"
              className="form__textarea"
              value={this.state.companyDescription}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form__textarea-container">
            <h4>Opis stanowiska</h4>
            <textarea
              name="jobDescription"
              placeholder="Opis stanowiska"
              className="form__textarea"
              value={this.state.jobDescription}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

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
    addOfferRequest: ({ companyName, jobTitle, companyCity }, token) =>
      dispatch(addOfferRequest({ companyName, jobTitle, companyCity }, token))
  };
}
function mapStateToProps(state) {
  return {
    token: state.authReducer.token
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOffer);
