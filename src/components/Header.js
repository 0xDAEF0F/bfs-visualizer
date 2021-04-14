import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo.svg";

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
        <Navbar className='navbar-dark' expand='md'>
            <Navbar.Brand href='/'>
                <Logo
                    alt="logo"
                />
                algosolver
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className='mr-auto'>
                    <Nav.Link href={routes[0]}>{names[0]}</Nav.Link>
                    <Nav.Link href={routes[1]}>{names[1]}</Nav.Link>
                </Nav>
                <NavDropdown.Divider />
                <Nav>
                    <Nav.Link>Learning Resources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header