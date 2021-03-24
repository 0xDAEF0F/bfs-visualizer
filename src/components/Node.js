import React, { useState, useEffect } from 'react'


const Node = ({ free, isMouseDown, id, visited }) => {

    const [isFree, setFree] = useState(free);
    const [isVisited, setVisited] = useState(visited);

    useEffect(() => {
        // props free state will only change when generate maze button is clicked.
        setFree(free);
    }, [free])

    useEffect(() => {
        // when generate maze marks node as visited the node gets 
        // marked as free.
        setVisited(visited);
    }, [visited])

    return (
        <div className={isFree || isVisited ? 'node' : 'wall-node'}
            onMouseEnter={() => isMouseDown ? setFree(false) : ''}>
            {id}
        </div>
    )
}

export default Node
