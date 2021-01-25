import React, { Component } from 'react';
import Item from './Item';
import './List.css';

class List extends Component {
    render() {
        let renderedItems = () => (this.props.items.map(item => <Item id={item.id} key={item.id} textVal={item.todoinp}/>));
        return (<div className="individual-list">
            <h4>{this.props.heading}</h4>
            {renderedItems()}
        </div>);
    }
}

export default List;