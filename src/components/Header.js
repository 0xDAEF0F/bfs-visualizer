import React from 'react';
import {  Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Header() {

    return (
        <Navbar className='navbar-dark' expand='md'>
            <Navbar.Brand href='/' style={{
                padding: 0,
            }}>
                <Logo
                    alt="logo"
                />
                algosolver
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header