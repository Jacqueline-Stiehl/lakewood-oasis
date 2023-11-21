import '../../../src/App.css'
import Background from "../../assets/images/49.jpg"
import Description from '../Description'

const Home = () => {

  return (
    <>
    <div className="head-text">
        <h1 className="center-text">
        <span className="small-font">Your vacation getaway in Phoenix, Arizona </span>  
        </h1>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            // backgroundSize: 'cover',
            backgroundSize: 'contain',
            backgroundRepeat: "no-repeat",
            // backgroundColor: "purple",
            width: '100%',
            maxWidth: "100%",
            aspectRatio: "16/8",
            // height: '100vh',
            // height: "90vh",
            maxHeight: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // position: "absolute",
          }}
        ></div>
    </div>
    <div className="description">
        <Description/>
    </div>
    </>
  )
}

export default Home


// /////////////////////////////////////////////
// import '../../../src/App.css'
// import { StyleSheet, Font } from "@react-pdf/renderer"
// import { Button } from "@chakra-ui/react";

// import Background from "../../assets/images/49.jpg"
// import Description from '../Description'

// const Home = () => {

//   return (
//     <>
//     <div className="home-container head-text">
//       <div 
//       className="home-header head-image"
//       >
//         <h1 
//         className="header-text center-text" 
//         >
        {/* <span id="small-font">Welcome to </span><br/> */}
//         <span className="small-font">Your vacation getaway in Phoenix, Arizona </span>  
//         </h1>
         
//       </div>
//       <div className="img-container">
//         <div
//           className="img"
//           style={{
//             backgroundImage: `url(${Background})`,
//             backgroundSize: 'cover',
//             width: '100%',
//             maxWidth: "100%",
//             height: '100vh',
//           }}
//         ></div>
//       </div>
      
//     </div>
//     <div className="description">
//         <Description/>
//     </div>
//     </>
//   )
// }

// export default Home
