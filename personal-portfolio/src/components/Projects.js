import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projAndroid from "../assets/img/projAndroid.png";
import projLyra from "../assets/img/projLyra.png";
import projBotonera from "../assets/img/proyBotonera.png";
import projCalcul from "../assets/img/projCalcul.png";
import projFrontera from "../assets/img/projFrontera2.png";
import projSimulador from "../assets/img/proj-simulador.png";
//import projAp1 from "../assets/img/projAp1.png";
import projAp2 from "../assets/img/projAp2.png";
import projVoz from "../assets/img/projVoz.png";
import projGastos from "../assets/img/projGastos.png";
import projArbol from "../assets/img/projArbol.png";
import projTateti from "../assets/img/projTateti.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {

  const projects = [
    {
        id:1,
      title: "Comparator",
      description: "KOTLIN | ANDROID STUDIO",
      imgUrl: projAndroid,
    },
    {
        id:2,
      title: "Lyra Website. Product Catalog",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projLyra,
    },
    {
        id:3,
      title: "Drum Machine",
      description: "REACT JAVASCRIPT",
      imgUrl: projBotonera,
    },
    {
        id:4,
      title: "Calculator",
      description: "REACT JAVASCRIPT",
      imgUrl: projCalcul,
    },
    {
        id:5,
        title: "Cross the border. Online Game",
        description: "HTML CSS JAVASCRIPT",
      imgUrl: projFrontera,
    },
    {
        id:6,
      title: "Simulator. Educational Game",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projSimulador,
    },
  ];

  const projects2022 = [
    {
        id:11,
      title: "PortfolioArgentinaPrograma",
      description: "TYPESCRIPT ANGULAR JAVA SPRINGBOOT MYSQL",
      imgUrl: projAp2,
    },
    {
        id:12,
      title: "Text-to-speech converter",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projVoz,
    },
    {
        id:13,
      title: "Expense Management App",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projGastos,
    },
    {
        id:14,
      title: "Tree of Life website",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projArbol,
    },
    {
        id:15,
      title: "Tateti game",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projTateti,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div >
                <h2>Projects</h2>
                <p>Web Developer - Game Developer</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">2023</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2022</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">2021</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                      {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      {
                          projects2022.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background right"></img>
    </section>
  )
}