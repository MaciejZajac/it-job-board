import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.handleRegistration = this.handleRegistration.bind(this);
    }

    handleRegistration(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className='login'>
                <form className='login__form'>
                    <input className='login__input' type='text' placeholder='Email...' />
                    <input className='login__input' type='password' placeholder='Hasło...' />
                    <input className='login__input' type='password' placeholder='Powtórz hasło...' />
                    <button className='login__btn' type='submit' onClick={this.handleRegistration}>
                        Zarejestruj się
                    </button>
                </form>
            </div>
        );
    }
}
