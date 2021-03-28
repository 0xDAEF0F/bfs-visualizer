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
    const [startNode, setStartNode] = useState(undefined);
    const [goalNode, setGoalNode] = useState(undefined);
    const [isMouseDown, setIsMouseDown] = useState(false);

    let gridObj = fillMatrix(rows, cols);
    let grid = gridObj.map((rows, i) => rows.map((_, j) => <Node
        key={[i, j]}
        coord={[i, j]}
        turnToWall={turnToWall}
        startNode={startNode}
        goalNode={goalNode}
        isMouseDown={isMouseDown}
        isWall={wall[i][j]}
    ></Node>))

    function turnToWall([i, j]) {
        let [...walls] = wall;
        walls[i][j] = true;

        setWall(walls);
    }

    function pickRandomFreeNode(wallState, setter) {
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

        setter(allPathCoord[randomRow][randomCol])
    }

    return (
        <>
            <Toolbar
                generateMaze={() => generateMaze(rows, cols, setWall, setStartNode, setGoalNode)}
                pickRandomStart={() => pickRandomFreeNode(wall, setStartNode)}
                pickRandomEnd={() => pickRandomFreeNode(wall, setGoalNode)}
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
