import React, { Component } from 'react';
import './LoginForm.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            pword: "",
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleExistingUser = this.handleExistingUser.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted");
        // TODO: Handle the submit action
        // Reset Fields
        this.setState(state => ({ ...state, uname: "", pword: "", email: "" }));
    }

    handleExistingUser(event) {
        this.props.openPage();
    }

    render() {
        return (<div className="card">
            <h1 className="sign">Join Us Today</h1>
            <form onSubmit={this.handleSubmit} className="form1">
                {/* <label htmlFor="username">Username</label><br /> */}
                <input id="username" name="uname" type="text" onChange={this.handleChange} value={this.state.uname} placeholder="Username" className="input-fields"/><br/> 
                {/* <label htmlFor="email">Email</label><br /> */}
                <input id="email" name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" className="input-fields"/><br/>    
                {/* <label htmlFor="password">Password</label><br /> */}
                <input id="password" name="pword" type="password" onChange={this.handleChange} value={this.state.pword} placeholder="Password" className="input-fields"/><br />
                <button className="submit">Submit</button>
            </form>
            <p onClick={this.handleExistingUser} className="change-page">Already a User? Log In</p>
        </div>);
    }
}

export default SignUp;