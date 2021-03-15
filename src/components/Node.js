import React, { Component } from 'react'

export class Node extends Component {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.free = true;
        this.start = false;
        this.neighbors = [];
    }

    updateNeighbors(fn) {
        let top = tiles[fn(this.x, this.y - this.width, this.width)];
        let right = tiles[fn(this.x + this.width, this.y, this.width)];
        let bottom = tiles[fn(this.x, this.y + this.width, this.width)];
        let left = tiles[fn(this.x - this.width, this.y, this.width)];
        this.neighbors.push(top, right, bottom, left);
    }
    drawMyselfOnGrid(color, ctx) {

        ctx.strokeStyle = color;
        ctx.strokeRect(this.x, this.y, this.width, this.width);
    }
    turnToWall(color, ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
        this.free = false;
    }
    chooseStartingNode(color, ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
        this.start = true;
    }
    selectMyself(color, ctx) {

        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Node