import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const myToken = localStorage.getItem('myToken')

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/routines">Routines</Nav.Link>
       { myToken? <Nav.Link href="/myroutines">My Routines</Nav.Link> :'' }
        <Nav.Link href="activities">Activities</Nav.Link>
        </Nav>
      
       </Navbar>  
    ) 
}

export default NavBar;



             
