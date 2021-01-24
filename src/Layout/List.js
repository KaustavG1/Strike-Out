import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        let renderedItems = () => (this.props.items.map(item => <Item id={item.id} key={item.id} textVal={item.todoinp}/>));
        return (<div>
            <h1>{this.props.heading}</h1>
            {renderedItems()}
        </div>);
    }
}

export default List;