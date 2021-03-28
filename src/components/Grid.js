import React, { useState } from 'react'
import {
    GetRowsCols, fillMatrix
} from './helperMethods'
import Node from './Node'
import Toolbar from './Toolbar'
import generateMaze from './generateMaze'

function Grid() {

    const [rows, cols] = GetRowsCols();
    const [wall, setWall] = useState(fillMatrix(rows, cols, false));
    const [globalState, setGlobalState] = useState({
        // Global 
        mouseDown: false,
        startNode: undefined,
        finishNode: undefined,
        // Independent
        traversed: fillMatrix(rows, cols, false),
        adjacencyList: [],
    })

    let gridObj = fillMatrix(rows, cols);
    let grid = gridObj.map((rows, i) => rows.map((_, j) => <Node
        key={[i, j]}
        coord={[i, j]}
        turnToWall={turnToWall}
        isMouseDown={globalState.mouseDown}
        isWall={wall[i][j]}
    ></Node>))

    function turnToWall([i, j]) {
        let [...walls] = wall;
        walls[i][j] = true;

        setWall(walls);
    }

    return (
        <>
            <Toolbar
                generateMaze={() => generateMaze(rows, cols, setWall)}
            />
            <div
                onMouseDown={() => setGlobalState(prev => ({ ...prev, mouseDown: true }))}
                onMouseUp={() => setGlobalState(prev => ({ ...prev, mouseDown: false }))}
                className='grid'
            >
                {grid.map((row, i) => <div key={i} className='board-row'>{row}</div>)}
            </div>
        </>
    )
}

export default Grid
