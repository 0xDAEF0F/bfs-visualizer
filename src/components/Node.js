


const Node = ({ isWall, isMouseDown, coord, turnToWall, startNode }) => {

    let className;

    if (isWall === true) {
        className = 'wall-node';
    } else if (JSON.stringify(coord) === JSON.stringify(startNode)) {
        className = 'start-node';
        console.log('object');
    } else if (isWall === false) {
        className = 'node';
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
