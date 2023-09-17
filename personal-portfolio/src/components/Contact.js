import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import email from "../assets/img/email.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            {/*<img src={contactImg} alt="Contact Us" loading="lazy"/>*/}
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomOutLeft animate__delay-5s" : ""
                    }
                  >
                    <img
                      src={email}
                      alt="Contact Us"
                      loading="lazy"
                      className="email"
                    />
                  </div>
                )}
              </TrackVisibility>
              <form action="https://formspree.io/f/mqkoqzpy" method="post">
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      name="message"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                  </Col>
                </Row>
                <button type="submit">
                  <span>Send</span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
