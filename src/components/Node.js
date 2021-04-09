import React from 'react'

const node = ({ coord, startNode, endNode, isMouseDown,
    isChoosingStart, isChoosingEnd, isWall,
    turnToWall, isMovingStart, isMovingEnd,
    moveStart, moveEnd }, ref) => {

    let className = "";

    if (isWall === true) {
        className = 'wall';
    }
    if (JSON.stringify(coord) === JSON.stringify(startNode)) {
        className = 'start';
    }
    if (JSON.stringify(coord) === JSON.stringify(endNode)) {
        className = 'goal';
    }

    return (
        <div
            ref={ref}
            className={`node ${className}`}
            onMouseDown={() => {
                if (JSON.stringify(coord) === JSON.stringify(startNode)) {
                    isMovingStart();
                } else if (JSON.stringify(coord) === JSON.stringify(endNode)) {
                    isMovingEnd();
                }
            }}
            onMouseEnter={() => {
                if (isMouseDown === true &&
                    isWall === false &&
                    JSON.stringify(coord) !== JSON.stringify(startNode) &&
                    JSON.stringify(coord) !== JSON.stringify(endNode)) {
                    turnToWall();
                }
                if (isChoosingStart === true) {
                    moveStart(coord);
                } else if (isChoosingEnd === true) {
                    moveEnd(coord);
                }
            }}
        >
        </div >
    )
}

const Node = React.forwardRef(node);

export default Node
