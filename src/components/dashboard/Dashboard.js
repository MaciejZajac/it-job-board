import React from "react";
// import { getPrivateOfferList, deleteOneOffer } from "../../API/Offer";
import {
  getPrivateJobOffers,
  deleteOneOffer
} from "../../actions/offerActions";
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
    this.getPrivateOfferList = this.getPrivateOfferList.bind(this);
  }

  async componentDidMount() {
    this.getPrivateOfferList();
  }

  async getPrivateOfferList() {
    try {
      if (!this.props.token) {
        return;
      }
      await this.props.getPrivateJobOffers(this.props.token);
    } catch (err) {}
  }

  editOffer(id) {
    //
  }

  async deleteOffer(id) {
    if (!id) {
      return;
    }
    try {
      await this.props.deleteOneOffer({ id, token: this.props.token });
      // await this.getPrivateOfferListAndUser();
    } catch (err) {}
  }
  render() {
    const { offerList, user } = this.props;
    console.log("offerList", offerList);
    console.log("user", user);
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
              {offerList &&
                offerList.map(item => {
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

function mapDispatchToProps(dispatch) {
  return {
    getPrivateJobOffers: token => dispatch(getPrivateJobOffers(token)),
    deleteOneOffer: ({ id, token }) => dispatch(deleteOneOffer({ id, token }))
  };
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    token: state.authReducer.token,
    offerList: state.offerReducer.privateJobOffers,
    user: state.authReducer.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
