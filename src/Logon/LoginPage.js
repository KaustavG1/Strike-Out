import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './LoginPage.css';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoginPageActive: false };
        this.openLogin = this.openLogin.bind(this);
        this.openSignUp = this.openSignUp.bind(this);
    }

    openSignUp() {
        this.setState({ isLoginPageActive: false });
    }

    openLogin() {
        this.setState({ isLoginPageActive: true });
    }

    render() {
        return (<div className="login-page">
            {this.state.isLoginPageActive && <Login openPage={this.openSignUp}/>}
            {!this.state.isLoginPageActive && <SignUp openPage={this.openLogin}/>}
        </div>);
    }
}

export default LoginPage;