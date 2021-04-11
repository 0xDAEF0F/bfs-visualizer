import Button from 'react-bootstrap/Button'

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <Button onClick={props.generateMaze}>Create Maze</Button>
            <Button onClick={props.clearGrid}>Clear Grid</Button>
            <Button onClick={props.pickRandomStart}>Pick Start</Button>
            <Button onClick={props.pickRandomEnd}>Pick Goal</Button>
            <Button onClick={props.startBfs}>Start BFS</Button>
        </div>
    )
}

export default Toolbar
