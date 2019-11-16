import React from "react";
import OfferListItem from "./OfferListItem";
import Offer from "../../API/Offer";
import { connect } from "react-redux";

class OfferList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offerList: []
    };
  }
  async componentDidMount() {
    try {
      const offerList = await Offer.getOfferList(this.props.token);
      this.setState({
        offerList: offerList.data.getOfferList.jobOffers
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  render() {
    return (
      <div className="offer">
        <div className="offer-container">
          <ul className="offer__list">
            {this.state.offerList.map(item => {
              return <OfferListItem key={item._id} item={item} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.reducer.token
  };
}

export default connect(mapStateToProps)(OfferList);
