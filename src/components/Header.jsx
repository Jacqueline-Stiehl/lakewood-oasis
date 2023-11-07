//modeled after react portfolio
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../../src/App.css"

function Header () {
  const location = useLocation();
  const currentPath = location.pathname;
  
    return (
      // <header className="header" >  
      <header className={`header flex justify-between items-center h-24 w-full px-4 md:px-8 lg:px-16 2xl:px-32 py-6 drop-shadow-brand`} >

        {/* <Navbar bg="dark" variant="dark" expand="sm"> */}
        <Navbar className="navbar navbar-dark" expand="lg" fixedTop style={{backgroundSize: "0", backgroundColor: "#154360"
        // backgroundColor: "#2C3E50"
        // backgroundColor: "#0E6251"
        }}>
          {/* <Container fluid> */}
            <Container>
            {/* <span className="logo-text">        Lakewood Oasis       </span> */}
          <Navbar.Brand className="ms-5" href="/home">
            <img
              src="/favicon.png"
              alt="Logo"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
            <span className="logo-text">        Lakewood Oasis</span>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
               <Nav className="me-auto">
               </Nav>
            {/* Right-side Nav Options */}
               <Nav>
                <>
                {currentPath !== "/home" && (
                    <Nav.Link href="/home"  className="navlink2">Home</Nav.Link>
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
  