import React from "react";
import { connect } from "react-redux";
import { addOfferRequest } from "../../actions/offerActions";
import history from "../../history";
class AddOffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reqBody: {
        companyName: "",
        companyDescription: "",
        projectDescription: "",
        companyCity: "",
        jobTitle: "",
        experience: "junior",
        companyPage: "",
        companyAdress: "",
        minPayment: undefined,
        maxPayment: undefined
      },
      errorArray: []
    };

    this.validation = this.validation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddOfferRequest = this.handleAddOfferRequest.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      reqBody: {
        ...this.state.reqBody,
        [e.target.name]: e.target.value
      }
    });
  }

  validation() {
    let result = true;
    const errorArray = [];
    const {
      companyName,
      jobTitle,
      companyCity,
      companyDescription,
      projectDescription,
      companyPage,
      companyAdress,
      minPayment,
      maxPayment
    } = this.state.reqBody;
    if (companyName.length < 3) {
      result = false;
      errorArray.push("companyName");
    }
    if (jobTitle.length < 3) {
      result = false;
      errorArray.push("jobTitle");
    }
    if (companyCity.length < 3) {
      result = false;
      errorArray.push("companyCity");
    }
    if (companyDescription.length < 3) {
      result = false;
      errorArray.push("companyDescription");
    }
    if (projectDescription.length < 3) {
      result = false;
      errorArray.push("projectDescription");
    }
    if (companyPage.length < 3) {
      result = false;
      errorArray.push("companyPage");
    }
    if (companyAdress.length < 3) {
      result = false;
      errorArray.push("companyAdress");
    }
    if (!minPayment) {
      result = false;
      errorArray.push("minPayment");
    }
    if (!maxPayment) {
      result = false;
      errorArray.push("maxPayment");
    }

    this.setState({
      errorArray
    });
    return result;
  }
  async handleAddOfferRequest() {
    //
    if (this.validation()) {
      try {
        await this.props.addOfferRequest({
          body: this.state.reqBody,
          token: this.props.token
        });
        history.push("/search");
      } catch (err) {
        //
      }
    }
  }

  render() {
    const {
      companyName,
      jobTitle,
      companyCity,
      companyDescription,
      projectDescription,
      companyPage,
      companyAdress
    } = this.state.reqBody;
    const { errorArray } = this.state;
    return (
      <div className="form">
        <div className="form__input-container">
          <input
            name="jobTitle"
            type="text"
            className={`form__input ${errorArray.includes("jobTitle") &&
              "form__input--error"}`}
            placeholder="Nazwa stanowiska..."
            value={jobTitle}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__input-container">
          <input
            name="companyName"
            type="text"
            className={`form__input ${errorArray.includes("companyName") &&
              "form__input--error"}`}
            placeholder="Nazwa firmy..."
            value={companyName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__input-container">
          <select
            name="experience"
            className="form__select"
            onChange={this.handleInputChange}
            defaultValue="junior"
          >
            <option value="junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="form__input-container">
          <input
            name="companyCity"
            type="text"
            className={`form__input ${errorArray.includes("companyCity") &&
              "form__input--error"}`}
            placeholder="Miasto..."
            value={companyCity}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__input-container">
          <input
            name="companyAdress"
            type="text"
            className={`form__input ${errorArray.includes("companyAdress") &&
              "form__input--error"}`}
            placeholder="Adres..."
            value={companyAdress}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__input-container">
          <input
            name="companyPage"
            type="text"
            className={`form__input ${errorArray.includes("companyPage") &&
              "form__input--error"}`}
            placeholder="strona firmy..."
            value={companyPage}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__textarea-container">
          <h4 className="form__subheader">Company description</h4>
          <textarea
            name="companyDescription"
            className="form__textarea"
            className={`form__textarea ${errorArray.includes(
              "companyDescription"
            ) && "form__textarea--error"}`}
            placeholder="Opis firmy"
            value={companyDescription}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__textarea-container">
          <h4 className="form__subheader">Opis stanowiska</h4>
          <textarea
            name="projectDescription"
            placeholder="Opis projektu"
            className={`form__textarea ${errorArray.includes(
              "projectDescription"
            ) && "form__textarea--error"}`}
            value={projectDescription}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__input-container flex flex--align-center">
          <input
            name="minPayment"
            type="number"
            className={`form__input ${errorArray.includes("minPayment") &&
              "form__input--error"}`}
            placeholder="miesięcznie od..."
            onChange={this.handleInputChange}
          />
          <span className="form__dash"> - </span>
          <input
            name="maxPayment"
            type="number"
            className={`form__input ${errorArray.includes("maxPayment") &&
              "form__input--error"}`}
            placeholder="miesięcznie do..."
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form__btn-container">
          <button
            type="submit"
            className="form__btn"
            onClick={this.handleAddOfferRequest}
          >
            Dodaj ofertę
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOfferRequest: (body, token) => dispatch(addOfferRequest(body, token))
  };
}
function mapStateToProps(state) {
  return {
    token: state.authReducer.token
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOffer);
