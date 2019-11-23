import React, { Component } from "react";
import { connect } from "react-redux";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <div className="map__container">mapa</div>
        {this.props.activeOffer && (
          <>
            <div>{this.props.activeOffer._id}</div>
            <div>{this.props.activeOffer.companyName}</div>
            <div>{this.props.activeOffer.jobTitle}</div>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeOffer: state.offerReducer.activeOffer
  };
}

export default connect(mapStateToProps)(Map);
