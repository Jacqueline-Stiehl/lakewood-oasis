import React from "react";
import "../../src/App.css"
import {
    Button,
    Card,
    CardBody,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import pic34 from "../assets/images/LakewoodOasis-34.jpg";
import pic1 from "../assets/images/LakewoodOasis-1.jpg";
import map2 from "../assets/images/lakewood-oasis-map2.png"


function Description () {
  
    const navigate = useNavigate();

    function handleClick(event) {
        navigate("/photos");
      }
  
    return (
      <>
    <Center py={0}>
        <Card className="border border-dark"
        // change direction size (was sm)
            direction={{ base: 'column', xl: 'row' }}
            overflow='hidden'
            variant='outline'
            marginBottom="20px"
            >
        <Image 
            objectFit='cover'
            maxW={{ base: '100%', md: "600px", xl: "800px" }}
            src={pic1} fluid
            alt='front of Lakewood Oasis'
            />

        <Stack 
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            // height={{ sm: '476px', md: '20rem' }}
            >
        <CardBody >
            <Heading py="1" size='md'>The perfect vacation home</Heading>
            <Flex spacing='4' >
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
            <Text py='1' >Lakewood Oasis offers more than just a place to stay. Enjoy nearby shopping, dining, and entertainment options, and take a stroll through this friendly neighborhood. Lakewood Oasis is a three-bedroom, two and half-bath, two-level home with a private heated pool and spa. After a day of exploring nearby hiking trails or golf courses, the cozy family room is the perfect place to relax. The kitchen is stocked with everything you need to cook your favorite meals...or to bake a frozen pizza! Upstairs the primary bedroom offers a king bed with a walk in closet and ensuite. The other two bedrooms offer a queen bed and a bunk bed (twin over full) respectively. Whether travelling with friends or as a family, we have room for everyone!</Text>
            </Flex>
            </Flex>
        </CardBody>
        </Stack>
        </Card>
    </Center>

    <Center py={0}>
        <Card className="border border-dark"
            direction={{ base: 'column', xl: 'row' }}
            overflow='hidden'
            variant='outline'
            marginBottom="20px"
            >
        <Image 
            objectFit='cover'
            maxW={{ base: '100%', md: '600px', xl: "800px" }}
            src={pic34}
            alt='Backyard pool and hot tub'
            />
        <Stack 
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            // height={{ sm: '476px', md: '20rem' }}
            >
        <CardBody >
            <Heading pt="1" size='md'>An oasis in the desert</Heading>
            <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Text py='1'>The backyard offers a glistening pool that invites you to take a dip and the hot tub stands ready for relaxation. The lounge chairs and sitting area make this the perfect space to enjoy a sunny day in the desert!</Text>
            </Flex>
            </Flex>
        </CardBody>
        </Stack>
        </Card>
    </Center>

    <Center py={0}>
        <Card className="border border-dark"
            direction={{ base: 'column', xl: 'row' }}
            overflow='hidden'
            variant='outline'
            marginBottom="20px"
            >
        <Image 
            objectFit='cover'
            maxW={{ base: '100%', md: '600px', xl: "800px" }}
            src={map2}
            alt='map of area surrounding Lakewood Oasis'
            />
        <Stack 
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            // height={{ sm: '476px', md: '20rem' }}
            >
        <CardBody >
            <Heading pt="1" size='md'>The ideal location</Heading>
            <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Text py='1'>Located near restaurants and shopping, golf and hiking, you will find plenty to do. Looking to explore beyond Ahwatukee? Just hop on the 202 or Hwy 10 and you can be anywhere in minutes!</Text>
            </Flex>
            </Flex>
        </CardBody>
        </Stack>
        </Card>
    </Center>
    <VStack>
    <Button onClick={handleClick} backgroundColor="#EC7063" marginBottom="50px" >
    View more photos
  </Button>
  </VStack>
      </>
    );
  };
  
  export default Description;
  


// //////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import "../../src/App.css"
// import {
//     Badge,
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     Center,
//     Flex,
//     Heading,
//     Image,
//     Stack,
//     Text,
//     useColorModeValue,
//     VStack,
//   } from '@chakra-ui/react'
// import { useNavigate } from "react-router-dom";
// import pic34 from "../assets/images/LakewoodOasis-34.jpg";
// import pic1 from "../assets/images/LakewoodOasis-1.jpg";
// import map2 from "../assets/images/lakewood-oasis-map2.png"


// function Description () {
  
//     const navigate = useNavigate();

//     function handleClick(event) {
//         navigate("/photos");
//       }
  
//     return (
//       <>
//     <Center py={6}>
//         <Card className="border border-dark"
//             direction={{ base: 'column', sm: 'row' }}
//             overflow='hidden'
//             variant='outline'
//             >
//         <Image 
//         // className="d-block w-100 block-example border border-dark"
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '600px' }}
//             // src="../../src/assets/images/LakewoodOasis-1.jpg"
//             src={pic1} fluid
//             alt='front of Lakewood Oasis'
//             />

