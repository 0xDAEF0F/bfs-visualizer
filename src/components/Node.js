import React from "react";

const node = ({ coord, startNode, goalNode, isMouseDown,
    isWall, turnToWall }, ref) => {

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
            onMouseEnter={() => {
                if (isMouseDown === true &&
                    JSON.stringify(coord) === JSON.stringify(startNode) ||
                    JSON.stringify(coord) === JSON.stringify(goalNode)) {
                    console.log('hi');
                    // return;
                } else if (isMouseDown === true &&
                    isWall === false &&
                    JSON.stringify(coord) !== JSON.stringify(startNode) &&
                    JSON.stringify(coord) !== JSON.stringify(goalNode)) {
                    turnToWall(coord);
                }
            }}
        >
        </div >
    )
}

const Node = React.forwardRef(node);

export default Node
