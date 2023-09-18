import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={4} md={2}>
      <div className="cardproject">
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h6>{title}</h6>
          <span>{description}</span>
          <br/>
          <button className="proj-link">
          <a className="arrowlink" href={link} rel="noreferrer" target="_blank">&rarr;</a>
          </button>
        </div>
        <img src={imgUrl} alt="url" loading="lazy" className="projImg" />
      </div>
      </div>
    </Col>
  )
}