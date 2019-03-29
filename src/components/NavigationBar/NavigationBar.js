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
                    <img src={logo} width="150" height="34" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mt-2 font-weight-normal text-secondary ">
                    <Nav.Link ><h5>Link fake 1</h5></Nav.Link>
                    <Nav.Link ><h5>Link fake 2</h5></Nav.Link>
                    <Nav.Link ><h5>Link fake 3</h5></Nav.Link>
                    <Nav.Link ><h5>Link fake 4</h5></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar