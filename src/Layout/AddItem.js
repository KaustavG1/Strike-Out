import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddItem.css';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = { todoinp: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Update the value in state
    handleChange(event) {
        event.persist();
        this.setState({ todoinp: event.target.value });
    }

    // Handle the form submission
    handleSubmit(event) {
        event.preventDefault();
        this.props.addItems({ ...this.state, id: uuidv4() });
        this.setState({ todoinp: "" });
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit} className="add-item-form">
                <input
                    type="text"
                    value={this.state.todoinp}
                    onChange={this.handleChange}
                    placeholder="NEW ITEM"
                    required
                    className="add-input"
                />
                <button className="add-button">Add</button>
            </form>
        </div>);
    }
}

export default AddItem;