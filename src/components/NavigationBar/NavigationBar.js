import React from 'react'

import logo from '../../static/images/logo.png'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
    return (
        <Navbar bg="transparent" expand="md" className="border-bottom p-3 mb-5">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="120"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto font-weight-normal text-secondary">
                    <Nav.Link href="#home">Link Fake 1</Nav.Link>
                    <Nav.Link href="#home">Link Fake 2</Nav.Link>
                    <Nav.Link href="#home">Link Fake 3</Nav.Link>
                    <Nav.Link href="#home">Link Fake 4</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar