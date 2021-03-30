import makeAdjacencyList from './makeAdjacencyList';

export function breadthFirstSearch(walls, [sRow, sCol], [fRow, fCol], totalRows, totalCols, traversed, setTraversed) {

    let [...traversedNodes] = traversed;

    let graph = makeAdjacencyList(walls, totalRows, totalCols);

    let queue = [];

    graph[sRow][sCol].traversed = true;
    traversedNodes[sRow][sCol] = true;

    queue.push([sRow, sCol]);

    while (queue.length > 0) {

        let [i, j] = queue.shift();

        if (i === fRow && j === fCol) {
            // console.log(traversedNodes);
            setTraversed(traversedNodes);
            return [i, j];
        }

        for (let [coord1, coord2] of graph[i][j].neighbors) {
            if (graph[coord1][coord2].traversed === false) {
                graph[coord1][coord2].traversed = true;
                traversedNodes[coord1][coord2] = true;
                queue.push([coord1, coord2]);
            }
        }

    }
}