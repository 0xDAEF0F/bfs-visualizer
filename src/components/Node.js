import { useState } from "react";

const Node = ({ coord, startNode, goalNode, isMouseDown,
    isWall, orderWall, isTraversed, traversalOrder,
    shortestPath, turnToWall }) => {

    const [style, setStyle] = useState({});
    let className;

    if (isWall === true) {
        className = 'wall-node';
    } else if (isWall === false) {
        className = 'node';
    }
    if (isTraversed === true) {
        className = 'traversed'
    }
    if (JSON.stringify(coord) === JSON.stringify(startNode)) {
        className = 'start-node';
    }
    if (JSON.stringify(coord) === JSON.stringify(goalNode)) {
        className = 'goal-node';
    }

    return (
        <div
            style={style}
            className={className}
            onMouseEnter={() => isMouseDown ? turnToWall(coord) : ''}
        >
        </div >
    )
}

export default Node

// NEW CODE
/* if (isWall === true) {
    orderWall.map((each, idx) => {
        if (each[0] === coord[0] && each[1] === coord[1]) {
            setTimeout(() => {
                setStyle({ backgroundColor: 'teal' })
            }, 10 * idx)
        }
    });
}
    if (isTraversed === true) {
        setStyle({ backgroundColor: "teal" });
    }
    if (JSON.stringify(coord) === JSON.stringify(startNode)) {
        setStyle({ backgroundColor: "teal" });
    }
    if (JSON.stringify(coord) === JSON.stringify(goalNode)) {
        setStyle({ backgroundColor: "teal" });
    } */