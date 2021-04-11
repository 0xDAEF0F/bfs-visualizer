import Button from 'react-bootstrap/Button'

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <Button className={"myBtn"} onClick={props.generateMaze}>Create Maze</Button>
            <Button className={"myBtn"} onClick={props.clearGrid}>Clear Grid</Button>
            <Button className={"myBtn"} onClick={props.pickRandomStart}>Pick Start</Button>
            <Button className={"myBtn"} onClick={props.pickRandomEnd}>Pick Goal</Button>
            <Button className={"myBtn"} onClick={props.startBfs}>Start BFS</Button>
        </div>
    )
}

export default Toolbar
