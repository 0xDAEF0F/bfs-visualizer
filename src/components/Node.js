import React, { Component } from 'react'

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            neighbors: props.neighbors,
            free: props.free,
            visited: props.visited,
            start: false,
            class: 'node',
        }
    }
    toggleColor(bool) {
        if (bool) {
            this.setState({ free: false, class: 'wall-node' });
        }
    }

    render() {
        return (
            <div className={this.state.class}
                onMouseEnter={() => this.toggleColor(this.props.isMouseDown)}>
                {this.state.id}
            </div>
        )
    }
}
