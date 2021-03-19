import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
        </Form>
       </Navbar>  
    ) 
}

export default NavBar;



             
