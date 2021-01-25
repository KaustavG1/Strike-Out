import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = { todoinp: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.persist();
        this.setState({ todoinp: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log({ ...this.state, id: uuidv4() });
        this.props.addItems({ ...this.state, id: uuidv4() });
        this.setState({ todoinp: "" });
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.todoinp}
                    onChange={this.handleChange}
                    placeholder="NEW ITEM"
                    required
                />
                <button>Add</button>
            </form>
        </div>);
    }
}

export default AddItem;