//         <Stack 
//         // borderWidth="1px"
//             borderRadius="lg"
//             w={{ sm: '100%', md: '540px' }}
//             height={{ sm: '476px', md: '20rem' }}
            
//             >
//         <CardBody >
//             <Heading py="1" size='md'>The perfect vacation home</Heading>
//             <Flex spacing='4' >
//             <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
//             <Text py='1' >Lakewood Oasis offers more than just a place to stay. Enjoy nearby shopping, dining, and entertainment options, and take a stroll through this friendly neighborhood. Lakewood Oasis is a three-bedroom, two and half-bath, two-level home with a private heated pool and spa. After a day of exploring nearby hiking trails or golf courses, the cozy family room is the perfect place to relax. The kitchen is stocked with everything you need to cook your favorite meals...or to bake a frozen pizza! Upstairs the primary bedroom offers a king bed with a walk in closet and ensuite. The other two bedrooms offer a queen bed and a bunk bed (twin over full) respectively. Whether travelling with friends or as a family, we have room for everyone!</Text>
//             </Flex>
//             </Flex>
//         </CardBody>
//         </Stack>
//         </Card>
//     </Center>

//     <Center py={6}>
//         <Card className="border border-dark"
//             direction={{ base: 'column', sm: 'row' }}
//             overflow='hidden'
//             variant='outline'
//             >
// <Stack 
// // borderWidth="1px"
//             borderRadius="lg"
//             w={{ sm: '100%', md: '540px' }}
//             height={{ sm: '476px', md: '20rem' }}
//             >
// <CardBody >
//             <Heading pt="20" size='md'>An oasis in the desert</Heading>
//             <Flex spacing='4'>
//             <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
//             <Text py='1'>The backyard offers a glistening pool that invites you to take a dip and the hot tub stands ready for relaxation. The lounge chairs and sitting area make this the perfect space to enjoy a sunny day in the desert!</Text>
//             </Flex>
//             </Flex>
//         </CardBody>
//         </Stack>

//         {/* <Stack borderWidth="1px"
//             borderRadius="lg"
//             w={{ sm: '100%', md: '540px' }}
//             height={{ sm: '476px', md: '20rem' }}
//             > */}
//         <Image 
//         // className="d-block w-100 block-example border border-dark"
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '600px' }}
//             // src="../../src/assets/images/LakewoodOasis-34.jpg"
//             src={pic34}
//             alt='Backyard pool and hot tub'
//             />
//         {/* </Stack> */}
//         </Card>
//     </Center>

//     <Center py={6}>
//         <Card className="border border-dark"
//             direction={{ base: 'column', sm: 'row' }}
//             overflow='hidden'
//             variant='outline'
//             >
//         <Image 
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '600px' }}
//             // src="../../src/assets/images/lakewood-oasis-map2.png"
//             src={map2}
//             alt='map of area surrounding Lakewood Oasis'
//             />

//         <Stack 
//         // borderWidth="1px"
//             borderRadius="lg"
//             w={{ sm: '100%', md: '540px' }}
//             height={{ sm: '476px', md: '20rem' }}>
//         <CardBody >
//             <Heading pt="20" size='md'>The ideal location</Heading>
//             <Flex spacing='4'>
//             <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
//             <Text py='1'>Located near restaurants and shopping, golf and hiking, you will find plenty to do. Looking to explore beyond Ahwatukee? Just hop on the 202 or Hwy 10 and you can be anywhere in minutes!</Text>
//             </Flex>
//             </Flex>
//         </CardBody>
//         </Stack>
//         </Card>
//     </Center>
//     <VStack>
//     <Button onClick={handleClick} backgroundColor="#EC7063" marginBottom="50px" >
//     View more photos
//   </Button>
//   </VStack>

    {/* <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
                "../../src/assets/images/LakewoodOasis-1.jpg"
            }
            alt="Lakewood Oasis Property"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            @lindsey_jam3s
          </Text>
          <Text
            textAlign={'center'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Lakewood Oasis offers more than just a place to stay. Enjoy nearby shopping, dining, and entertainment options, and take a stroll through this friendly neighborhood. Lakewood Oasis is a three-bedroom, two and half-bath, two-level home with a private heated pool and spa. After a day of exploring nearby hiking trails or golf courses, the cozy family room is the perfect place to relax. The kitchen is stocked with everything you need to cook your favorite meals...or to bake a frozen pizza! Upstairs the primary bedroom offers a king bed with a walk in closet and ensuite. The other two bedrooms offer a queen bed and a bunk bed (twin over full) respectively. Whether travelling with friends or as a family, we have room for everyone!
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            
            
            
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            
            
          </Stack>
        </Stack>
      </Stack>
    //</Center> */}

  //     </>
  //   );
  // };
  
  // export default Description;
  