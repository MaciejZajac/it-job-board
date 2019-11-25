import React from "react";
import OfferList from "../OfferList/OfferList";
import Filters from "./Filters";

export default class SearchPage extends React.Component {
  render() {
    return (
      <div className="body">
        <Filters />
        <div className="body-container">
          <div className="body__offers">
            <OfferList />
          </div>
          {/* <div className="body__map">
            <Map />
          </div> */}
        </div>
      </div>
    );
  }
}
