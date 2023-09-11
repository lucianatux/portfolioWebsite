import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/tierra2.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["I'm Luciana"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row >
          <Col xs={12} md={6} xl={7} className="presentation">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hello World! `}
                <br/>
                <span
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "I am Luciana"]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <h3>Web Developer | Game Developer</h3>
              <a href="#connect" className="contactme">
                <button onClick={() => console.log("connect")}>
                  Contact me <ArrowRightCircle size={25} />
                </button>
              </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="headerimg">
              <img src={headerImg} alt="Header Img" loading="lazy"/>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};
