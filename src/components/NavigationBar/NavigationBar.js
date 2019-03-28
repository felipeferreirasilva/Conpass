import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../static/images/logo.png'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
    return (
        <Navbar bg="transparent" expand="md" className="border-bottom p-4 mb-5">
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logo} width="125" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto font-weight-normal text-secondary">
                    <Nav.Link >Link fake 1</Nav.Link>
                    <Nav.Link >Link fake 2</Nav.Link>
                    <Nav.Link >Link fake 3</Nav.Link>
                    <Nav.Link >Link fake 4</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar