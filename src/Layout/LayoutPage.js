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
        this.handleMove = this.handleMove.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.editItemOutput = this.editItemOutput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    // Method to Add new Items but state lifting
    addItems(listItem) {
        this.setState(state => ({ pendingItems: [...state.pendingItems, listItem] }));
    }

    // Method to Move Items but state lifting
    handleMove() {
        const element = this.state.pendingItems[0];
        const [, ...newpendingITem] = this.state.pendingItems;
        element && this.setState(state => ({ pendingItems: [...newpendingITem], inProgressItems: [...state.inProgressItems, element] }));
    }

    // Method to Edit individual Items
    editItemOutput(listId, id, val) {
        if (listId === 'PENDING') {
            const newList = this.state.pendingItems.map(item => {
                if (item.id === id) {
                    return { ...item, todoinp: val };
                }
                return item;
            });
            console.log(newList);
            this.setState(newList);
        } else if (listId === 'IN PROGRESS') {
            const newList = this.state.inProgressItems.map(item => {
                if (item.id === id) {
                    return { ...item, todoinp: val };
                }
                return item;
            });
            this.setState(newList);
        } else {
            const newList = this.state.completedItems.map(item => {
                if (item.id === id) {
                    return { ...item, todoinp: val };
                }
                return item;
            });
            this.setState(newList);
        }
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
        console.log('Delete Triggered');
    }

    // Handle Sign Out functionality
    handleSignOut() {
        this.props.signoutFunction();
    }

    render() {
        return (<div className="Layout-Page">
            <div className="catagories">
                <List heading="PENDING" 
                      items={this.state.pendingItems} 
                      itemModFunctions={{ edit: this.editItemOutput, delete: this.deleteItem }} 
                />
                <List heading="IN PROGRESS" 
                      items={this.state.inProgressItems} 
                      itemModFunctions={{ edit: this.editItemOutput, delete: this.deleteItem }} 
                />
                <List heading="COMPLETED" 
                      items={this.state.completedItems} 
                      itemModFunctions={{ edit: this.editItemOutput, delete: this.deleteItem }} 
                />
            </div>
            <footer className="footer-elements">
                <AddItem addItems={this.addItems} />
                {/* Debug buttons - remove from final version  */}
                {<button onClick={this.handleMove}>Move To In Progress</button>}
                {<button onClick={this.handleSignOut}>Sign Out</button>}
            </footer>
        </div>);
    }
}

export default LayoutPage;