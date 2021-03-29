

function breadthFirstSearch(adjList, [sRow, sCol], [fRow, fCol]) {

    let queue = [];

    let graph = adjList.map(rows => rows.map(obj => ({ ...obj, traversed: false })));

    graph[sRow][sCol].traversed = true;

    queue.push([sRow, sCol]);

    while (queue.length > 0) {

        let [i, j] = queue.shift();

        if (i === fRow && j === fCol) {
            return [i, j];
        }

        for ([coord1, coord2] of graph[i][j].neighbors) {
            if (graph[coord1][coord2].traversed === false) {
                graph[coord1][coord2].traversed = true;
                queue.push([coord1, coord2]);
            }
        }

    }
}