import React from "react";
import OfferList from "./components/OfferList/OfferList";

export default class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="body-container">
          <OfferList />
        </div>
      </div>
    );
  }
}
