import React from "react";
import Offer from "../../API/Offer";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offerList: [],
      user: {}
    };

    this.editOffer = this.editOffer.bind(this);
    this.deleteOffer = this.deleteOffer.bind(this);
  }

  async componentDidMount() {
    try {
      if (!this.props.token) {
        return;
      }
      const response = await Offer.getPrivateOfferListAndUser(this.props.token);
      this.setState({
        offerList: response.data.getPrivateOfferList.jobOffers,
        user: { ...response.data.getUserInfo }
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  editOffer(id) {
    console.log("id", id);
  }
  async deleteOffer(id) {
    console.log("delete", id);
    if (!id) {
      return;
    }
    try {
      const response = await Offer.deleteOneOffer({ id }, this.props.token);
      console.log("Response", response);
    } catch (err) {
      console.log("err", err);
    }
  }
  render() {
    const { offerList, user } = this.state;
    return (
      <div className="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__menu">
            <h1>Profile</h1>
            <br />
            <div>Email: {user.email}</div>
            {/* <div>City: {user.companyCity}</div>
            <div>Company: {user.companyName}</div> */}
          </div>
          <div className="dashboard__panel">
            <div className="dashboard__offer-list">
              <h4 className="dashboard__header">Your current job offers: </h4>
              {offerList.map(item => {
                return (
                  <div key={item._id} className="dashboard__offer-list-item">
                    <div>{item.jobTitle}</div>
                    <div>
                      <button
                        onClick={() => this.editOffer(item._id)}
                        className="dashboard__btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => this.deleteOffer(item._id)}
                        className="dashboard__btn dashboard__btn--delete"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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

export default connect(mapStateToProps)(Dashboard);
