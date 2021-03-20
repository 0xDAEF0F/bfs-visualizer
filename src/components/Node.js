import React, { Component } from 'react'

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            neighbors: props.neighbors,
            free: props.free,
            visited: props.visited,
            start: false
        }
    }
    toggleColor(bool) {
        if (bool) {
            this.setState({ free: false });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState(this.props);
        }
    }

    render() {
        return (
            <div className={this.state.free ? 'node' : 'wall-node'}
                onMouseEnter={() => this.toggleColor(this.props.isMouseDown)}>
                {this.state.id}
            </div>
        )
    }
}
