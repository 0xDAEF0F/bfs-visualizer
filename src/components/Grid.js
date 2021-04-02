import React, { useState } from 'react'

// Components
import Node from './Node'
import Toolbar from './Toolbar'
// Functions
import {
    GetRowsCols, fillMatrix,
    pickRandomFreeNode
} from './functions/helperMethods'
import generateMaze from './functions/generateMaze'
import { breadthFirstSearch } from './functions/breadthFirstSearch'

function Grid() {

    const [rows, cols] = GetRowsCols();
    const [wall, setWall] = useState(fillMatrix(rows, cols, false));
    const [startNode, setStartNode] = useState(undefined);
    const [goalNode, setGoalNode] = useState(undefined);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [traversed, setTraversed] = useState(undefined);

    let gridObj = fillMatrix(rows, cols);
    let grid = gridObj.map((rows, i) => rows.map((_, j) => <Node
        key={[i, j]}
        coord={[i, j]}
        turnToWall={turnToWall}
        startNode={startNode}
        goalNode={goalNode}
        isMouseDown={isMouseDown}
        isWall={wall[i][j]}
        isTraversed={traversed?.[i][j]}
    ></Node>))

    function turnToWall([i, j]) {
        let [...walls] = wall;
        walls[i][j] = true;

        setWall(walls);
    }

    return (
        <>
            <Toolbar
                generateMaze={() => generateMaze(rows, cols, setWall, setStartNode,
                    setGoalNode, setTraversed)}
                pickRandomStart={() => pickRandomFreeNode(wall, setStartNode)}
                pickRandomEnd={() => pickRandomFreeNode(wall, setGoalNode)}
                startBfs={() => (!startNode || !goalNode ?
                    alert('Please Pick a Start and a Goal Node!!') :
                    breadthFirstSearch(wall, startNode, goalNode, rows, cols, setTraversed))}
            />
            <div
                onMouseDown={() => setIsMouseDown(true)}
                onMouseUp={() => setIsMouseDown(false)}
                className='grid'
            >
                {grid.map((row, i) => <div key={i} className='board-row'>{row}</div>)}
            </div>
        </>
    )
}

export default Grid
