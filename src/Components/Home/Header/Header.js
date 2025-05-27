import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
     signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className='text-dark' as={Link} to="/">Weattle...</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="home#services">Services</Nav.Link>
            <Nav.Link className='text-dark' href="home#experts">Experts</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/blogs">Blogs</Nav.Link>
          </Nav>
          <Nav>
            {
              user ?
                <button onClick={handleSignOut} className='text-dark bg-primary'>sign out</button>
                :

                <Nav.Link className='text-dark' as={Link} to="/login">Login</Nav.Link>}

            <Nav.Link className='text-dark' as={Link} to="/about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;