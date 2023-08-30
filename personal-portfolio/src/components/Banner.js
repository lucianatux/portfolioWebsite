import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  
  useEffect(() => {
    let ticker = setInterval(() => {
    }, );

    return () => { clearInterval(ticker) };
  }, [])
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}