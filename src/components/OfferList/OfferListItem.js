import React from "react";
import OfferDetails from "./OfferDetails";
import { connect } from "react-redux";
import { setActiveOffer } from "../../actions";

class OfferListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleChange = this.handleToggleChange.bind(this);
  }
  handleToggleChange(id) {
    if (this.props.activeOffer === this.props.item._id) {
      this.props.setActiveOffer();
    } else {
      this.props.setActiveOffer(id);
    }
  }

  render() {
    const { item } = this.props;

    return (
      <li
        className="offer__list-item"
        onClick={() => this.handleToggleChange(item._id)}
      >
        <div className="offer__main">
          <div className="offer__details">
            <div className="offer__logo">Logo</div>
            <div className="offer__job-title">
              {item.jobTitle} for {item.companyName}
            </div>
            <div className="offer__payment">
              {item.minPayment} - {item.maxPayment}
            </div>
          </div>
          {/* <div className='offer__tech'>
                {item.technologies.map(tech => (
                    <span className='offer__tech-item'>{tech}</span>
                ))}
            </div> */}
          <div className="offer__address">{item.city}</div>
        </div>
        {this.props.activeOffer === item._id && <OfferDetails item={item} />}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveOffer: id => dispatch(setActiveOffer(id))
  };
}

function mapStateToProps(state) {
  return {
    activeOffer: state.reducer.activeOffer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferListItem);
