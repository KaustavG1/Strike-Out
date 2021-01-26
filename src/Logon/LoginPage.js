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

    // Method to lift state for opening sign up page
    openSignUp() {
        this.setState({ activePage: "SignUp" });
    }

    // Method to lift state for opening login page
    openLogin() {
        this.setState({ activePage: "Login" });
    }

    // Method to lift state for opening forgot password page
    openForgot() {
        this.setState({ activePage: "Forgot" })
    }

    // Method to lift state for going back to login page
    goBackToLogin() {
        this.setState({ activePage: "Login" });
    }

    render() {
        return (<div className="login-page">
            {(this.state.activePage === "Login") && <Login openPage={{ SignUp: this.openSignUp, ForgotPassword: this.openForgot }} 
                                                           loginFunction={this.props.loginFunction}/>}
            {(this.state.activePage === "SignUp") && <SignUp openPage={this.openLogin} />}
            {(this.state.activePage === "Forgot") && <ForgotPassword openPage={this.goBackToLogin} />}
        </div>);
    }
}

export default LoginPage;