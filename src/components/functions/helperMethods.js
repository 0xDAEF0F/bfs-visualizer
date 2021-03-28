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

export function GetRowsCols() {
    const { width, height } = useWindowDimensions();

    let tileW = 30;
    let rows = Math.floor((height * .8) / tileW);
    let cols = Math.floor((width * .8) / tileW);

    return [rows, cols];
}

export function fillMatrix(loop1, loop2, elem = null) {
    let arr = [];
    for (let i = 0; i < loop1; i++) {
        arr.push([]);
        for (let j = 0; j < loop2; j++) {
            arr[i].push(elem);
        }
    }
    return arr;
}