import carouselPhotos from "../../assets/utils/photosForCarousel";
import Carousel from 'react-bootstrap/Carousel';
import CardContainer from "../CardContainer";
import {Stack, Card} from '@chakra-ui/react';

function Photos() {
return (
  <>
  <Carousel fade pause="hover" data-bs-theme="dark">
    {carouselPhotos.map((photo, index) => (
      <Carousel.Item>
        <img
        className="d-block w-100 block-example border border-dark"
        // src={photo.pic}
        src={photo.image}
        alt={photo.alt} />
        <Carousel.Caption>
          <h3>{photo.captionTitle}</h3>
          <p>{photo.captionDescription}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  
  <div>
  <Card>
<Stack>
<CardContainer className="feature-card"/>
</Stack>
</Card> 
</div>
{/* <div>
  <CardContainer className="feature-card"/>
</div> */}

  </>
)
    }

export default Photos;
// //////////////////////////////////////////////////////////

// import Carousel from 'react-bootstrap/Carousel';
// import CardContainer from "../CardContainer";
// import {Card, Stack, CardBody} from '@chakra-ui/react'
// import pic1 from "../../assets/images/LakewoodOasis-1.jpg";
// import pic2 from "../../assets/images/LakewoodOasis-2.jpg";
// import pic3 from "../../assets/images/LakewoodOasis-3.jpg";
// import pic4 from "../../assets/images/LakewoodOasis-4.jpg";
// import pic5 from "../../assets/images/LakewoodOasis-5.jpg";
// import pic6 from "../../assets/images/LakewoodOasis-6.jpg";
// import pic7 from "../../assets/images/LakewoodOasis-7.jpg";
// import pic8 from "../../assets/images/LakewoodOasis-8.jpg";
// import pic9 from "../../assets/images/LakewoodOasis-9.jpg";
// import pic10 from "../../assets/images/LakewoodOasis-10.jpg";
// import pic11 from "../../assets/images/LakewoodOasis-11.jpg";
// import pic12 from "../../assets/images/LakewoodOasis-12.jpg";
// import pic13 from "../../assets/images/LakewoodOasis-13.jpg";
// import pic14 from "../../assets/images/LakewoodOasis-14.jpg";
// import pic15 from "../../assets/images/LakewoodOasis-15.jpg";
// import pic16 from "../../assets/images/LakewoodOasis-16.jpg";
// import pic17 from "../../assets/images/LakewoodOasis-17.jpg";
// import pic18 from "../../assets/images/LakewoodOasis-18.jpg";
// import pic19 from "../../assets/images/LakewoodOasis-19.jpg";
// import pic20 from "../../assets/images/LakewoodOasis-20.jpg";
// import pic21 from "../../assets/images/LakewoodOasis-21.jpg";
// import pic22 from "../../assets/images/LakewoodOasis-22.jpg";
// import pic23 from "../../assets/images/LakewoodOasis-23.jpg";
// import pic24 from "../../assets/images/LakewoodOasis-24.jpg";
// import pic25 from "../../assets/images/LakewoodOasis-25.jpg";
// import pic26 from "../../assets/images/LakewoodOasis-26.jpg";
// import pic27 from "../../assets/images/LakewoodOasis-27.jpg";
// import pic28 from "../../assets/images/LakewoodOasis-28.jpg";
// import pic29 from "../../assets/images/LakewoodOasis-29.jpg";
// import pic30 from "../../assets/images/LakewoodOasis-30.jpg";
// import pic31 from "../../assets/images/LakewoodOasis-31.jpg";
// import pic32 from "../../assets/images/LakewoodOasis-33.jpg";
// import pic33 from "../../assets/images/LakewoodOasis-30.jpg";
// import pic34 from "../../assets/images/LakewoodOasis-34.jpg";
// import pic35 from "../../assets/images/LakewoodOasis-35.jpg";
// import pic36 from "../../assets/images/LakewoodOasis-36.jpg";
// import pic37 from "../../assets/images/LakewoodOasis-37.jpg";
// import pic38 from "../../assets/images/LakewoodOasis-38.jpg";
// import pic41 from "../../assets/images/LakewoodOasis-41.jpg";
// import pic42 from "../../assets/images/LakewoodOasis-42.jpg";
// import pic43 from "../../assets/images/LakewoodOasis-43.jpg";
// import pic44 from "../../assets/images/LakewoodOasis-44.jpg";
// import pic45 from "../../assets/images/LakewoodOasis-45.jpg";
// import pic46 from "../../assets/images/LakewoodOasis-46.jpg";
// import pic47 from "../../assets/images/LakewoodOasis-47.jpg";
// import pic48 from "../../assets/images/LakewoodOasis-48.jpg";
// import pic49 from "../../assets/images/LakewoodOasis-49.jpg";
// import map2 from "../../assets/images/lakewood-oasis-map2.png"
// // import Map from '../Map';
// // import Background2 from "../../assets/images/49.jpg";
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function Photos() {
//   return (
// <>
//     <div className="photo-bg">
//       {/* <Card className="timeline-content" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'> */}
//       {/* photo cards center when I removed the direction content in the line above */}
//       <Card className="timeline-content" overflow='hidden' variant='outline'>
//       <Stack>
//         <CardBody className="timeline-container" marginBottom={"170px"}>
//     <Carousel fade pause="hover" data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic1}
//         alt="front of house" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         // src="../src/assets/images/LakewoodOasis-2.jpg"
//         src={pic2}
//         alt="front of house side angle" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic3}
//         alt="front of house side angle" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic4}
//         alt="dining area" />
//         <Carousel.Caption>
//           <h3>Fourth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic5}
//         alt="dining area and stairway" />
//         <Carousel.Caption>
//           <h3>Fifth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic6}
//         alt="dining area and stairway" />
//         <Carousel.Caption>
//           <h3>Sixth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic7}
//         alt="dining area and living room" />
//         <Carousel.Caption>
//           <h3>Seventh slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic8}
//         alt="fireplace" />
//         <Carousel.Caption>
//           <h3>Eighth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic9}
//         alt="living room" />
//         <Carousel.Caption>
//           <h3>Ninth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic10}
//         alt="living room" />
//         <Carousel.Caption>
//           <h3>Tenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic11}
//         alt="fireplace and living room" />
//         <Carousel.Caption>
//           <h3>Eleventh slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic12}
//         alt="kitchen" />
//         <Carousel.Caption>
//           <h3>Twelfth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic13}
//         alt="kitchen" />
//         <Carousel.Caption>
//           <h3>Thirteenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic14}
//         alt="Kitchen and view of backyard" />
//         <Carousel.Caption>
//           <h3>Fourteenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic15}
//         alt="kitchen" />
//         <Carousel.Caption>
//           <h3>Fifteenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic16}
//         alt="bathroom" />
//         <Carousel.Caption>
//           <h3>Sixteenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic17}
//         alt="bedroom" />
//         <Carousel.Caption>
//           <h3>Seventeenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic18}
//         alt="bedroom" />
//         <Carousel.Caption>
//           <h3>Eighteenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic19}
//         alt="bedroom" />
//         <Carousel.Caption>
//           <h3>Nineteenth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic20}
//         alt="bedroom" />
//         <Carousel.Caption>
//           <h3>Twentieth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//       src={pic21}
//         alt="full bath" />
//         <Carousel.Caption>
//           <h3>Twenty first slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic22}
//         alt="closet" />
//         <Carousel.Caption>
//           <h3>Twenty second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic23}
//         alt="bedroom" />
//         <Carousel.Caption>
//           <h3>Twenty third slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic24}
//         alt="bedroom with bunk beds" />
//         <Carousel.Caption>
//           <h3>Twenty fourth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic25}
//         alt="bathroom" />
//         <Carousel.Caption>
//           <h3>Twenty fifth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic26}
//         alt="laundry room" />
//         <Carousel.Caption>
//           <h3>Twenty sixth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic27}
//         alt="covered patio" />
//         <Carousel.Caption>
//           <h3>Twenty seventh slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic28}
//         alt="covered patio" />
//         <Carousel.Caption>
//           <h3>Twenty eighth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic29}
//         alt="covered patio" />
//         <Carousel.Caption>
//           <h3>Twenty ninth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic30}
//         alt="grill" />
//         <Carousel.Caption>
//           <h3>Thirtieth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic31}
//         alt="backyard" />
//         <Carousel.Caption>
//           <h3>Thirty one slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic32}
//         alt="pool and hot tub" />
//         <Carousel.Caption>
//           <h3>Thirty second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic33}
//         alt="back of house" />
//         <Carousel.Caption>
//           <h3>Thirty third slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic34}
//         alt="back of house" />
//         <Carousel.Caption>
//           <h3>Thirty fourth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic35}
//         alt="pool" />
//         <Carousel.Caption>
//           <h3>Thirty fifth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic36}
//         alt="view of nearby lake" />
//         <Carousel.Caption>
//           <h3>Thirty sixth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic37}
//         alt="view of nearby lake" />
//         <Carousel.Caption>
//           <h3>Thirty seventh slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic38}
//         alt="view of nearby lake" />
//         <Carousel.Caption>
//           <h3>Thirty eighth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic41}
//         alt="walking path" />
//         <Carousel.Caption>
//           <h3>Forty first slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic42}
//         alt="walking path" />
//         <Carousel.Caption>
//           <h3>Forty second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic43}
//         alt="dock at nearby lake" />
//         <Carousel.Caption>
//           <h3>Forty third slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic44}
//         alt="nearby playground" />
//         <Carousel.Caption>
//           <h3>Forty fourth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic45}
//         alt="nearby covered picnic area" />
//         <Carousel.Caption>
//           <h3>Forty five slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic46}
//         alt="dock at nearby lake" />
//         <Carousel.Caption>
//           <h3>Forty sixth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic47}
//         alt="nearby playground" />
//         <Carousel.Caption>
//           <h3>Forty seventh slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//       src={pic48}
//         alt="nearby playground" />
//         <Carousel.Caption>
//           <h3>Forty eighth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//         className="d-block w-100 block-example border border-dark"
//         src={pic49}
//         alt="view of nearby lake" />
//         <Carousel.Caption>
//           <h3>Forty ninth slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     {/* // </div>
//     // </div> */}
//     </CardBody>
//     </Stack>
//     </Card>
//     {/* <Card>
//         <Stack> */}
//         {/* <h1>Property Features</h1> */}
//     {/* <CardContainer className="cardcont"/> */}
//     <CardContainer className="feature-card"/>
//     {/* <Map/> */}
//     {/* </Stack>
//     </Card> */}
//     </div>
//     </>
//   );
// }

// export default Photos;