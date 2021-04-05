import { useRef } from "react";

const Node = ({ coord, startNode, goalNode, isMouseDown,
    isWall, carvedOrder, isTraversed, traversalOrder,
    shortestPath, turnToWall }) => {

    const additional = useRef();

    let className = "";

    // console.log(carvedOrder)

    function animateCarved() {
        for (let i = 0; i < carvedOrder.length; i++) {
            let [y, x] = carvedOrder[i];
            if (coord[0] === y && coord[1] === x) {
                setTimeout(() => {
                    additional.current.className = 'node wall';
                }, 50 * i)
            }
        }
    }

    if (isWall === true) {
        // className = 'wall';
        additional.current.className = 'node wall';
        // if (carvedOrder) {
        //     animateCarved();
        //     console.log(additional.current)
        // }
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
            ref={additional}
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