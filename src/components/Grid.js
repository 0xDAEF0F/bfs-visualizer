import React, { useState } from 'react'
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

        let stack = [];
        // Step #1 Change node to visited
        // And push it to stack
        let [coord1, coord2] = coord;
        let visitedValues = _.cloneDeep(isVisited);
        visitedValues[coord1][coord2] = true;
        setVisited(visitedValues);
        stack.push(coord);

        // Step #2 While the stack is not empty
        //while (stack) {
        // Step #2.1 Pop last cell from stack and make it the current one
        let currCoord = stack.pop();
        //  Step #2.2 If the current cell has neighbours which have not been traversed
        //  and no adjacent visited neighbors except for itself
        let myNeighbors = updateNeighbors(currCoord[0], currCoord[1], height, width);
        const unvisitedNeighbors = whoAreMyUnvisitedNeighbors(myNeighbors, isVisited);
        let otherCond = noAdjacentVisitedNeighbors(unvisitedNeighbors, isVisited, height, width, coord);
        console.log(otherCond);

        if (unvisitedNeighbors === true) {




            // let randomNumber = Math.floor(Math.random() * myNeighbors.length);
            // let randomNeighbor = myNeighbors[randomNumber];
        }



        //}
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
