import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, NavLink } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom';

export default function Header(Props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">{Props.Title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink as={Link} to="/home">Home</NavLink>
                            <NavLink as={Link} to="/createpost">Create Post</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
Header.propTypes = {
    Title: PropTypes.string
}
Header.defaultProps = {
    Title: "Title should be here."
}