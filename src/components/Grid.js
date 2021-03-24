import React, { useState, useEffect } from 'react'
import {
    useWindowDimensions, updateNeighbors,
    whoAreMyUnvisitedNeighbors, noAdjacentVisitedNeighbors
} from './helperMethods'
import Node from './Node'
import Toolbar from './Toolbar'
import _ from 'lodash'

function Grid() {
    let tileW = 30;
    const { width, height } = useWindowDimensions();
    let rows = Math.floor((height * .8) / tileW);
    let cols = Math.floor((width * .8) / tileW);

    const [isChoosingObstacles, setIsChoosingObstacles] = useState(false);
    const [isFree, setFree] = useState(true);
    const [isVisited, setVisited] = useState(new Array(rows).fill([]).map(() => new Array(cols).fill(false)));

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
                visited={isVisited[i][j]}
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

    function generateMaze({ coord }) {
        // Set all nodes to walls
        setFree(false)

        let stack = [[...coord]];
        // Step #1 Change node to visited
        // And push it to stack
        let [coord1, coord2] = coord;
        let visitedValues = _.cloneDeep(isVisited);
        visitedValues[coord1][coord2] = true;
        visitedValues[7][5] = true;
        visitedValues[3][5] = true;
        visitedValues[coord1][coord2] = true;

        // Step #2 While the stack is not empty
        while (stack.length > 0) {
            // Step #2.1 Pop last cell from stack and make it the current one
            let currCoord = stack.pop();
            // console.log(currCoord);
            //  Step #2.2 If the current cell has neighbours which have not been traversed
            //  and no adjacent visited neighbors except for itself
            const myNeighbors = updateNeighbors(currCoord[0], currCoord[1], rows, cols);
            const unvisitedNeighbors = whoAreMyUnvisitedNeighbors(myNeighbors, visitedValues);
            const otherCond = noAdjacentVisitedNeighbors(unvisitedNeighbors, visitedValues, rows, cols, coord);

            if (otherCond.length > 0) {
                stack.push(currCoord);
                let randomNumber = Math.floor(Math.random() * otherCond.length);
                let randomNeighbor = otherCond[randomNumber];
                visitedValues[randomNeighbor[0]][randomNeighbor[1]] = true;
                stack.push(randomNeighbor)
            }
        }
        setVisited(visitedValues);
    }


    return (
        <>
            <Toolbar generateMaze={() => generateMaze(nodes[5][5].props)} />
            <div onMouseDown={() => setIsChoosingObstacles(true)}
                onMouseUp={() => setIsChoosingObstacles(false)}
                className='grid'>
                {htmlGrid}
            </div>
        </>
    )
}

export default Grid
