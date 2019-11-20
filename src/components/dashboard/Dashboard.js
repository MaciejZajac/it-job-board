import React from "react";
import { getPrivateOfferListAndUser, deleteOneOffer } from "../../API/Offer";
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
    this.getPrivateOfferListAndUser = this.getPrivateOfferListAndUser.bind(
      this
    );
  }

  async componentDidMount() {
    this.getPrivateOfferListAndUser();
  }

  async getPrivateOfferListAndUser() {
    try {
      if (!this.props.token) {
        return;
      }
      await this.props.getPrivateOfferListAndUser(this.props.token);
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
      await this.props.deleteOneOffer({ id }, this.props.token);
      // await this.getPrivateOfferListAndUser();
    } catch (err) {}
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

function mapDispatchToProps(dispatch) {
  return {
    getPrivateOfferListAndUser: token =>
      dispatch(getPrivateOfferListAndUser(token)),
    deleteOneOffer: ({ id }, token) => dispatch(deleteOneOffer({ id }, token))
  };
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    // token: state.reducer.token,
    // offerList: state.reducer.offerList,
    // user: state.reducer.user
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
