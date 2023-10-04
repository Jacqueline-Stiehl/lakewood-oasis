import '../../../src/App.css'
// import { StyleSheet, Font } from "@react-pdf/renderer"
// import { Button } from "@chakra-ui/react";

import Background from "../../assets/images/49.jpg"

// Font.register({family: "Ceviche One", src: source})

// const styles = StyleSheet.create ({
//     title: {
//         fontFamily: "Ceviche One"
//     }
// })

const Home = () => {

  return (
    <div className="home-container head-text">
      <div className="home-header head-image">
        <h1 className="header-text center-text" >
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
      {/* <div className="home-container">
        <div style={{ position: "fixed" }}> */}
          {/* <Button
            className='homeButton'
            colorScheme="orange"
            onClick={() => {
              window.open("https://arb.umn.edu/", "_blank");
            }}
            style={buttonStyles}
            size="lg"
          >
            Click for Resources <br />
            from the Minnesota Arboretum!
          </Button> */}
        {/* </div>
      </div> */}
    </div>
  )
}

export default Home
