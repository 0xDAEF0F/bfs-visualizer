import { allPathCoord } from './helperMethods'
import { updateNeighbors, unmarkedNeighbors } from './generateMaze'

export default function makeAdjacencyList(walls, rows, cols) {

    const allPathCoords = allPathCoord(walls);

    const adjList = allPathCoords.map(row => row.map(node => {
        const neighbors = updateNeighbors(node, rows, cols);
        const freeNeighbors = unmarkedNeighbors(neighbors, walls);
        return {
            coord: node,
            neighbors: freeNeighbors,
            traversed: false
        }
    }))
    return adjList;
}