import Carousel from 'react-bootstrap/Carousel';
// import Background2 from "../../assets/images/49.jpg";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Photos() {
  return (

    <div bg="light blue">
        {/* // <div className="img-container">
        // <div */}
        {/* //   className="img"
        //   style={{ */}
        {/* //     backgroundImage: `url(${Background2})`,
        //     backgroundSize: 'cover',
        //     width: '100%',
        //     height: '100vh',
        //     opacity: ".5",
        //   }}
        // > */}
      
    <Carousel fade pause="hover" data-bs-theme="dark">
      <Carousel.Item>
        <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-1.jpg"
        alt="front of house" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-2.jpg"
        alt="front of house side angle" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-3.jpg"
        alt="front of house side angle" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-4.jpg"
        alt="dining area" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-5.jpg"
        alt="dining area and stairway" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-6.jpg"
        alt="dining area and stairway" />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-7.jpg"
        alt="dining area and living room" />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-8.jpg"
        alt="fireplace" />
        <Carousel.Caption>
          <h3>Eighth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-9.jpg"
        alt="living room" />
        <Carousel.Caption>
          <h3>Ninth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-10.jpg"
        alt="living room" />
        <Carousel.Caption>
          <h3>Tenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-11.jpg"
        alt="fireplace and living room" />
        <Carousel.Caption>
          <h3>Eleventh slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-12.jpg"
        alt="kitchen" />
        <Carousel.Caption>
          <h3>Twelfth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-13.jpg"
        alt="kitchen" />
        <Carousel.Caption>
          <h3>Thirteenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-14.jpg"
        alt="Kitchen and view of backyard" />
        <Carousel.Caption>
          <h3>Fourteenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-15.jpg"
        alt="kitchen" />
        <Carousel.Caption>
          <h3>Fifteenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-16.jpg"
        alt="bathroom" />
        <Carousel.Caption>
          <h3>Sixteenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-17.jpg"
        alt="bedroom" />
        <Carousel.Caption>
          <h3>Seventeenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-18.jpg"
        alt="bedroom" />
        <Carousel.Caption>
          <h3>Eighteenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-19.jpg"
        alt="bedroom" />
        <Carousel.Caption>
          <h3>Nineteenth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-20.jpg"
        alt="bedroom" />
        <Carousel.Caption>
          <h3>Twentieth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-21.jpg"
        alt="full bath" />
        <Carousel.Caption>
          <h3>Twenty first slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-22.jpg"
        alt="closet" />
        <Carousel.Caption>
          <h3>Twenty third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-23.jpg"
        alt="bedroom" />
        <Carousel.Caption>
          <h3>Twenty third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-24.jpg"
        alt="bedroom with bunk beds" />
        <Carousel.Caption>
          <h3>Twenty fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-25.jpg"
        alt="bathroom" />
        <Carousel.Caption>
          <h3>Twenty fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-26.jpg"
        alt="laundry room" />
        <Carousel.Caption>
          <h3>Twenty sixth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-27.jpg"
        alt="covered patio" />
        <Carousel.Caption>
          <h3>Twenty seventh slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-28.jpg"
        alt="covered patio" />
        <Carousel.Caption>
          <h3>Twenty eighth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-29.jpg"
        alt="covered patio" />
        <Carousel.Caption>
          <h3>Twenty ninth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-30.jpg"
        alt="grill" />
        <Carousel.Caption>
          <h3>Thirtieth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-31.jpg"
        alt="backyard" />
        <Carousel.Caption>
          <h3>Thirty one slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-32.jpg"
        alt="pool and hot tub" />
        <Carousel.Caption>
          <h3>Thirty second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-33.jpg"
        alt="back of house" />
        <Carousel.Caption>
          <h3>Thirty third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-34.jpg"
        alt="back of house" />
        <Carousel.Caption>
          <h3>Thirty fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-35.jpg"
        alt="pool" />
        <Carousel.Caption>
          <h3>Thirty fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-36.jpg"
        alt="view of nearby lake" />
        <Carousel.Caption>
          <h3>Thirty sixth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-37.jpg"
        alt="view of nearby lake" />
        <Carousel.Caption>
          <h3>Thirty seventh slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-38.jpg"
        alt="view of nearby lake" />
        <Carousel.Caption>
          <h3>Thirty eighth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-41.jpg"
        alt="walking path" />
        <Carousel.Caption>
          <h3>Forty first slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-42.jpg"
        alt="walking path" />
        <Carousel.Caption>
          <h3>Forty second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-43.jpg"
        alt="dock at nearby lake" />
        <Carousel.Caption>
          <h3>Forty third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-44.jpg"
        alt="nearby playground" />
        <Carousel.Caption>
          <h3>Forty fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-45.jpg"
        alt="nearby covered picnic area" />
        <Carousel.Caption>
          <h3>Forty five slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-46.jpg"
        alt="dock at nearby lake" />
        <Carousel.Caption>
          <h3>Forty sixth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-47.jpg"
        alt="nearby playground" />
        <Carousel.Caption>
          <h3>Forty seventh slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-48.jpg"
        alt="nearby playground" />
        <Carousel.Caption>
          <h3>Forty eighth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100 block-example border border-dark"
        src="../src/assets/images/LakewoodOasis-49.jpg"
        alt="view of nearby lake" />
        <Carousel.Caption>
          <h3>Forty ninth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* // </div>
    // </div> */}
    </div>
  );
}

export default Photos;