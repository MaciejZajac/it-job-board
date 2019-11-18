import React from "react";
import OfferListItem from "./OfferListItem";
import Offer from "../../API/Offer";
import { connect } from "react-redux";
import { getJobOffers } from "../../actions";

class OfferList extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.getJobOffers();
  }

  render() {
    return (
      <div className="offer">
        <div className="offer-container">
          <ul className="offer__list">
            {this.props.jobOffers &&
              this.props.jobOffers.map(item => {
                return <OfferListItem key={item._id} item={item} />;
              })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getJobOffers: () => dispatch(getJobOffers())
  };
}

function mapStateToProps(state) {
  return {
    token: state.reducer.token,
    jobOffers: state.reducer.jobOffers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
