import '../../../src/App.css';
import React from "react";
import mapwithinset from "../../assets/images/lakewood-oasis-map-with-inset.png"
import Card from "@chakra-ui/react";

const Contact = () => {

  return (
    <>
    <div className="contact-text" fontFamily="Lora">
        <h1 className="loraFont">Contact Information</h1>
        {/* <Card variant="outline" maxW="xl" marginLeft="auto" marginRight="auto" marginBottom="50px"> */}
        {/* <CardBody> */}
        {/* <Stack mt='6' spacing='3'> */}
        <div className="contactBorder">
          <p className="contactInfo">If you have questions or want to make a reservation, please contact us at:</p>
          <ul className="contactInfo">
            <li>
                Email: sara@gmail.com
            </li>
            <li>
                Phone: 651-555-5555
            </li>
          </ul>
          </div>
          {/* </Stack> */}
         {/* </CardBody> */}
          {/* </Card> */}
        
        <div>
            <h2 className="loraFont mapInfo">Map</h2>
            <img src={mapwithinset} height="100vh" width="100%" alt="map of area surrounding Lakewood Oasis">
                
            </img>
        </div>
    </div>
    
    </>
  )
}

export default Contact
