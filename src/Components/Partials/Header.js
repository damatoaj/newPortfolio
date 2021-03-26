import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Nav } from 'react-bootstrap';

const Header = (props) => {
        return(
            <Navbar bg="dark" varient="dark" expand="lg">
                {/* <Nav.Link href='/'>Home Page</Nav.Link>{' | '} */}
                {/* <Nav.Link href='/About_Me'>About Me</Nav.Link>{' | '} */}
                <Nav.Link className="headerLink" href='/Blog'>Blog</Nav.Link>{' | '}
                <Nav.Link className="headerLink" href='/Projects'>My Projects</Nav.Link>{' | '}
                {/* <Nav.Link href="/Music">My Music</Nav.Link> */}
            </Navbar>
        )
}

export default Header;