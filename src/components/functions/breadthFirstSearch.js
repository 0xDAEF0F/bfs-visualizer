import makeAdjacencyList from './makeAdjacencyList';

export function breadthFirstSearch(walls, [sRow, sCol], [fRow, fCol],
    totalRows, totalCols) {

    let graph = makeAdjacencyList(walls, totalRows, totalCols);

    let queue = [[[sRow, sCol]]];
    let traversalOrder = [];
    let shortestPath;

    graph[sRow][sCol].traversed = true;

    while (queue.length > 0) {

        let path = queue.shift();
        let vertex = path.slice(-1)[0];

        if (vertex[0] === fRow && vertex[1] === fCol) {
            shortestPath = path;
            return [traversalOrder.slice(0, -3), shortestPath.slice(1, -1)];
        }

        for (let [coord1, coord2] of graph[vertex[0]][vertex[1]].neighbors) {
            if (graph[coord1][coord2].traversed === false) {
                let [...newPath] = path;
                newPath.push([coord1, coord2]);
                graph[coord1][coord2].traversed = true;
                queue.push(newPath);
                traversalOrder.push([coord1, coord2]);
            }
        }

    }
    return [traversalOrder, shortestPath]
}