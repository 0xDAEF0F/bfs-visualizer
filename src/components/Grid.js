import React from 'react'
import useWindowDimensions from './useWindowDimensions'
import Node from './Node'

function Grid() {

    const { width, height } = useWindowDimensions();

    let tileW = 30;
    let rows = Math.floor((height * .8) / tileW);
    let cols = Math.floor((width * .8) / tileW);


    let nodes = [];

    let counter = 0;
    for (let i = 0; i < rows; i++) {
        nodes.push([])
        for (let j = 0; j < cols; j++) {
            nodes[i].push(<Node id={counter}></Node>)
            counter++;
        }
    }


    let htmlGrid = []

    for (let i = 0; i < rows; i++) {
        htmlGrid.push(<div className='board-row'>{nodes[i]}</div>)
    }

    return (
        <div className='grid'>
            {htmlGrid}
        </div>
    )
}

export default Grid
