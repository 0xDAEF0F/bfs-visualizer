import React from "react";

const node = ({ coord, startNode, goalNode, isMouseDown,
    isWall, isTraversed, turnToWall }, ref) => {

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
            onMouseEnter={() => isMouseDown ? turnToWall(coord) : ''}
        >
        </div >
    )
}

const Node = React.forwardRef(node);

export default Node
