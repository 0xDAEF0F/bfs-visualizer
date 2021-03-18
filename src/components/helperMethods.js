import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const updateNeighbors = (row, col, maxRows, maxCols) => {

    let top = [row - 1, col];
    let right = [row, col + 1];
    let bottom = [row + 1, col];
    let left = [row, col - 1];

    if (top[0] < 0) {
        top = null;
    }
    if (right[1] > maxCols - 1) {
        right = null;
    }
    if (bottom[0] > maxRows - 1) {
        bottom = null;
    }
    if (left[1] < 0) {
        left = null;
    }

    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
    }
}


