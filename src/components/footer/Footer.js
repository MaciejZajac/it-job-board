import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer-container'>
                    <div>
                        <ul className='footer__list'>
                            <Link to='/about' className='footer__link'>
                                About
                            </Link>
                            <Link to='/motivation' className='footer__link'>
                                Motivation
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul className='footer__list'>
                            <Link to='/frontend' className='footer__link'>
                                frontend jobs
                            </Link>
                            <Link to='/backend' className='footer__link'>
                                backend jobs
                            </Link>
                            <Link to='/fullstack' className='footer__link'>
                                fullstack jobs
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul className='footer__list'>
                            <Link to='/contact' className='footer__link'>
                                contact
                            </Link>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
