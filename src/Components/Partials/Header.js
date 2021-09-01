import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

const Header = (props) => {
        return(
            <Navbar bg="dark" varient="dark" expand="lg">
                <Nav.Link className="headerLink" href='/Projects'> My Projects</Nav.Link>
            </Navbar>
        )
}

export default Header;