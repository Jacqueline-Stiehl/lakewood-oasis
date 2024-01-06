import CardContainer from "../../components/CardContainer";
// import {Card, Stack, CardBody} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Card from "./DashboardCards";
import { HStack, VStack, Stack } from "@chakra-ui/react";
import { CardBody, Text, Card, Button} from "@chakra-ui/react";
// import { MdCheckCircle, MdDone } from "react-icons/md";--commented out for Netlify deployment 10-31-23
import {
    Grid,
    ListItem,
    UnorderedList,
  } from "@chakra-ui/react";

const Calendar = () => {
  
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
      <div className="photo-bg centerCalendar">
        <h1>Calendar</h1>
        <div>

        <iframe className="centerCalendar" src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%234285F4&ctz=America%2FChicago&showCalendars=0&showTitle=0&showPrint=0&showTz=0&showTabs=0&src=Zm9vdGhpbGxzc2FuY3R1YXJ5QGdtYWlsLmNvbQ&color=%23039BE5" style={{color:777}} width={400} height={300}></iframe>
        </div>
          <p>Please contact us to book your dates.</p>
      </div>
      <div className="container-center">
        
      {/* Conditional rendering based on screen width */}
      {isSmallScreen ? (
        <VStack spacing={4}>
          {cards.map((card, index) => (
            <div className="container-card" key={index}>
            </div>
          ))}
        </VStack>
      ) : (
        <Stack direction={"row"} spacing={4}>

            return (
                <>
                <div className="fav-content">
                    <Grid templateColumns="repeat(3, 1fr)" gap={6} p={8}></Grid>  
                </div>     
                </>
            );
            </Stack>
                 )}
            </div>
            <Stack>
            <div>
            <div>
                <h1 className="add-amen">Policies</h1>

    <Card variant="outline" maxW="xl" marginLeft="auto" marginRight="auto" marginBottom="50px" >
    <CardBody >
        <Stack mt='6' spacing='3'>
        <Text className="bi">
        {/* <UnorderedList styleType="none" fontSize="20px"> */}
        <UnorderedList fontSize="20px" fontFamily="Lora">
          {/* the below lines were commented out on 10-31-23 for Netlify deployment */}
            {/* <ListItem><ListIcon as={MdCheckCircle} color="#EC7063" fill="currentColor"/>Heated pool</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Guests can pay by cashier's check or Venmo</ListItem> */}
            {/* <ListItem color="#154360"><ListIcon as={MdDone} color="#EC7063" fill="currentColor"/>Dates are not booked until the contract is signed and payment is received</ListItem> */}

            <ListItem>Heated pool</ListItem>
            <ListItem color="#154360">Guests can pay by cashier's check or Venmo</ListItem>
            <ListItem color="#154360">Dates are not booked until the contract is signed and payment is received</ListItem>
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

export default Calendar;