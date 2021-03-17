import React, { Component } from 'react'

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            neighbors: [],
            free: true,
            start: false,
        }
    }
    render() {
        return (
            <div className='node'>
                {this.state.id}
            </div>
        )
    }
}
