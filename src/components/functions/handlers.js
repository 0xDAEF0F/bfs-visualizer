export function turnToWall([i, j], isChoosingEnd,
    isChoosingStart, algoRunning, finalPath, refCollection,
    setFinalPath, isWall, setWall) {
    if (isChoosingEnd || isChoosingStart ||
        algoRunning) {
        return;
    }
    if (finalPath) {
        clearDrawnShortestPath(finalPath, refCollection);
        setFinalPath(undefined);
    }
    let [...walls] = isWall;
    walls[i][j] = true;

    setWall(walls);
}

export function isMovingStart(setIsMouseDown,
    setIsChoosingStart) {
    setIsMouseDown(true);
    setIsChoosingStart(true);
}

export function moveStart([i, j], algoRunning,
    finalPath, refCollection, isWall,
    endNode, setStartNode) {

    if (algoRunning) {
        return;
    }

    clearDrawnShortestPath(finalPath, refCollection);

    if (isWall[i][j] === false &&
        JSON.stringify([i, j]) !== JSON.stringify(endNode)) {
        setStartNode([i, j])
    }

}
export function isMovingEnd(setIsMouseDown,
    setIsChoosingEnd) {
    setIsMouseDown(true);
    setIsChoosingEnd(true);
}


export function moveEnd([i, j], algoRunning,
    finalPath, refCollection, isWall,
    startNode, setEndNode) {

    if (algoRunning) {
        return;
    }

    clearDrawnShortestPath(finalPath, refCollection);

    if (isWall[i][j] === false &&
        JSON.stringify([i, j]) !== JSON.stringify(startNode)) {
        setEndNode([i, j])
    }

}

export function clearDrawnShortestPath(finalPath, allRefs) {
    if (finalPath) {
        finalPath.forEach(([y, x]) => {
            allRefs.current[y][x].current.className = 'node';
        })
    }
}