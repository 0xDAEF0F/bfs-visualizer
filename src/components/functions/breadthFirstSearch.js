import { fillMatrix } from './helperMethods';
import makeAdjacencyList from './makeAdjacencyList';

export function breadthFirstSearch(walls, [sRow, sCol], [fRow, fCol],
    totalRows, totalCols, setTraversed) {

    let traversedNodes = fillMatrix(totalRows, totalCols, false);

    let graph = makeAdjacencyList(walls, totalRows, totalCols);

    let queue = [[[sRow, sCol]]];

    graph[sRow][sCol].traversed = true;
    traversedNodes[sRow][sCol] = true;

    while (queue.length > 0) {

        let path = queue.shift();
        let vertex = path.slice(-1)[0];

        if (vertex[0] === fRow && vertex[1] === fCol) {
            setTraversed(traversedNodes);
            return
        }

        for (let [coord1, coord2] of graph[vertex[0]][vertex[1]].neighbors) {
            if (graph[coord1][coord2].traversed === false) {
                let [...newPath] = path;
                newPath.push([coord1, coord2]);
                graph[coord1][coord2].traversed = true;
                traversedNodes[coord1][coord2] = true;
                queue.push(newPath);

            }
        }

    }
}