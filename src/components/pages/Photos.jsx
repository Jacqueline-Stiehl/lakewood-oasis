import carouselPhotos from "../../assets/utils/photosForCarousel";
import Carousel from 'react-bootstrap/Carousel';
import CardContainer from "../CardContainer";
import {Stack, Card} from '@chakra-ui/react';

function Photos() {
return (
  <>
  <Carousel fade pause="hover" data-bs-theme="dark" controls={true} indicators={false} renderArrowPrev={(clickHandler, hasPrev) => {
    return (
      <div
        className={`${
          hasPrev ? "absolute" : "hidden"
        } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <LeftIcon className="w-9 h-9 text-white" />
      </div>
    );
  }}
  renderArrowNext={(clickHandler, hasNext) => {
    return (
      <div
        className={`${
          hasNext ? "absolute" : "hidden"
        } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <RightIcon className="w-9 h-9 text-white" />
      </div>
    );
  }}>
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
