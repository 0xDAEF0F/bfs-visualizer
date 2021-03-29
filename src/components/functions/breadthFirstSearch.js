import makeAdjacencyList from './makeAdjacencyList';

export function breadthFirstSearch(walls, [sRow, sCol], [fRow, fCol], totalRows, totalCols) {

    let graph = makeAdjacencyList(walls, totalRows, totalCols);

    let queue = [];

    console.log(graph)
    // graph[sRow][sCol].traversed = true;

    // queue.push([sRow, sCol]);

    // while (queue.length > 0) {

    //     let [i, j] = queue.shift();

    //     if (i === fRow && j === fCol) {
    //         console.log('object')
    //         return [i, j];
    //     }

    //     for (let [coord1, coord2] of graph[i][j].neighbors) {
    //         if (graph[coord1][coord2].traversed === false) {
    //             graph[coord1][coord2].traversed = true;
    //             queue.push([coord1, coord2]);
    //         }
    //     }

    // }
}