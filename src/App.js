import React from "react";
import OfferList from "./components/OfferList/OfferList";

class App extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className='body-container'>
                    <OfferList />
                </div>
            </div>
        );
    }
}

export default App;
