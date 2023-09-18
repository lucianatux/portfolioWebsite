import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="cardproject">
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h6>{title}</h6>
          <span>{description}</span>
          <button className="proj-link">
          <a href={link}>&rarr;</a>
          </button>
        </div>
        <img src={imgUrl} alt="url" loading="lazy" className="projImg" />
      </div>
      </div>
    </Col>
  )
}