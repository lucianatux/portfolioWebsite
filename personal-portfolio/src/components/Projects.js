import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projAndroid from "../assets/img/projAndroid.png";
import projLyra from "../assets/img/projLyra.png";
import projBotonera from "../assets/img/proyBotonera.png";
import projCalcul from "../assets/img/projCalcul.png";
import projFrontera from "../assets/img/projFrontera2.png";
import projSimulador from "../assets/img/proj-simulador.png";
import projAp2 from "../assets/img/projAp2.png";
import projVoz from "../assets/img/projVoz.png";
import projGastos from "../assets/img/projGastos.png";
import projArbol from "../assets/img/projArbol.png";
import projTateti from "../assets/img/projTateti.png";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {

  const projects2023a = [
    {
        id:1,
      title: "Comparator",
      description: "KOTLIN | ANDROID STUDIO",
      imgUrl: projAndroid,
      link: "https://github.com/lucianatux/ticmas-lab-android",
    },
    {
        id:3,
      title: "Drum Machine",
      description: "REACT JAVASCRIPT",
      imgUrl: projBotonera,
      link: "https://lucianatux.github.io/DrumMachine/",
    },
    {
        id:4,
      title: "Calculator",
      description: "REACT JAVASCRIPT",
      imgUrl: projCalcul,
      link: "https://lucianatux.github.io/Calculator/",
    },
    {
        id:6,
      title: "Simulator. Educational Game",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projSimulador,
      link: "https://lucianatux.github.io/simulador/",
    },
  ];
  const projects2023b = [
    {
      id:2,
    title: "Lyra Website. Product Catalog",
    description: "HTML CSS JAVASCRIPT",
    imgUrl: projLyra,
    link:"https://lucianatux.github.io/Lyra/",
  },
    {
      id:5,
      title: "Cross the border. Online Game",
      description: "HTML CSS JAVASCRIPT",
    imgUrl: projFrontera,
    link: "https://lucianatux.github.io/JuegoCruzarLaFrontera/",
  },
    {
      id:12,
    title: "Text-to-speech converter",
    description: "HTML CSS JAVASCRIPT",
    imgUrl: projVoz,
    link: "https://lucianatux.github.io/appTextoaVoz/",
  },
  {
      id:13,
    title: "Expense Management App",
    description: "HTML CSS JAVASCRIPT",
    imgUrl: projGastos,
    link: "https://lucianatux.github.io/EcoFortuna/",
  },
  ];

  const projects2022 = [
    {
        id:11,
      title: "Portfolio Argentina Programa",
      description: "TYPESCRIPT ANGULAR JAVA SPRINGBOOT MYSQL",
      imgUrl: projAp2,
      link: "https://frontendlcc.web.app/",
    },
    {
        id:14,
      title: "Tree of Life website",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projArbol,
      link: "https://lucianatux.github.io/arbolDeLaVida/",
    },
    {
        id:15,
      title: "Tateti game",
      description: "HTML CSS JAVASCRIPT",
      imgUrl: projTateti,
      link: "https://lucianatux.github.io/Tateti/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div >
                <h2>Projects</h2>
                <p>Some of my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav className="nav-tabs mb-5 justify-content-center align-items-center" id="tabs-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">2023</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2023</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">2022</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                      <div className="divprojectcard">
                      {
                          projects2023a.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    <div className="divprojectcard">
                      {
                          projects2023b.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="divprojectcard">
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
                        </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}