//modeled after react portfolio
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../src/App.css"

function Header () {
  const currentPath = location.pathname;
  
    return (
      <header className="header">
        {/* <h1>
          <span className="dot" id="red"></span> THE 
          <span className="dot" id="yellow"></span> ONE 
          <span className="dot" id="blue"></span> WHERE 
          <span className="dot" id="red"></span> DANIKA 
          <span className="dot" id="yellow"></span> GRADUATES 
          <span className="dot" id="blue"></span>
        </h1> */}
        {/* <br/> */}  

        {/* <Navbar bg="dark" variant="dark" expand="sm"> */}
        <Navbar fixedTop style={{backgroundSize: "0", backgroundColor: "#0B5345"}}>
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
               </Nav>
            {/* Right-side Nav Options */}
               <Nav>
                <>
                {currentPath !== "/home" && (
                    <Nav.Link href="/home" className="navlink2">Home</Nav.Link>
                  )}
                  {currentPath !== "/photos" && (
                    <Nav.Link href="/photos" className="navlink3">Photos</Nav.Link>
                  )}
                  {currentPath !== "/amenities" && (
                    <Nav.Link href="/amenities" className="navlink5">Amenities</Nav.Link>
                  )}
                  {currentPath !== "/calendar" && (
                    <Nav.Link href="/calendar" className="navlink4" style={{ whiteSpace: "nowrap" }}>Calendar</Nav.Link>
                  )}
                  {/* {currentPath !== "/Messages" && (
                    <Nav.Link href="/Messages" className="navlink3">Messages</Nav.Link>
                  )} */}
                </>
               </Nav>
              </Navbar.Collapse>
           </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Header;
  