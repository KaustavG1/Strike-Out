import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';

class LayoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = { pendingItems: [], inProgressItems: [], completedItems: [] };
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
            <List heading="PENDING" items={this.state.pendingItems}/>
            <List heading="IN PROGRESS" items={this.state.inProgressItems}/> 
            <List heading="COMPLETED" items={this.state.completedItems}/>
            <AddItem addItems={this.addItems}/>
            <button onClick={this.handleMove}>Move To In Progress</button>
        </div>);
    }
}

export default LayoutPage;