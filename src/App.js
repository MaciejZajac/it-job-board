import React from "react";
import OfferList from "./components/OfferList/OfferList";
import Map from "./components/map/Map";

export default class App extends React.Component {
  render() {
    return (
      <div className="body">
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
