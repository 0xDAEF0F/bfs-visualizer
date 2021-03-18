import React, { useState } from 'react'
import useWindowDimensions from './useWindowDimensions'
import Node from './Node'
import Toolbar from './Toolbar'
import GenerateMaze from './GenerateMaze'

function Grid() {

    const [isChObs, setIsChObs] = useState(false);

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
                isMouseDown={isChObs}
                id={counter}
                index={{
                    row: i,
                    column: j,
                    rows: rows,
                    cols: cols
                }}
                key={counter}
                free={true}
                visited={false}
                neighbors={{
                    top: undefined,
                    right: undefined,
                    bottom: undefined,
                    left: undefined
                }}
            >
            </Node>)
            counter++;
        }
    }

    // console.log(nodes[0][0].props.neighbors);
    console.log(nodes);

    // Nodes rendered to HTML
    let htmlGrid = []

    for (let i = 0; i < rows; i++) {
        htmlGrid.push(<div key={i} className='board-row'>{nodes[i]}</div>)
    }

    return (
        <>
            <Toolbar generateMaze={() => GenerateMaze(nodes[0][0].props)} />
            <div onMouseDown={() => setIsChObs(true)}
                onMouseUp={() => setIsChObs(false)}
                className='grid'>
                {htmlGrid}
            </div>
        </>
    )
}

export default Grid
