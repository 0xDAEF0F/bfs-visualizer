import React, { useState, useEffect } from 'react'


const Node = ({ isWall, isMouseDown, carved }) => {

    const [wall, setWall] = useState(isWall);

    useEffect(() => {
        // props isWall state will only change when generate maze button is clicked.
        setWall(isWall);
    }, [isWall])

    return (
        <div
            className={carved || !wall ? 'node' : 'wall-node'}
            onMouseEnter={() => isMouseDown ? setWall(true) : ''}
        >
        </div >
    )
}

export default Node
