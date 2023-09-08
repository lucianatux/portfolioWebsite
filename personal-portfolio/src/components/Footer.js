import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center m-3">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon m-3">
              <a href="https://www.linkedin.com/in/lucianacaminoscano/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin-icon" /></a>
              <a href="https://github.com/lucianatux" target="_blank" rel="noreferrer"><img src={navIcon2} alt="github-icon" /></a>
              <a href="https://www.instagram.com/lucianaholamundo/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="instagram-icon" /></a>
            </div>
            <p>Copyright © 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}