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
