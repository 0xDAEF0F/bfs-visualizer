import { useState } from "react";

const Node = ({ coord, startNode, goalNode, isMouseDown,
    isWall, carvedOrder, isTraversed, traversalOrder,
    shortestPath, turnToWall }) => {

    const [style, setStyle] = useState({});
    let className;

    if (isWall === true) {
        className = 'wall';
    }
    if (isTraversed === true) {
        className = 'traversed'
    }
    if (JSON.stringify(coord) === JSON.stringify(startNode)) {
        className = 'start';
    }
    if (JSON.stringify(coord) === JSON.stringify(goalNode)) {
        className = 'goal';
    }

    return (
        <div
            style={style}
            className={`node ${className}`}
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
}*/
// if (carvedOrder) {
//     carvedOrder?.forEach((each, i) => {
//         if (each[0] === coord[0] && each[1] === coord[1]) {
//             setTimeout(() => {
//                 setStyle({
//                     backgroundColor: 'grey',
//                     border: '1px solid #999'
//                 })
//             }, 15 * i)
//         }
//     });
// }