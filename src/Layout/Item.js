import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    /* constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    } */

    handleEdit(event) {
        console.log("Edited");
    }

    handleDelete(event) {
        console.log("Deleted");
    }

    render() {
        return (<div className="Item">
            <span className="item-text">{this.props.textVal}</span>
            <div className="icons">
                <i className="edit fas fa-pen" onClick={this.handleEdit}></i>
                <i className="delete fas fa-trash" onClick={this.handleDelete}></i>
            </div>
        </div>);
    }
}

export default Item;