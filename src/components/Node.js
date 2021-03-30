


const Node = ({ isWall, isMouseDown, coord, turnToWall, startNode, goalNode, isTraversed }) => {

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
            className={className}
            onMouseEnter={() => isMouseDown ? turnToWall(coord) : ''}
        >
        </div >
    )
}

export default Node
