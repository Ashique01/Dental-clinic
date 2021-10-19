import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../Hooks/useFirebase';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><span className='fw-bolder fs-1 text-warning'>AM Dental Clinic</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='navLink-style fw-bold' as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        {user?.email ?
                            <p className=' text-danger fw-bold mt-3 mx-3 pt-1 fst-italic fs-5'>{user.displayName}<Button onClick={logOut} variant="light">Logout </Button></p> :
                            <Nav.Link className='navLink-style fw-bold' as={Link} to="/login">Login</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header
