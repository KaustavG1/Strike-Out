import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (<div>
            {this.props.textVal}
        </div>);
    }
}

export default Item;