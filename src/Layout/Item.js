import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        return (<div className="Item">
            <span className="item-text">{this.props.textVal}</span>
            <div className="icons">
                <i className="edit fas fa-pen"></i>
                <i className="delete fas fa-trash"></i>
            </div>
        </div>);
    }
}

export default Item;