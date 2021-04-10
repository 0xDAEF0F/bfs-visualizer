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

export function isMovingStartEnd(start, setIsMouseDown,
    setIsChoosingEnd, setIsChoosingStart) {
    setIsMouseDown(true);
    if (start) {
        setIsChoosingStart(true);
    } else if (!start) {
        setIsChoosingEnd(true);
    }

}

export function moveStartEnd(start, [i, j], algoRunning,
    finalPath, refCollection, isWall, startNode,
    endNode, setStartNode, setEndNode) {

    if (algoRunning || isWall[i][j] === true) {
        return;
    }

    clearDrawnShortestPath(finalPath, refCollection);

    if (start) {
        if (JSON.stringify([i, j]) !== JSON.stringify(endNode)) {
            setStartNode([i, j]);
        }
    } else if (!start) {
        if (JSON.stringify([i, j]) !== JSON.stringify(startNode)) {
            setEndNode([i, j]);
        }
    }

}

export function clearDrawnShortestPath(finalPath, allRefs) {
    if (finalPath) {
        finalPath.forEach(([y, x]) => {
            allRefs.current[y][x].current.className = 'node';
        })
    }
}