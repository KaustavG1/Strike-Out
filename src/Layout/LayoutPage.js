import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';
import './LayoutPage.css';

class LayoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingItems: [{ todoinp: 'Pending Task', id: 'pt' }, { todoinp: 'Pending Task2', id: 'pt2' }],
            inProgressItems: [{ todoinp: 'In Progress Task', id: 'ipt' }, { todoinp: 'In Progress Task2', id: 'ipt2' }],
            completedItems: [{ todoinp: 'Completed Task', id: 'ct' }, { todoinp: 'Completed Task2', id: 'ct2' }]
        };
        this.addItems = this.addItems.bind(this);
        this.editItemOutput = this.editItemOutput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.moveItemOutput = this.moveItemOutput.bind(this); 
    }

    // Method to move items
    moveItemOutput(listId, id, val) {
        if(listId === 'PENDING') {
            // If list ID is PENDING then - Done
            // Remove the item from PENDING list and
            // Add the item to IN PROGRESS list
            this.setState(state => ({ pendingItems: state.pendingItems.filter(item => item.id !== id),
                                      inProgressItems: [...state.inProgressItems, {todoinp: val, id: id}] }));
        } else {
            // Else the item belongs to IN PROGRESS list; - Done
            // Remove the item from IN PROGRESS list and
            // Add the item to COMPLETED list
            this.setState(state => ({ inProgressItems: state.inProgressItems.filter(item => item.id !== id),
                                      completedItems: [...state.completedItems, {todoinp: val, id: id}] }));
        }
    }

    // Method to Edit individual Items
    editItemOutput(listId, id, val) {
        if (listId === 'PENDING') {
            this.setState(state => ({ pendingItems: state.pendingItems.map(item => {
                if(item.id === id) return { ...item, todoinp: val || item.todoinp };
                return item;
            }) }));
        } else if (listId === 'IN PROGRESS') {
            this.setState(state => ({ inProgressItems: state.inProgressItems.map(item => {
                if(item.id === id) return { ...item, todoinp: val || item.todoinp };
                return item;
            }) }));
        } else {
            this.setState(state => ({ completedItems: state.completedItems.map(item => {
                if(item.id === id) return { ...item, todoinp: val || item.todoinp };
                return item;
            }) }));
        }
    }

    // Method to Add new Items but state lifting
    addItems(listItem) {
        this.setState(state => ({ pendingItems: [...state.pendingItems, listItem] }));
    }

    // Method to Delete individual Items
    deleteItem(id) {
        this.setState(state => (
            {
                pendingItems: state.pendingItems.filter(element => element.id !== id),
                inProgressItems: state.inProgressItems.filter(element => element.id !== id),
                completedItems: state.completedItems.filter(element => element.id !== id)
            }
        ));
    }

    

    render() {
        return (<div className="Layout-Page">
            <div className="catagories">
                <List heading="PENDING" 
                      items={this.state.pendingItems} 
                      itemModFunctions={{ move: this.moveItemOutput, edit: this.editItemOutput, delete: this.deleteItem }} 
                />
                <List heading="IN PROGRESS" 
                      items={this.state.inProgressItems} 
                      itemModFunctions={{ move: this.moveItemOutput, edit: this.editItemOutput, delete: this.deleteItem }} 
                />
                <List heading="COMPLETED" 
                      items={this.state.completedItems} 
                      itemModFunctions={{ move: this.moveItemOutput, edit: this.editItemOutput, delete: this.deleteItem }} 
                />
            </div>
            <footer className="footer-elements">
                <AddItem addItems={this.addItems} />
            </footer>
        </div>);
    }
}

export default LayoutPage;