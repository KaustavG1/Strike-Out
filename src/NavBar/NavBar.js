import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (<nav className="nav-bar">
                <div className="header">
                    <h4>Project Manager</h4>
                </div>
                <ul className="list">
                    <li>
                        <a href="http://localhost:3001/">New Project</a>
                    </li>
                    <li>
                        <a href="http://localhost:3001/">About Current Board</a>
                    </li>
                </ul>
                <div className="burger">
                    <div className="t-line"></div>
                    <div className="m-line"></div>
                    <div className="b-line"></div>
                </div>
            </nav>);
    }
}

export default NavBar;