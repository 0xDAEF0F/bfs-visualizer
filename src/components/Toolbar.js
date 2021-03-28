

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <button onClick={() => props.generateMaze()}>Generate Maze</button>
            <button onClick={() => props.pickRandomStart()}>Pick Random Start</button>
            <button onClick={() => props.pickRandomEnd()}>Pick Random Destination</button>
        </div>
    )
}

export default Toolbar
