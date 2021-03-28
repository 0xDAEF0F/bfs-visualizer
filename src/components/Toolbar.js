

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <button onClick={() => props.generateMaze()}>Create Maze</button>
            <button onClick={() => props.pickRandomStart()}>Pick Random Start</button>
            <button>Choose Ending Node</button>
        </div>
    )
}

export default Toolbar
