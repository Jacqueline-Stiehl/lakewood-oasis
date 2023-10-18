import React from "react";
import { useEffect, useState } from "react";
// import { Container, Navbar, Nav } from 'react-bootstrap/Nav';
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navigation(props) {

//   const style = {
//     card: { 
//         background: "black", 
//         padding: "5px", 
//         margin: 20,
//   },
//     heading: {
//         background: "black",
//         fontSize: "25px",
//         color: "white",
//     },
// }

useEffect(() => {
    console.log("Hello")
}, [window.location.href])

  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => props.handlePageChange('Home')} href="/home">Home</Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange('Photos')} href="#" eventKey="link-1">Photos</Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange('Amenities')} href="#" eventKey="link-2">Amenities</Nav.Link>
            <Nav.Link onClick={() => props.handlePageChange('Calendar')} href="#" eventKey="link-3">Calendar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}
