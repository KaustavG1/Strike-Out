import React, { Component } from 'react';
import './LoginForm.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            pword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewUser = this.handleNewUser.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);

    }

    // Update the value in state
    handleChange(event) {
        //event.persist();
        this.setState({ [event.target.name]: event.target.value });
    }

    loginUser() {
        const userData = localStorage.getItem(this.state.uname);
        const userDataObj = JSON.parse(userData);
        if(userDataObj.uname === this.state.uname && userDataObj.pword === this.state.pword) {
            this.props.loginFunction();
        } else {
            // Notify username and password does not match
        }
    }

    // Handle the form submission
    handleSubmit(event) {
        event.preventDefault();
        
        // TODO: Handle the submit action
        this.loginUser();
        
        // Reset Fields
        this.setState(state => ({ ...state, uname: "", pword: "" }));
    }

    // Open new Users
    handleNewUser(event) {
        this.props.openPage.SignUp();
    }

    // Open Forgot Password
    handleForgotPassword(event) {
        this.props.openPage.ForgotPassword();
        // this.props.openPage.SignUp();
    }

    render() {
        return (<div className="card">
            <h1 className="sign">Welcome Back!</h1>
            <form onSubmit={this.handleSubmit} className="form1">
                <input name="uname" type="text" onChange={this.handleChange} value={this.state.uname} placeholder="Username" required className="input-fields" /><br />
                <input name="pword" type="password" onChange={this.handleChange} value={this.state.pword} placeholder="Password" required className="input-fields" /> <br />
                <button className="submit">Submit</button>
            </form>
            <p onClick={this.handleNewUser} className="change-page">New User? Sign Up Here</p>
            <p onClick={this.handleForgotPassword} className="change-page">Forgot Password? Reset Now</p>
        </div>);
    }
}

export default Login;