import React, { useState } from 'react'
import { useWindowDimensions, updateNeighbors } from './helperMethods'
import Node from './Node'
import Toolbar from './Toolbar'
import GenerateMaze from './GenerateMaze'

function Grid() {
    let tileW = 30;
    const { width, height } = useWindowDimensions();
    let rows = Math.floor((height * .8) / tileW);
    let cols = Math.floor((width * .8) / tileW);

    const [isChOb, setIsChOb] = useState(false);
    const [wall, setWall] = useState(true);
    const [isVisited, setVisited] = useState(new Array(rows).fill([]).map(() => new Array(cols).fill(false)));


    // Here is the DS nodes[row][col]
    let nodes = [];
    // Nodes with div in between rows
    let htmlGrid = [];

    let counter = 0;
    for (let i = 0; i < rows; i++) {
        nodes.push([])
        for (let j = 0; j < cols; j++) {
            nodes[i].push(<Node
                isMouseDown={isChOb}
                id={counter}
                key={counter}
                coord={[i, j]}
                free={wall}
                visited={isVisited[i][j]}
                neighbors={updateNeighbors(i, j, rows, cols)}
            >
            </Node>)
            counter++;
        }
    }

    for (let i = 0; i < rows; i++) {
        htmlGrid.push(<div key={i} className='board-row'>{nodes[i]}</div>)
    }

    return (
        <>
            <Toolbar generateMaze={() => GenerateMaze(nodes)} />
            <div onMouseDown={() => setIsChOb(true)}
                onMouseUp={() => setIsChOb(false)}
                className='grid'>
                {htmlGrid}
            </div>
        </>
    )
}

export default Grid
