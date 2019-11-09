import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className='nav-container'>
                    <div>
                        <Link to='/' className='nav__logo'>
                            LOGO
                        </Link>
                    </div>
                    <div>
                        <Link to='/post-offer' className='nav__link'>
                            Post a job
                        </Link>
                        <Link to='/login' className='nav__link'>
                            Log in
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
