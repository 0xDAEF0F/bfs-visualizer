import React, { useState, useEffect } from 'react'
import {
    GetRowsCols, updateNeighbors,
    whoAreMyUnvisitedNeighbors, noAdjacentVisitedNeighbors,
    filterOutEdges, fillMatrix
} from './helperMethods'
import Node from './Node'
import Toolbar from './Toolbar'
import _ from 'lodash'

function Grid() {

    let [rows, cols] = GetRowsCols();

    // useEffect(() => {
    //     setVisited(new Array(rows).fill([]).map(() => new Array(cols).fill(false)));
    // }, [rows, cols])

    const [globalState, setGlobalState] = useState({
        // Global 
        mouseDown: false,
        // Choose starting node and finish randomly
        // but first checking if is a wall || !carved
        startNode: undefined,
        finishNode: undefined,
        // Independent
        isWall: fillMatrix(rows, cols, false), // for computer UI
        carved: fillMatrix(rows, cols, false), // maze generator
        traversed: fillMatrix(rows, cols, false), // pathfinding
        // All vertices and their edges (check walls || !carved)
        adjacencyList: [],
    })

    let gridObj = fillMatrix(rows, cols);

    let grid = gridObj.map((rows, i) => rows.map((nodes, j) => <Node
        key={[i, j]}
        isMouseDown={globalState.mouseDown}
        carved={globalState.carved[i][j]}
        isWall={globalState.isWall[i][j]}
    ></Node>))

    function generateMaze() {
        // Set all nodes to walls
        setGlobalState((prev) => ({ ...prev, isWall: fillMatrix(rows, cols, true) }))

        let stack = [];
        // Step #1 Change node to visited
        // And push it to stack
        let startingNode = [1, 1];
        let [coord1, coord2] = startingNode;
        let { carved } = globalState
        carved[coord1][coord2] = true;
        stack.push(startingNode);

        // Step #2 While the stack is not empty
        while (stack.length > 0) {
            // Step #2.1 Pop last cell from stack and make it the current one
            let currCoord = stack.pop();
            //  Step #2.2 If the current cell has neighbours which have not been traversed
            //  and no adjacent visited neighbors except for itself
            const myNeighbors = updateNeighbors(currCoord[0], currCoord[1], rows, cols);
            const unvisitedNeighbors = whoAreMyUnvisitedNeighbors(myNeighbors, carved);
            const otherCond = noAdjacentVisitedNeighbors(unvisitedNeighbors, carved, rows, cols, currCoord);
            const edgesFiltered = filterOutEdges(otherCond, rows, cols);

            if (edgesFiltered.length > 0) {
                stack.push(currCoord);
                let randomNumber = Math.floor(Math.random() * edgesFiltered.length);
                let randomNeighbor = edgesFiltered[randomNumber];
                carved[randomNeighbor[0]][randomNeighbor[1]] = true;
                stack.push(randomNeighbor)
            }
        }
        setGlobalState(prev => ({ ...prev, carved: carved }))
    }

    return (
        <>
            <Toolbar
                generateMaze={generateMaze}
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
