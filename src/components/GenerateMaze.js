import {
    fillMatrix, updateNeighbors,
    whoAreMyUnvisitedNeighbors,
    noAdjacentVisitedNeighbors,
    filterOutEdges
} from "./helperMethods"

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
