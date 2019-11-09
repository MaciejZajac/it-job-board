import React from "react";
import OfferDetails from "./OfferDetails";

export default class OfferListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false
        };

        this.handleToggleChange = this.handleToggleChange.bind(this);
    }
    handleToggleChange() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
    }

    render() {
        const { item } = this.props;

        return (
            <li className='offer__list-item' onClick={this.handleToggleChange}>
                <div className='offer__main'>
                    <div className='offer__details'>
                        <div className='offer__logo'>Logo</div>
                        <div className='offer__job-title'>
                            {item.jobTitle} for {item.companyName}
                        </div>
                        <div className='offer__payment'>
                            {item.minPayment} - {item.maxPayment}
                        </div>
                    </div>
                    {/* <div className='offer__tech'>
                {item.technologies.map(tech => (
                    <span className='offer__tech-item'>{tech}</span>
                ))}
            </div> */}
                    <div className='offer__address'>{item.city}</div>
                </div>
                {this.state.isToggleOn && <OfferDetails item={item} />}
            </li>
        );
    }
}
