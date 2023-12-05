import { React, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Modal from "react-modal";
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

  function openHome(event) {
    navigate("/home");
    window.scrollTo({top: 0, behavior: "instant"});
  }

  function openAmenities(event) {
    navigate("/amenities");
    window.scrollTo({top: 0, behavior: "instant"});
  }

  function openPhotos(event) {
    navigate("/photos");
    window.scrollTo({top: 0, behavior: "instant"});
  }

  function openCalendar(event) {
    navigate("/calendar");
    window.scrollTo({top: 0, behavior: "instant"});
  }

  function openContact(event) {
    navigate("/contact");
    window.scrollTo({top: 0, behavior: "instant"});
  }

  return (
    <footer className="footer" style={{ borderTop: "1px solid #333" }}>
      <Container fluid >
          <div className="footer-content">
            {/* <div className="collapse navbar-collapse"> */}
              <Nav className="d-flex flex-row">
              <Nav.Link 
                onClick={openHome}
                    >Home
                </Nav.Link>
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
          <div className="footer-content">
            <span>&copy; Lakewood Oasis 2023</span>
          </div>
          {/* </div> */}
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
