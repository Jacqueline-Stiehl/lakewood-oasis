//modeled after MinneGrowta
import { React, useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Modal from "react-modal";

const aboutContent = (
  <div>
    <h2>Welcome to Lakewood Oasis</h2>
    <p>Please browse through the pictures, amenities and calendar using links at the top of the page.</p>
  </div>
);

const contactContent = (
  <div>
    <h2>Contact Information</h2>
    <p>If you have any questions, please contact us at:</p>
    <p>Email: sara@gmail.com</p>
    <p>Phone: (651) 867-5309</p>
  </div>
);

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



const Footer = () => {

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [aboutModalContent, setAboutModalContent] = useState("");
  const [contactModalContent, setContactModalContent] = useState("");

  const openAboutModal = () => {
    setAboutModalContent(aboutContent);
    setIsAboutModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalContent(contactContent);
    setIsContactModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <footer className="footer" style={{ borderTop: "1px solid #333" }}>
      <Container fluid >
        <div className="quote-container text-center">
          {/* <p style={{ fontStyle: "italic", margin: 0 }}>"{currentQuote.text}" -{currentQuote.author}</p> */}
        </div>
          <div className="footer-content">
            <div className="footer-links">
              <Nav className="d-flex flex-row">
                {/* <Nav.Link href="/" >Home</Nav.Link> */}
                <Nav.Link 
                onClick={openAboutModal}
                    >About
                </Nav.Link>
                <Nav.Link 
                onClick={openContactModal} 
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
    </footer>
  );
};

export default Footer;