import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className='login'>
                <form className='login__form'>
                    <input className='login__input' type='text' placeholder='Email...' />
                    <input className='login__input' type='password' placeholder='Hasło...' />
                    <button className='login__btn' type='submit' onClick={this.handleLogin}>
                        Zaloguj się
                    </button>
                    {/* <p>Przypomnij hasło</p> */}
                    <br />
                    <div>
                        Nie masz konta?
                        <Link to='/register'>Załóż konto</Link>
                    </div>
                </form>
            </div>
        );
    }
}
