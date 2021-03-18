import React from 'react'

function Toolbar(props) {
    return (
        <div className='toolbar'>
            <button onClick={() => props.generateMaze()}>Create Maze</button>
            <button>Choose Starting Node</button>
            <button>Choose Ending Node</button>
        </div>
    )
}

export default Toolbar
