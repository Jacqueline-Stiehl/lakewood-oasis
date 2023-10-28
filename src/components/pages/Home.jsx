import '../../../src/App.css'
// import { StyleSheet, Font } from "@react-pdf/renderer"
// import { Button } from "@chakra-ui/react";

import Background from "../../assets/images/49.jpg"
import Description from '../Description'

const Home = () => {

  return (
    <>
    <div className="home-container head-text">
      <div 
      className="home-header head-image"
      >
        <h1 
        className="header-text center-text" 
        >
        {/* <span id="small-font">Welcome to </span><br/> */}
        <span className="small-font">Your vacation getaway in Phoenix, Arizona </span>  
        </h1>
         
      </div>
      <div className="img-container">
        <div
          className="img"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
          }}
        ></div>
      </div>
      
    </div>
    <div className="description">
        <Description/>
    </div>
    </>
  )
}

export default Home
