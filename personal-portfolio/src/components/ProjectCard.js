import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="url" loading="lazy" className="cardImg" />
        <div className="proj-txtx">
          <h6>{title}</h6>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}