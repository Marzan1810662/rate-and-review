import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" className='mb-md-4'>
                <Container>
                    <Navbar.Brand className='fw-bolder fs-2 text-secondary' as={NavLink} to="/">Rate & Review</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto nav-bar">
                            <Nav.Link className='fs-5 fw-bold ms-5' as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link className='fs-5 fw-bold ms-5' as={NavLink} to="/reviews">Reviews</Nav.Link>
                            <Nav.Link className='fs-5 fw-bold ms-5' as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link className='fs-5 fw-bold ms-5' as={NavLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='fs-5 fw-bold ms-5' as={NavLink} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;