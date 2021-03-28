import {
    fillMatrix
} from "./helperMethods"
import _ from 'lodash'

export default function generateMaze(rows, cols, walSetter, startSetter, goalSetter) {

    let carved = fillMatrix(rows, cols, false);

    let stack = [];
    // Step #1 Change node to visited
    // And push it to stack
    let startingNode = [1, 1];
    let [coord1, coord2] = startingNode;
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
    walSetter(carved.map(row => row.map(value => !value)));
    startSetter(undefined);
    goalSetter(undefined);
}

function updateNeighbors(row, col, maxRows, maxCols) {

    let top = [row - 1, col];
    let right = [row, col + 1];
    let bottom = [row + 1, col];
    let left = [row, col - 1];

    if (top[0] < 0) {
        top = null;
    }
    if (right[1] > maxCols - 1) {
        right = null;
    }
    if (bottom[0] > maxRows - 1) {
        bottom = null;
    }
    if (left[1] < 0) {
        left = null;
    }

    const allNeighbors = [top, right, bottom, left];

    return allNeighbors.filter((oneNeighbor) => oneNeighbor);
}

function whoAreMyUnvisitedNeighbors(neighborsArray, allNodesVisitedStateArray) {

    // By default all neighbors are visited
    let neighbors = [];
    // console.log(allNodesVisitedStateArray);

    neighborsArray.forEach(pairOfCoordinates => {
        let [coord1, coord2] = pairOfCoordinates;
        const amIvisited = allNodesVisitedStateArray[coord1][coord2];
        // console.log(amIvisited);
        if (amIvisited === false) {
            neighbors.push([coord1, coord2]);
        }
    })

    return neighbors;
}

function noAdjacentVisitedNeighbors(unvisitedNeighbors, allNodesVisitedStateArray, maxRows, maxCols, myCurrCoord) {

    let result = [];

    unvisitedNeighbors.forEach(pairOfCoordinates => {
        let [coord1, coord2] = pairOfCoordinates;

        // get neighbors of this pair of coord
        let neighbors = updateNeighbors(coord1, coord2, maxRows, maxCols);
        // take off the starting node
        let newNeighbors = neighbors.filter(neigh => _.isEqual(neigh, myCurrCoord) === false);
        // check for a visited neighbor
        let areAnyVisited = anyVisitedNeighbors(newNeighbors, allNodesVisitedStateArray);
        // if it has then dont push it to the result.
        if (areAnyVisited === false) {
            result.push(pairOfCoordinates);
        }
    })
    return result;
}

function anyVisitedNeighbors(nodesArr, isVisitedState) {
    let result = false;
    nodesArr.forEach(node => {
        let [coord1, coord2] = node;
        if (isVisitedState[coord1][coord2] === true) {
            result = true;
        }
        return
    })
    return result
}

function filterOutEdges(nodes, rows, cols) {

    let result = [];

    nodes.forEach(node => {
        let [coord1, coord2] = node;

        if (coord1 === 0 || coord1 === rows - 1 || coord2 === 0 || coord2 === cols - 1) {
            return
        } else {
            result.push(node);
        }
    })
    return result;
}