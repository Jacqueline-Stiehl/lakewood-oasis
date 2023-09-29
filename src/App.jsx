import { useState } from 'react'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/pages/Home"
// import Photos from "./components/pages/Photos"
// import Amenities from "./components/pages/Amenities"
// import Calendar from "./components/pages/Calendar"
import {ChakraProvider} from "@chakra-ui/react"
import './App.css'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          {/* <Route path="/photos" element={<Photos />}/>
          <Route path="/amenities" element={<Amenities />}/>
          <Route path="/calendar" element={<Calendar/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </div>
      </BrowserRouter>
    </ChakraProvider>
  )
}


export default App
