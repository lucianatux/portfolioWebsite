import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
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
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <div>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h4>FRONTEND</h4>
                                <img src={logohtml} alt="html-logo" />
                                <h5>HTML</h5>
                                <img src={logocss} alt="css-logo" />
                                <h5>CSS</h5>
                                <img src={logobootstrap} alt="bootstrap-logo" />
                                <h5>BOOTSTRAP, ETC</h5>
                            </div>
                            <div className="item">
                                <h4>FRONTEND</h4>
                                <img src={logojavascript} alt="javascript-logo" />
                                <h5>JAVASCRIPT</h5>
                                <img src={logoreact} alt="react-logo" />
                                <h5>REACT</h5>
                                <img src={logoangular} alt="angular-logo" />
                                <h5>ANGULAR</h5>
                            </div>
                            <div className="item">
                            <h4>BACKEND</h4>
                                <img src={logojava} alt="java-logo" />
                                <h5>JAVA</h5>
                                <img src={logospringboot} alt="springboot-logo" />
                                <h5>SPRINGBOOT</h5>
                                <img src={logomysql} alt="mysql-logo" />
                                <h5>MYSQL</h5>
                            </div>
                            <div className="item">
                            <h4>BACKEND</h4>
                                <img src={logokotlin} alt="kotlin-logo" />
                                <h5>KOTLIN</h5>
                                <img src={logoandroid} alt="android-studio-logo" />
                                <h5>ANDROID STUDIO</h5>
                                <img src={logoc} alt="c++logo" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                            <h4>SOFT SKILLS</h4>
                                <img src={logocom} alt="communication" />
                                <h5>COMMUNICATION</h5>
                                <img src={logotw} alt="teamwork" />
                                <h5>TEAMWORK</h5>
                                <img src={logost} alt="self-taught" />
                                <h5>SELF-TAUGHT</h5>
                            </div>
                            <div className="item">
                            <h4>SOFT SKILLS</h4>
                                <img src={logocreat} alt="creativity" />
                                <h5>CREATIVITY</h5>
                                <img src={logologic} alt="logic" />
                                <h5>LOGIC</h5>
                            </div>
                            <div className="item">
                            <h4>OTHERS</h4>
                                <img src={logoeng} alt="english" />
                                <h5>ENGLISH B2</h5>
                                <img src={logogit} alt="git-logo" />
                                <h5>GIT</h5>
                                <img src={logogithub} alt="github-logo" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                            <h4>OTHERS</h4>
                                <img src={logoprem} alt="premiere-logo" />
                                <h5>ADOBE PREMIERE</h5>
                                <img src={logophot} alt="photoshop-logo" />
                                <h5>ADOBE PHOTOSHOP</h5>

                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}