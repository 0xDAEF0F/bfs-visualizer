import React, { useState } from 'react'
import { useWindowDimensions, updateNeighbors } from './helperMethods'
import Node from './Node'
import Toolbar from './Toolbar'
import GenerateMaze from './GenerateMaze'

function Grid() {

    const [isChOb, setIsChOb] = useState(false);

    const { width, height } = useWindowDimensions();

    let tileW = 30;
    let rows = Math.floor((height * .8) / tileW);
    let cols = Math.floor((width * .8) / tileW);

    // Here is the DS nodes[row][col]
    let nodes = [];

    let counter = 0;
    for (let i = 0; i < rows; i++) {
        nodes.push([])
        for (let j = 0; j < cols; j++) {
            nodes[i].push(<Node
                isMouseDown={isChOb}
                id={counter}
                key={counter}
                free={true}
                visited={false}
                neighbors={updateNeighbors(i, j, rows, cols)}
            >
            </Node>)
            counter++;
        }
    }

    // Nodes rendered to HTML
    let htmlGrid = []

    for (let i = 0; i < rows; i++) {
        htmlGrid.push(<div key={i} className='board-row'>{nodes[i]}</div>)
    }

    return (
        <>
            <Toolbar generateMaze={() => GenerateMaze(nodes[2][2].props)} />
            <div onMouseDown={() => setIsChOb(true)}
                onMouseUp={() => setIsChOb(false)}
                className='grid'>
                {htmlGrid}
            </div>
        </>
    )
}

export default Grid
