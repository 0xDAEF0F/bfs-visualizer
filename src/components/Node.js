import React, { useState } from "react";

const node = ({ coord, startNode, goalNode, isMouseDown,
    isChoosingStart, isChoosingEnd, isWall, turnToStartEnd,
    turnToWall, isMovingStartEnd }, ref) => {

    let className = "";

    if (isWall === true) {
        className = 'wall';
    }
    if (JSON.stringify(coord) === JSON.stringify(startNode)) {
        className = 'start';
    }
    if (JSON.stringify(coord) === JSON.stringify(goalNode)) {
        className = 'goal';
    }

    return (
        <div
            ref={ref}
            className={`node ${className}`}
            onMouseDown={() => {
                if (JSON.stringify(coord) === JSON.stringify(startNode)) {
                    isMovingStartEnd('start');
                } else if (JSON.stringify(coord) === JSON.stringify(goalNode)) {
                    isMovingStartEnd('end');
                }
            }}
            onMouseEnter={() => {
                if (isMouseDown === true &&
                    isWall === false &&
                    JSON.stringify(coord) !== JSON.stringify(startNode) &&
                    JSON.stringify(coord) !== JSON.stringify(goalNode)) {
                    turnToWall(coord);
                }
                if (isChoosingStart === true) {
                    turnToStartEnd(coord, 'start');
                } else if (isChoosingEnd === true) {
                    turnToStartEnd(coord, 'end');
                }
            }}
        >
        </div >
    )
}

const Node = React.forwardRef(node);

export default Node
