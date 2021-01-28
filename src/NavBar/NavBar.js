import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);        
    }

    // Handle Sign Out functionality
    handleSignOut() {
        this.props.signoutFunction();
    }

    render() {
        return (<nav className="nav-bar">
                <span className="header"><h4>Project Manager</h4></span>
                <span className="sign-out" onClick={this.handleSignOut}><h4>Sign Out</h4></span>
            </nav>);
    }
}

export default NavBar;