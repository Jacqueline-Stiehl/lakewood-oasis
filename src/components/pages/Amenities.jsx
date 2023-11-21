import CardContainer from "../../components/CardContainer";
// import {Card, Stack, CardBody} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Card from "./DashboardCards";
import { HStack, VStack, Stack } from "@chakra-ui/react";
import { CardBody, Text, Card, Button} from "@chakra-ui/react";
// import { CheckIcon } from '@chakra-ui/icons'
// import {faBed} from "@chakra-ui/icons"
// import { FontAwesomeIcon } from "@chakra-ui/icons";
// import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { MdDone } from "react-icons/md";commented out 11-1-23 to deploy to Netlify
import {
    Box,
    Grid,
    Image,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    SimpleGrid,
    ListItem,
    ListIcon,
    UnorderedList,
    List,
  } from "@chakra-ui/react";

const Amenities = () => {
    const cards = [
  
        { title: "Lake", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 576 512"><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>2 minute walk to twin lakes with walking trails</span>, buttonColor: "white" },

        { title: "Hot Tub and Pool", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 576 512"><path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>Hot tub and pool located on property</span>, buttonColor: "blue" },

        { title: "Restaurants and Shopping", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
  </svg> Close to restaurants, shopping, and groceries</span>, buttonColor: "white" },

 
      
        { title: "Bedrooms", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>3 bedrooms and 3 bathrooms</span>, buttonColor: "white" },

      { title: "Laundry", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 384 512"><path d="M96 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24V48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H88C74.7 96 64 85.3 64 72s10.7-24 24-24h8V24zM0 256c0-70.7 57.3-128 128-128H256c70.7 0 128 57.3 128 128V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256zm256 0v96c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/></svg>Washer and dryer located on property</span>, buttonColor: "blue" },

      { title: "Restaurants and Shopping", description: <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 576 512"><path d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg> Close to highways 10 and 202</span>, buttonColor: "white" },
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

  return (
    <div>
      <div className="photo-bg">
        <h1>Property Features</h1>
          {/* <CardContainer className="cardcont"/> */}
      </div>
      <div className="container-center">
        
      {/* Conditional rendering based on screen width */}
      {/* {isSmallScreen ? (
        <VStack spacing={4}>
          {cards.map((card, index) => (
            <div className="container-card" key={index}>
              
            </div>
          ))}
        </VStack>
      ) : ( */}
        <Stack direction={"row"} spacing={4}>
          {/* {cards.map((card, index) => { */}
            // const paths = ['/home', '/amenities', '/home'];


            return (
                <>
<div className="fav-content">
{/* <Grid templateColumns="repeat(3, 1fr)" gap={6}  */}
{/* below added 11-9-23 */}
<Grid className="feature-grid" gap={6}
p={8}
>

{/* <Card maxW='md'> */}
{/* below added 11-9-23 */}
<Card className="feature-card">
  <CardBody>
    <Stack 
    mt='6' 
    spacing='3'
    >
      <Text 
    //   className="bi"
      >
      <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 576 512"><path d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>2 minute walk to twin lakes with walking trails</span>
      </Text>
    </Stack>
  </CardBody>
</Card>

{/* <Card maxW='md'> */}
{/* below added 11-9-23 */}
<Card className="feature-card">
  <CardBody>
    <Stack mt='6' spacing='3'>
     
      <Text className="bi">
      <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 576 512"><path d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>Hot tub and pool located on property</span>
      </Text>
      
    </Stack>
  </CardBody>
</Card>

{/* <Card maxW='md'> */}
{/* below added 11-9-23 */}
<Card className="feature-card">
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      
      <Text className="bi">
      <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
  </svg> Close to restaurants, shopping, and groceries</span>
      </Text>
      
    </Stack>
  </CardBody>
</Card>

{/* <Card maxW='md'> */}
{/* below added 11-9-23 */}
<Card className="feature-card">
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      
      <Text className="bi">
      <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>3 bedrooms and 3 bathrooms</span>
      </Text>
      
    </Stack>
  </CardBody>
</Card>

{/* <Card maxW='md'> */}
{/* below added 11-9-23 */}
<Card className="feature-card">
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      
      <Text className="bi">
      <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 384 512"><path d="M96 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24V48h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H88C74.7 96 64 85.3 64 72s10.7-24 24-24h8V24zM0 256c0-70.7 57.3-128 128-128H256c70.7 0 128 57.3 128 128V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256zm256 0v96c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32z"/></svg>Washer and dryer located on property</span>
      </Text>
      
    </Stack>
  </CardBody>
</Card>

{/* <Card maxW='md'> */}
{/* below added 11-9-23 */}
<Card className="feature-card">
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      
      <Text className="bi">
      <span><svg xmlns="http://www.w3.org/2000/svg" color="#EC7063" width="75" height="75" fill="currentColor" class="bi bi-water" viewBox="0 0 576 512"><path d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg> Close to highways 10 and 202</span>
      </Text>
    </Stack>
  </CardBody>
</Card>
        
</Grid>  
</div>     
                
        
              </>
              
            );
        </Stack>
      {/* )} */}
    </div>
    <Stack>
      <div 
   
      >
      <div 
    
      >
        <h1 className="add-amen">Additional Amenities</h1>

        

    <Card variant="outline" maxW="xl" marginLeft="auto" marginRight="auto" marginBottom="50px" >
    <CardBody >
        <Stack mt='6' spacing='3'>
        <Text className="bi">
        {/* <UnorderedList styleType="none" fontSize="20px"> */}
        <UnorderedList fontSize="20px">
            {/* <ListItem><ListIcon as={MdCheckCircle} color="#EC7063" fill="currentColor"/>Heated pool</ListItem> */}
            {/* List items below were commented out 11-1-23 to deploy via Netlify */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Heated pool</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Hot tub</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Lounge chairs</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Outdoor dining set</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Grill</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Fully stocked kitchen (dishes, glasses, coffee cups, pots and pans, toaster, utensils...)</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Smart TVs</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Printer</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Desk/office space</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Garage parking</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>King bed</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Private primary bath</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Queen bed</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Twin over full bunk bed</ListItem> */}

            <ListItem color="#154360">Heated pool</ListItem>
            <ListItem color="#154360"> Hot tub</ListItem>
            <ListItem color="#154360">Lounge chairs</ListItem>
            <ListItem color="#154360">Outdoor dining set</ListItem>
            <ListItem color="#154360">Grill</ListItem>
            <ListItem color="#154360">Fully stocked kitchen (dishes, glasses, coffee cups, pots and pans, toaster, utensils...)</ListItem>
            <ListItem color="#154360">Smart TVs</ListItem>
            <ListItem color="#154360">Printer</ListItem>
            <ListItem color="#154360">Desk/office space</ListItem>
            <ListItem color="#154360">Garage parking</ListItem>
            <ListItem color="#154360">King bed</ListItem>
            <ListItem color="#154360">Private primary bath</ListItem>
            <ListItem color="#154360">Queen bed</ListItem>
            <ListItem color="#154360">Twin over full bunk bed</ListItem>
        </UnorderedList>
      </Text>
    </Stack>
  </CardBody>
</Card>

      </div>
      </div>
      </Stack>
    </div>
  );

}

export default Amenities;