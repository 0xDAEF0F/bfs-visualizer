import React, { useState, useEffect } from 'react'


const Node = ({ free, isMouseDown, visited }) => {

    const [isFree, setFree] = useState(free);

    useEffect(() => {
        // props free state will only change when generate maze button is clicked.
        setFree(free);
    }, [free])

    return (
        <div className={isFree || visited ? 'node' : 'wall-node'}
            onMouseEnter={() => isMouseDown ? setFree(false) : ''}>
        </div>
    )
}

export default Node
