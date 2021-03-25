import React, { useState, useEffect } from 'react'
import {
    GetRowsCols, updateNeighbors,
    whoAreMyUnvisitedNeighbors, noAdjacentVisitedNeighbors, filterOutEdges
} from './helperMethods'
import Node from './Node'
import Toolbar from './Toolbar'
import _ from 'lodash'

function Grid() {

    let [rows, cols] = GetRowsCols();

    const [isChoosingObstacles, setIsChoosingObstacles] = useState(false);
    const [isFree, setFree] = useState(true);
    const [isVisited, setVisited] = useState(new Array(rows).fill([]).map(() => new Array(cols).fill(false)));
    // console.log(isVisited); 

    useEffect(() => {
        setVisited(new Array(rows).fill([]).map(() => new Array(cols).fill(false)));
    }, [rows, cols])

    // Here is the DS nodes[row][col]
    let nodes = [];

    let counter = 0;
    for (let i = 0; i < rows; i++) {
        nodes.push([])
        for (let j = 0; j < cols; j++) {
            nodes[i].push(<Node
                isMouseDown={isChoosingObstacles}
                id={counter}
                key={counter}
                coord={[i, j]}
                free={isFree}
                // visited={isVisited[i][j]}
                neighbors={updateNeighbors(i, j, rows, cols)}
            >
            </Node>)
            counter++;
        }
    }

    // Nodes with div in between rows
    const htmlGrid = nodes.map((node, i) => (
        <div key={i} className='board-row'>{node}</div>
    ));


    function generateMaze() {
        // Set all nodes to walls
        setFree(false)

        let stack = [];
        // Step #1 Change node to visited
        // And push it to stack
        let startingNode = [1, 1];
        let [coord1, coord2] = startingNode;
        let visitedValues = isVisited.map(row => row.map(node => false));
        visitedValues[coord1][coord2] = true;
        stack.push(startingNode);

        // Step #2 While the stack is not empty
        while (stack.length > 0) {
            // Step #2.1 Pop last cell from stack and make it the current one
            let currCoord = stack.pop();
            //  Step #2.2 If the current cell has neighbours which have not been traversed
            //  and no adjacent visited neighbors except for itself
            const myNeighbors = updateNeighbors(currCoord[0], currCoord[1], rows, cols);
            const unvisitedNeighbors = whoAreMyUnvisitedNeighbors(myNeighbors, visitedValues);
            const otherCond = noAdjacentVisitedNeighbors(unvisitedNeighbors, visitedValues, rows, cols, currCoord);
            const edgesFiltered = filterOutEdges(otherCond, rows, cols);

            if (edgesFiltered.length > 0) {
                stack.push(currCoord);
                let randomNumber = Math.floor(Math.random() * edgesFiltered.length);
                let randomNeighbor = edgesFiltered[randomNumber];
                visitedValues[randomNeighbor[0]][randomNeighbor[1]] = true;
                stack.push(randomNeighbor)
            }
        }
        setVisited(visitedValues);
    }


    return (
        <>
            <Toolbar generateMaze={() => generateMaze()} />
            <div onMouseDown={() => setIsChoosingObstacles(true)}
                onMouseUp={() => setIsChoosingObstacles(false)}
                className='grid'>
                {htmlGrid}
            </div>
        </>
    )
}

export default Grid
