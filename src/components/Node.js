import React, { useState, useEffect } from 'react'


const Node = ({ isWall, isMouseDown }) => {

    const [wall, setWall] = useState(false);

    useEffect(() => {

        setWall(isWall);

    }, [isWall])

    return (
        <div
            className={!wall ? 'node' : 'wall-node'}
            onMouseEnter={() => isMouseDown ? setWall(true) : ''}
        >
        </div >
    )
}

export default Node
