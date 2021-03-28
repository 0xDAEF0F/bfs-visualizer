import { allPathCoord } from './helperMethods'

export default function makeAdjacencyList(walls, adjLiSetter,) {

    const allPathCoords = allPathCoord(walls);

    const adjList = allPathCoords.map(rows => rows.map(node => ({
        coord: node,
        neighbors: null
    })))
    adjLiSetter(adjList);
}