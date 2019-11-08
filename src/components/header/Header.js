import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/post-offer'>Post a job</Link>
                <Link to='/login'>Log in</Link>
            </nav>
        );
    }
}
