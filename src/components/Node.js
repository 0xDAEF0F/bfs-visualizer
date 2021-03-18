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
            index: props.index
        }
    }
    toggleColor(bool) {
        if (bool) {
            this.setState({ free: false, class: 'wall-node' });
        }
    }

    // updateNeighbors() {
    //     let { row, column, rows, cols } = this.state.index;
    //     let { top, right, bottom, left } = this.state.neighbors;

    //     top = myRow - 1;
    //     right = myCol + 1;



    //     if (myRow === 0) {
    //         top = undefined;
    //     }
    //     if (myRow === totalRows - 1) {
    //         bottom = undefined;
    //     }
    //     if (myCol === 0) {
    //         left = undefined;
    //     }
    //     if (myCol === totalCols - 1) {
    //         right = undefined;
    //     }

    // }

    render() {
        return (
            <div className={this.state.class}
                onMouseEnter={() => this.toggleColor(this.props.isMouseDown)}>
                {this.state.id}
            </div>
        )
    }
}
