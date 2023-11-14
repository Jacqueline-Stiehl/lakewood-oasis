import { React, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Modal from "react-modal";
import mapwithinset from "../assets/images/lakewood-oasis-map-with-inset.png"
import { useNavigate } from "react-router-dom";

const AboutModal = ({ isOpen, onClose, aboutContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About content"
      className="about-content"
      overlayClassName="modal-overlay"
    >
      <div>{aboutContent}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

const ContactModal = ({ isOpen, onClose, contactContent }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact content"
      className="contact-content"
      overlayClassName="modal-overlay"
    >
      <div>{contactContent}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

//fix contactContent to mapContent--done on 10-2-23
const MapModal = ({ isOpen, onClose, mapContent }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Map content"
        className="map-content"
        overlayClassName="modal-overlay"
      >
        <div>{mapContent}</div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </Modal>
    );
  };


const Footer = () => {

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [aboutModalContent, setAboutModalContent] = useState("");
  const [contactModalContent, setContactModalContent] = useState("");
  const [mapModalContent, setMapModalContent] = useState("");

  const openAboutModal = () => {
    setAboutModalContent(aboutContent);
    setIsAboutModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalContent(contactContent);
    setIsContactModalOpen(true);
  };

  const openMapModal = () => {
    setMapModalContent(mapContent);
    setIsMapModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  const navigate = useNavigate();

  function openAmenities(event) {
    navigate("/amenities");
  }

  function openPhotos(event) {
    navigate("/photos");
  }

  function openCalendar(event) {
    navigate("/calendar");
  }

  function openContact(event) {
    navigate("/contact");
  }

  return (
    <footer className="footer" style={{ borderTop: "1px solid #333" }}>
      <Container fluid >
          <div className="footer-content">
            <div className="footer-links">
              
              <Nav className="d-flex flex-row">
                {/* <Nav.Link href="/" >Home</Nav.Link> */}
                <Nav.Link 
                onClick={openAmenities}
                    >Amenities
                </Nav.Link>
                <Nav.Link 
                onClick={openPhotos} 
                    >Photos
                </Nav.Link>
                <Nav.Link 
                onClick={openCalendar}
                    >Calendar
                </Nav.Link>
                <Nav.Link 
                onClick={openContact}
                    >Contact
                </Nav.Link>
              </Nav>
            </div>
          <div className="footer-info text-center">
            <span className="faded-text">&copy; Lakewood Oasis 2023</span>
          </div>
        </div>
      </Container>
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} aboutContent={aboutModalContent} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} contactContent={contactModalContent} />
      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} mapContent={mapModalContent} />
    </footer>
  );
};

export default Footer;

// ///////////////////////////////////////////////////////////////////////////
//modeled after MinneGrowta
// import { React, useState, useEffect } from "react";
// import { Container, Nav } from "react-bootstrap";
// import Modal from "react-modal";
// import mapwithinset from "../assets/images/lakewood-oasis-map-with-inset.png"

// const aboutContent = (
//   <div>
//     <h2>Welcome to Lakewood Oasis</h2>
//     <p>Please browse through the pictures, amenities and calendar using links at the top of the page.</p>
//   </div>
// );

// const contactContent = (
//   <div>
//     <h2>Contact Information</h2>
//     <p>If you have any questions, please contact us at:</p>
//     <p>Email: sara@gmail.com</p>
//     <p>Phone: (651) 555-5555</p>
//   </div>
// );

// const mapContent = (
//     <div>
//       <h2>Map</h2>
//       <p>Lakewood Oasis is a two-minute walk from twin lakes and is close to many other amenities.</p>
      {/* <p>Click here <a href="https://www.google.com/maps/d/edit?mid=1gVEizNNN21pg0W-RnTJ1n9cy-fH_fck&usp=sharing"></a>to see a close up of the Lakewood Oasis location.</p> */}
      // <img
    //   src="https://www.google.com/maps/d/edit?mid=1gVEizNNN21pg0W-RnTJ1n9cy-fH_fck&ll=33.32015105192812%2C-112.0255193866457&z=14"
    //   src="./src/assets/images/lakewood-oasis-map.png"
    // src="./src/assets/images/lakewood-oasis-map-with-inset.png"
    // src={mapwithinset}  
    //how to resize map image? And move it up on the screen?

    //   height="450"
    //   width="570"
    //     alt="map of area surrounding Lakewood Oasis" 
    
//     height="100vh"
//     width="100%"
//     alt="map of area surrounding Lakewood Oasis"
//         />
//     </div>
//   );

// const AboutModal = ({ isOpen, onClose, aboutContent }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="About content"
//       className="about-content"
//       overlayClassName="modal-overlay"
//     >
//       <div>{aboutContent}</div>
//       <button className="close-button" onClick={onClose}>
//         Close
//       </button>
//     </Modal>
//   );
// };

// const ContactModal = ({ isOpen, onClose, contactContent }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Contact content"
//       className="contact-content"
//       overlayClassName="modal-overlay"
//     >
//       <div>{contactContent}</div>
//       <button className="close-button" onClick={onClose}>
//         Close
//       </button>
//     </Modal>
//   );
// };

//fix contactContent to mapContent--done on 10-2-23
// const MapModal = ({ isOpen, onClose, mapContent }) => {
//     return (
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={onClose}
//         contentLabel="Map content"
//         className="map-content"
//         overlayClassName="modal-overlay"
//       >
//         <div>{mapContent}</div>
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//       </Modal>
//     );
//   };


// const Footer = () => {

//   const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   const [isMapModalOpen, setIsMapModalOpen] = useState(false);
//   const [aboutModalContent, setAboutModalContent] = useState("");
//   const [contactModalContent, setContactModalContent] = useState("");
//   const [mapModalContent, setMapModalContent] = useState("");

//   const openAboutModal = () => {
//     setAboutModalContent(aboutContent);
//     setIsAboutModalOpen(true);
//   };

//   const openContactModal = () => {
//     setContactModalContent(contactContent);
//     setIsContactModalOpen(true);
//   };

//   const openMapModal = () => {
//     setMapModalContent(mapContent);
//     setIsMapModalOpen(true);
//   };

//   const closeAboutModal = () => {
//     setIsAboutModalOpen(false);
//   };

//   const closeContactModal = () => {
//     setIsContactModalOpen(false);
//   };

//   const closeMapModal = () => {
//     setIsMapModalOpen(false);
//   };

//   return (
//     <footer className="footer" style={{ borderTop: "1px solid #333" }}>
//       <Container fluid >
//         <div className="quote-container text-center">
//           {/* <p style={{ fontStyle: "italic", margin: 0 }}>"{currentQuote.text}" -{currentQuote.author}</p> */}
//         </div>
//           <div className="footer-content">
//             <div className="footer-links">
//               <Nav className="d-flex flex-row">
//                 {/* <Nav.Link href="/" >Home</Nav.Link> */}
//                 <Nav.Link 
//                 onClick={openAboutModal}
//                     >About
//                 </Nav.Link>
//                 <Nav.Link 
//                 onClick={openContactModal} 
//                     >Contact
//                 </Nav.Link>
//                 <Nav.Link 
//                 onClick={openMapModal}
//                     >Map
//                 </Nav.Link>
//               </Nav>
//             </div>
//           <div className="footer-info text-center">
//             <span className="faded-text">&copy; Lakewood Oasis 2023</span>
//           </div>
//         </div>
//       </Container>
//       <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} aboutContent={aboutModalContent} />
//       <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} contactContent={contactModalContent} />
//       <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} mapContent={mapModalContent} />
//     </footer>
//   );
// };

// export default Footer;