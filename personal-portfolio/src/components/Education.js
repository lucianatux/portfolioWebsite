import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import harvard from "../assets/img/harvard1.png";
import ticmas from "../assets/img/ticmas.png";
import cui from "../assets/img/cui.png";
import conectaempleo from "../assets/img/conectaempleo.png";
import freecodecamp from "../assets/img/freecc.png";
import ap from "../assets/img/ap3.png";
import famaf from "../assets/img/famaf.png";





export const Education = () => {

  const educations = [
    {
        id:1,
      title: "CS50 | Harvard University | 2023",
      description: "Introduction to Game Development",
      imgUrl: harvard,
    },
    {
        id:2,
      title: "Ticmas Academy | 2023",
      description: "Mobile App Development",
      imgUrl: ticmas,
    },
    {
        id:3,
      title: "CUI Centro Universitario de Idiomas | 2022-2023",
      description: "English B2",
      imgUrl: cui,
    },
    {
      id:4,
    title: "Conecta Empleo | 2022",
    description: "Introducción al Diseño de VideoJuegos",
    imgUrl: conectaempleo,
  },
  {
      id:5,
    title: "FreeCodeCamp | 2022",
    description: "Responsive Web Design | Javascript Algorithms and Data Structures | FrontEnd Development Libraries",
    imgUrl: freecodecamp,
  },
  {
      id:6,
    title: "Argentina Programa | 2022",
    description: "Full Stack Development",
    imgUrl: ap,
  },
  {
      id:7,
    title: "FAMAF UNC | 2013-2018",
    description: "Ciencias de la Computación",
    imgUrl: famaf,
  }
  ]
    

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
              <div >
                <h2>Education</h2>
                <div className="educationCard">
                {
                          educations.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}