import React, { useState, useEffect } from 'react'


const Node = ({ isWall, isMouseDown, coord, turnToWall }) => {

    return (
        <div
            className={!isWall ? 'node' : 'wall-node'}
            onMouseEnter={() => isMouseDown ? turnToWall(coord) : ''}
        >
        </div >
    )
}

export default Node
