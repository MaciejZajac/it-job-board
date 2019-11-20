import React from "react";
import OfferListItem from "./OfferListItem";
import { connect } from "react-redux";
import { getJobOffers } from "../../actions/offerActions";

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
    jobOffers: state.offerReducer.jobOffers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
