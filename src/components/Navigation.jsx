import React from "react";
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav'; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <>
      <Nav style={style.card} className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('Home')} style={style.heading} href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick={() => props.handlePageChange('Photos')} style={style.heading} href="#" eventKey="link-1">Photos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('Amenities')} style={style.heading} href="#" eventKey="link-2">Amenities</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('Calendar')} style={style.heading} href="#" eventKey="link-3">Calendar</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link onClick={() => props.handlePageChange('SeniorPics')} style={style.heading} href="#" eventKey="link-4">SeniorPics</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </>
    )
}
