import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logoandroid from "../assets/img/androidstudio65.png";
import logoangular from "../assets/img/angular65.png";
import logohtml from "../assets/img/html85.png";
import logocss from "../assets/img/css95.png";
import logobootstrap from "../assets/img/bootstrap85.png";
import logoreact from "../assets/img/react75.png";
import logojavascript from "../assets/img/javascript75.png";
import logokotlin from "../assets/img/kotlin65.png";
import logojava from "../assets/img/java65.png";
import logospringboot from "../assets/img/springboot65.png";
import logomysql from "../assets/img/mysql75.png";
import logoc from "../assets/img/c65.png";
import logocom from "../assets/img/comm95.png";
import logologic from "../assets/img/logic95.png";
import logocreat from "../assets/img/creat95.png";
import logotw from "../assets/img/tw95.png";
import logost from "../assets/img/st95.png";
import logoeng from "../assets/img/english85.png";
import logogit from "../assets/img/git75.png";
import logogithub from "../assets/img/github75.png";
import logoprem from "../assets/img/premiere85.png";
import logophot from "../assets/img/photoshop85.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
        <h2>Skills</h2>
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <div>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <h4>FRONTEND</h4>
                    <img src={logohtml} alt="html-logo" />
                    <p>HTML</p>
                    <img src={logocss} alt="css-logo" />
                    <p>CSS</p>
                    <img src={logobootstrap} alt="bootstrap-logo" />
                    <p>BOOTSTRAP, ETC</p>
                  </div>
                  <div className="item">
                    <h4>FRONTEND</h4>
                    <img src={logojavascript} alt="javascript-logo" />
                    <p>JAVASCRIPT</p>
                    <img src={logoreact} alt="react-logo" />
                    <p>REACT</p>
                    <img src={logoangular} alt="angular-logo" />
                    <p>ANGULAR</p>
                  </div>
                  <div className="item">
                    <h4>BACKEND</h4>
                    <img src={logojava} alt="java-logo" />
                    <p>JAVA</p>
                    <img src={logospringboot} alt="springboot-logo" />
                    <p>SPRINGBOOT</p>
                    <img src={logomysql} alt="mysql-logo" />
                    <p>MYSQL</p>
                  </div>
                  <div className="item">
                    <h4>BACKEND</h4>
                    <img src={logokotlin} alt="kotlin-logo" />
                    <p>KOTLIN</p>
                    <img src={logoandroid} alt="android-studio-logo" />
                    <p>ANDROID STUDIO</p>
                    <img src={logoc} alt="c++logo" />
                    <p>C++</p>
                  </div>
                  <div className="item">
                    <h4>SOFT SKILLS</h4>
                    <img src={logocom} alt="communication" />
                    <p>COMMUNICATION</p>
                    <img src={logotw} alt="teamwork" />
                    <p>TEAMWORK</p>
                    <img src={logost} alt="self-taught" />
                    <p>SELF-TAUGHT</p>
                  </div>
                  <div className="item">
                    <h4>SOFT SKILLS</h4>
                    <img src={logocreat} alt="creativity" />
                    <p>CREATIVITY</p>
                    <img src={logologic} alt="logic" />
                    <p>LOGIC</p>
                  </div>
                  <div className="item">
                    <h4>OTHERS</h4>
                    <img src={logoeng} alt="english" />
                    <p>ENGLISH B2</p>
                    <img src={logogit} alt="git-logo" />
                    <p>GIT</p>
                    <img src={logogithub} alt="github-logo" />
                    <p>GITHUB</p>
                  </div>
                  <div className="item">
                    <h4>OTHERS</h4>
                    <img src={logoprem} alt="premiere-logo" />
                    <p>ADOBE PREMIERE</p>
                    <img src={logophot} alt="photoshop-logo" />
                    <p>ADOBE PHOTOSHOP</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
