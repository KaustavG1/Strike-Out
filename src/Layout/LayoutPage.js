import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';
import './LayoutPage.css';

class LayoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pendingItems: [{todoinp: 'Pending Task', id: 'pt'}, {todoinp: 'Pending Task2', id: 'pt2'}], 
            inProgressItems: [{todoinp: 'In Progress Task', id: 'ipt'}, {todoinp: 'In Progress Task2', id: 'ipt2'}], 
            completedItems: [{todoinp: 'Completed Task', id: 'ct'}, {todoinp: 'Completed Task2', id: 'ct2'}] 
        };
        this.addItems = this.addItems.bind(this);
        this.handleMove = this.handleMove.bind(this);
    }

    addItems(listItem) {
        this.setState(state => ({ pendingItems: [...state.pendingItems, listItem] }));
    }

    handleMove() {
        const element = this.state.pendingItems[0];
        const [, ...newpendingITem] = this.state.pendingItems;
        element && this.setState(state => ({ pendingItems: [...newpendingITem], inProgressItems: [...state.inProgressItems, element] }));
    }

    render() {
        return (<div>
            <div className="catagories">
                <List heading="PENDING" items={this.state.pendingItems}/>
                <List heading="IN PROGRESS" items={this.state.inProgressItems}/> 
                <List heading="COMPLETED" items={this.state.completedItems}/>
            </div>
            <footer className="footer-elements">
                <AddItem addItems={this.addItems}/>
                {<button onClick={this.handleMove}>Move To In Progress</button>}
            </footer>
        </div>);
    }
}

export default LayoutPage;