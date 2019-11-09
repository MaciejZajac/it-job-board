import React from "react";

export default class OfferDetails extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div>
                <div>{item.companyName}</div>
            </div>
        );
    }
}
