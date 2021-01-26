import React, { Component } from 'react';
import './LoginForm.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    // Update the value in state
    handleChange(event) {
        //event.persist();
        this.setState({ email: event.target.value });
    }

    // Handle the form submission
    handleSubmit(event) {
        event.preventDefault();
        // TODO: Handle the submit action
        // Reset Fields
        this.setState(state => ({ ...state, email: "" }));
    }

    // Handle going back to Login page
    handleGoBack(event) {
        this.props.openPage();
    }

    render() {
        return (<div className="card">
            <h1 className="sign">Welcome Back!</h1>
            <form onSubmit={this.handleSubmit} className="form1">
                {/* <label htmlFor="username">Username</label><br /> */}
                <input id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Recovery Email" required className="input-fields" /><br />
                <button className="submit">Send Reset Link</button>
            </form>
            <p onClick={this.handleGoBack} className="change-page">Go Back</p>
        </div>);
    }
}

export default Login;