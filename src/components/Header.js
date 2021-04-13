import React from 'react'
import { Link } from "react-router-dom"

function Header({ location }) {

    let routes = [];
    let names = [];

    if (location === 1) {
        routes = ['/sorting', '/recursion'];
        names = ['Sorting Visualiser', 'Recursion Visualiser'];
    } else if (location === 2) {
        routes = ['/', '/recursion'];
        names = ['Maze & Pathfinding Visualiser', 'Recursion Visualiser']
    } else if (location === 3) {
        routes = ['/', '/sorting'];
        names = ['Maze & Pathfinding Visualiser', 'Sorting Visualiser'];
    }

    return (
        <div className="header">
            <Link to="/" className="logo-name">AlgoSolver</Link>
            <div className="sections">
                <Link to={routes[0]}>{names[0]}</Link>
                <Link to={routes[1]}>{names[1]}</Link>
            </div>
            <div className="resources">
                <Link to="/">Learning Resources</Link>
            </div>
        </div>
    )
}

export default Header