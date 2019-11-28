import React from "react";
import OfferDetails from "./OfferDetails";
import { connect } from "react-redux";
import { setActiveOffer } from "../../actions/offerActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OfferListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange(id) {
    if (
      this.props.activeOffer &&
      this.props.activeOffer._id === this.props.item._id
    ) {
      this.props.setActiveOffer();
    } else {
      this.props.setActiveOffer(id);
    }
  }

  render() {
    const { item } = this.props;

    return (
      <li
        className={`offer__list-item ${
          this.props.activeOffer && this.props.activeOffer._id === item._id
            ? "offer__list-item--active"
            : ""
        }`}
      >
        <div
          className="offer__main"
          onClick={() => this.handleToggleChange(item)}
        >
          <div className="flex">
            <div>
              <div className="offer__logo">Logo</div>
            </div>
            <div className="offer__details">
              <div>
                <span className="offer__details-title">{item.jobTitle}</span>{" "}
                for {item.companyName}
              </div>
              <div className="offer__payment">
                {item.minPayment} - {item.maxPayment} PLN, {item.city}
              </div>
              <div className="offer__tech">
                {/* {item.technologies.map((tech, index) => (
                  <span className="offer__tech-item" key={index}>
                    {tech}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        {this.props.activeOffer && this.props.activeOffer._id === item._id && (
          <OfferDetails item={item} />
        )}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveOffer: offer => dispatch(setActiveOffer(offer))
  };
}

function mapStateToProps(state) {
  return {
    activeOffer: state.offerReducer.activeOffer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferListItem);
