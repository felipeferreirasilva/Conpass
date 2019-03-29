import React from 'react'

// Importa Link para alteraçao de rotas
import { Link } from 'react-router-dom'

// Importa imagem para logo da pasta static/images
import logo from '../../static/images/logo.png'

// Importa components do Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
    return (
        <Navbar bg="transparent" expand="md" className="border-bottom p-4 mb-5">
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logo} width="150" height="34" className="d-inline-block align-top mr-2" alt="React Bootstrap logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mt-2 font-weight-normal text-muted ">
                    <Nav.Link className="h5">Link fake 1</Nav.Link>
                    <Nav.Link className="h5">Link fake 2</Nav.Link>
                    <Nav.Link className="h5">Link fake 3</Nav.Link>
                    <Nav.Link className="h5">Link fake 4</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar