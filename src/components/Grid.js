import React from 'react'
import useWindowDimensions from './useWindowDimensions'

function Grid() {

    const { width, height } = useWindowDimensions();

    let tileW = 20;
    let rows = Math.floor((width * .85) / tileW)
    let cols = Math.floor((height * .8) / tileW)

    let items = [];

    for (let i = 0; i < rows; i++) {
        items.push(<tr>{i}</tr>)
        for (let j = 0; j < cols; j++) {
            items.push(<td>{j}</td>)
        }
    }

    return (
        <div>
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    )
}

export default Grid
