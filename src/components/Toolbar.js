import Button from 'react-bootstrap/Button'

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <Button size="sm" onClick={props.generateMaze}>Create Maze</Button>
            <Button size="sm" onClick={props.clearGrid}>Clear</Button>
            <Button size="sm" onClick={props.pickRandomStart}>Pick Start</Button>
            <Button size="sm" onClick={props.pickRandomEnd}>Pick Goal</Button>
            <Button size="sm" onClick={props.startBfs}>Breadth First Search</Button>
        </div>
    )
}

export default Toolbar
