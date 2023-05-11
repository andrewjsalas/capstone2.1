import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { Form } from "react-router-dom";

function Navbar() {
    return (
        <NavBar bg="dark" expand="lg">

            <Container>

                <NavBar.Brand href="#home">Lucid</NavBar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link href="#home">Home</Nav.Link>

                        <NavDropdown title="dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search for a movie"
                            className="me-2"
                            aria-label="Search" 
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>

            </Container>

        </NavBar>
    )
}

export default Navbar;