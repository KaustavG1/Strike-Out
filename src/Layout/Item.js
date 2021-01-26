import React, { Component } from 'react';
import './Item.css';
import { Popup } from 'semantic-ui-react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { editinp: this.props.textVal, isEditActive: false }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Handles the Edit Events
    handleEdit(event) {
        this.setState(state => ({ isEditActive: !state.isEditActive }));
        // this.props.childFunctions.edit(this.props.id);
    }

    // Handles the Delete Events
    handleDelete(event) {
        this.props.childFunctions.delete(this.props.id);
    }

    handleChange(event) {
        event.persist();
        this.setState({ editinp: event.target.value });
    }

    handleUpdate(event) {
        event.preventDefault();
        this.setState(state => ({ isEditActive: !state.isEditActive }));
        this.props.update(this.props.id, this.state.editinp);
    }

    render() {
        const moveIcon = () => {
            if(this.props.heading === "PENDING") {
                return <Popup content='Move to In Progress' trigger={<i className="move fas fa-arrow-right"></i>} />;
            } else if(this.props.heading === "IN PROGRESS") {
                return <Popup content='Move to Completed' trigger={<i className="move fas fa-arrow-right"></i>} />;
            } else {
                return <Popup content='Strike-Through' trigger={<i className="move fas fa-strikethrough"></i>} />;
            }
        }
        console.log(this.props.textVal);
        if (!this.state.isEditActive) {
            return (<div className="Item">
                <span className="item-text">{this.props.textVal}</span>
                <div className="icons">
                    {moveIcon()}
                    <Popup content='Edit' trigger={<i className="edit fas fa-pen" onClick={this.handleEdit}></i>} />
                    <Popup content='Delete' trigger={<i className="delete fas fa-trash" onClick={this.handleDelete}></i>} />
                </div>
            </div>);
        } else {
            return (<div className="Item">
                <form className="edit-form" onSubmit={this.handleUpdate}>
                    <input type="textbox" value={this.state.editinp} onChange={this.handleChange} />
                    <button>Save</button>
                </form>
            </div>);
        }
    }
}

export default Item;