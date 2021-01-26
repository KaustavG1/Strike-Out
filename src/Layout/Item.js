import React, { Component } from 'react';
import './Item.css';
import { Popup } from 'semantic-ui-react';

let st = '';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { editinp: this.props.textVal, isEditActive: false }
        this.handleMove = this.handleMove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Handles item displacements
    handleMove(event) {        
        if(this.props.heading === "COMPLETED") {
            st = 'line-through'; 
            console.log(st);
        } else {
            this.props.move(this.props.id, this.props.editinp || this.props.textVal);
        }
    }

    // Handles the Edit Events
    handleEdit(event) {
        this.setState(state => ({ isEditActive: !state.isEditActive }));
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
        this.setState(state => ({ isEditActive: !state.isEditActive, editinp: this.props.textVal }));
        this.props.update(this.props.id, this.state.editinp);
    }

    render() {
        const moveIcon = () => {
            if(this.props.heading === "PENDING") {
                return <Popup content='Move to In Progress' trigger={<i className="move fas fa-arrow-right" onClick={this.handleMove}></i>} />;
            } else if(this.props.heading === "IN PROGRESS") {
                return <Popup content='Move to Completed' trigger={<i className="move fas fa-arrow-right" onClick={this.handleMove}></i>} />;
            } else {
                return <Popup content='Strike-Through' trigger={<i className="move fas fa-strikethrough" onClick={this.handleMove}></i>} />;
            }
        }
        console.log(this.props.textVal);
        if (!this.state.isEditActive) {
            return (<div className="Item">
                <span className={"item-text"} style={{textDecoration: st}}>{this.props.textVal}</span>
                <div className="icons">
                    {moveIcon()}
                    <Popup content='Edit' trigger={<i className="edit fas fa-pen" onClick={this.handleEdit}></i>} />
                    <Popup content='Delete' trigger={<i className="delete fas fa-trash" onClick={this.handleDelete}></i>} />
                </div>
            </div>);
        } else {
            return (<div className="Item">
                <form className="edit-form" onSubmit={this.handleUpdate}>
                    <input className="edit-input" type="textbox" value={this.state.editinp} onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
            </div>);
        }
    }
}

export default Item;