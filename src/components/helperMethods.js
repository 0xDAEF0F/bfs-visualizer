import { useState, useEffect } from 'react';
import _ from 'lodash'

export function GetRowsCols() {
    const { width, height } = useWindowDimensions();

    let tileW = 30;
    let rows = Math.floor((height * .8) / tileW);
    let cols = Math.floor((width * .8) / tileW);

    return [rows, cols];
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const updateNeighbors = (row, col, maxRows, maxCols) => {

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

export const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(i => i + startAt);
}

export function whoAreMyUnvisitedNeighbors(neighborsArray, allNodesVisitedStateArray) {

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

export const noAdjacentVisitedNeighbors = (unvisitedNeighbors, allNodesVisitedStateArray, maxRows, maxCols, myCurrCoord) => {

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

export function anyVisitedNeighbors(nodesArr, isVisitedState) {
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

export function filterOutEdges(nodes, rows, cols) {

    let result = [];

    nodes.forEach(node => {
        let [coord1, coord2] = node;

        if (coord1 == 0 || coord1 == rows - 1 || coord2 == 0 || coord2 == cols - 1) {
            return
        } else {
            result.push(node);
        }
    })
    return result;
}