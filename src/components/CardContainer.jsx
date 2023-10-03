import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Card from "./DashboardCards";
import { HStack, VStack, Stack } from "@chakra-ui/react";
import Lake from "../assets/images/lake.jpg"
import Pool from "../assets/images/pool.jpg"
// import Restaurants from "../assets/images/restaurant.jpg"
import { CardBody, Text, Card, Button} from "@chakra-ui/react";
// import "../styles/global.css";
import { useNavigate } from "react-router-dom";

const CardContainer = () => {
  const cards = [

    // { img: Lake, title: "Lake", description: "2 minute walk to twin lakes with walking trails", buttonColor: "blue" },
    // { img: Pool, title: "Hot Tub and Pool", description: "Hot tub and pool", buttonColor: "blue" },
    // { img: Restaurants, title: "Restaurants and Shopping", description: "Close to many restaurants, shopping, and groceries", buttonColor: "blue" },
    
//     { img: Lake, title: "Lake", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16">
//     <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.75 1.75 0 0 1-.088.395l-.318.906.213.242a.75.75 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
//     <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.75.75 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914l2.345-3.048Zm4.22-4.215-.494-.494.205-1.843a1.93 1.93 0 0 0 .006-.067l1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
//   </svg>2 minute walk to twin lakes with walking trails</span>, buttonColor: "white" },
  { title: "Lake", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 576 512"><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>2 minute walk to twin lakes with walking trails</span>, buttonColor: "white" },
//     { img: Pool, title: "Hot Tub and Pool", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 16 16">
//     <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"/>
//   </svg>Hot tub and pool located on property</span>, buttonColor: "blue" },
{ title: "Hot Tub and Pool", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 576 512"><path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>Hot tub and pool located on property</span>, buttonColor: "blue" },
    { title: "Restaurants and Shopping", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
  </svg> Close to restaurants, shopping, and groceries</span>, buttonColor: "white" },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 472);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

//   new stuff below added 10-3-23
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/amenities");
  }

  return (
    <>
    <div className="container-center">
        
      {/* Conditional rendering based on screen width */}
      {isSmallScreen ? (
        <VStack spacing={4}>
          {cards.map((card, index) => (
            <div className="container-card" key={index}>
              {/* <Button className={`dashbutton-${card.buttonColor}`} colorScheme={card.buttonColor}>
                {card.title}
              </Button> */}
            </div>
          ))}
        </VStack>
      ) : (
        <HStack spacing={4}>
          {cards.map((card, index) => {
            const paths = ['/home', '/amenities', '/home'];


            return (
                
              <div className="container-card text-center" key={index}>
                
                <Card className={`card-22`} maxW="sm" marginBottom={"70px"} >
                  <>
                    {/* <img
                      src={card.img}
                      alt="flowers"
                      className="img99"
                      style={{
                        position: "absolute",
                        top: "150%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxHeight: "100%",
                      }} */}
                    {/* /> */}
                    {/* <CardBody className="card-contents" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> */}
                    <CardBody className="card-contents" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      {/* <h3 style={{ whiteSpace: 'nowrap' }}>{card.title}</h3> */}
                      <h3 style={{ whiteSpace: 'nowrap' }}></h3>
                      <Text className="descr">{card.description}</Text>
                      {/* <Link to={paths[index]}>
                        <Button className={`dashbutton-${card.buttonColor}`} colorScheme={card.buttonColor}>
                          {card.title}
                        </Button>
                      </Link> */}
                    </CardBody>
                  </>
                </Card>
                {/* <Link to={paths[index]}> */}
                        {/* <Button  */}
                        {/* // className={`dashbutton-${card.buttonColor}`}  */}
                        {/* // colorScheme={card.buttonColor} */}
                        {/* > */}
                          {/* View more amenities{card.title} */}
                        {/* </Button> */}
                      {/* </Link> */}
              <br />
              </div>
              
              
            );
          })}
          
          
      
        </HStack>
      )}
      
      
    </div>
    <div>
    <VStack>
    {/* <br /> */}
  <Button onClick={handleClick} backgroundColor="#EC7063" marginBottom="50px" marginTop="-150px">
    View more amenities
  </Button>
  {/* <br /> */}
  </VStack>
  </div>
  </>
  );
};

export default CardContainer;