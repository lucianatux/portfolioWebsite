import { Container, Row, Col } from "react-bootstrap";
import { DoubleCard } from "./DoubleCard";
import freelance from "../assets/img/freelance1.png";
import sales from "../assets/img/sales1.png";
import video from "../assets/img/video.png";



export const Experience = () => {

  const experiences = [
    {
        id:1,
      title: "Freelance Web Developer | 2023",
      description: "Web Development",
      imgUrl: freelance,
    },
    {
        id:2,
      title: "Distribuidora Lyra | 2005-2023",
      description: "Web Design | Marketing | Distribution | Sales",
      imgUrl: sales,
    },
    {
        id:3,
      title: "Caminos SRL | 1998-2001",
      description: "Video production and editing services",
      imgUrl: video,
    }
  ]
    

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Experience</h2>
                <div className="experienceCard">
                {
                          experiences.map((project, index) => {
                            return (
                              <DoubleCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}