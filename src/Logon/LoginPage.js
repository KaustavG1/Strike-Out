import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import './LoginPage.css';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { activePage: "SignUp" };
        this.openLogin = this.openLogin.bind(this);
        this.openSignUp = this.openSignUp.bind(this);
        this.openForgot = this.openForgot.bind(this);
        this.goBackToLogin = this.goBackToLogin.bind(this);
    }

    openSignUp() {
        this.setState({ activePage: "SignUp" });
    }

    openLogin() {
        this.setState({ activePage: "Login" });
    }

    openForgot() {
        this.setState({ activePage: "Forgot" })
    }

    goBackToLogin() {
        this.setState({ activePage: "Login" });
    }

    render() {
        return (<div className="login-page">
            {(this.state.activePage === "Login") && <Login openPage={{SignUp: this.openSignUp, ForgotPassword: this.openForgot}}/>}
            {(this.state.activePage === "SignUp") && <SignUp openPage={this.openLogin}/>}
            {(this.state.activePage === "Forgot") && <ForgotPassword openPage={this.goBackToLogin}/>}
        </div>);
    }
}

export default LoginPage;