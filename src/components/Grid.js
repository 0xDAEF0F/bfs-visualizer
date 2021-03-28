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
        startNode={globalState.startNode}
        isMouseDown={globalState.mouseDown}
        isWall={wall[i][j]}
    ></Node>))

    function turnToWall([i, j]) {
        let [...walls] = wall;
        walls[i][j] = true;

        setWall(walls);
    }

    function pickRandomStart(wallState, globalState) {
        let [...allWalls] = wallState;

        // Turning all paths into coordinates
        // And placing them to an array filtering
        // empty spaces.
        const allPathCoord = allWalls.map((row, i) => {
            return row.map((isWall, j) => {
                if (isWall === false) {
                    return [i, j];
                }
                return null;
            }).filter(emptyCoord => emptyCoord);
        }).filter(row => row.length > 0);

        const randomRow = Math.floor(Math.random() * allPathCoord.length);
        const randomCol = Math.floor(Math.random() * allPathCoord[randomRow].length);

        globalState(prev => ({
            ...prev,
            startNode: allPathCoord[randomRow][randomCol]
        }))
    }

    return (
        <>
            <Toolbar
                generateMaze={() => generateMaze(rows, cols, setWall)}
                pickRandomStart={() => pickRandomStart(wall, setGlobalState)}
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
