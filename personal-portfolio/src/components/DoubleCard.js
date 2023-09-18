import { Col } from "react-bootstrap";

export const DoubleCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="doublecard">
      <div className="card-imgbx">
        <img src={imgUrl} alt="url" loading="lazy" className="cardImg" />
        <div className="card-txtx">
          <h6>{title}</h6>
          <span>{description}</span>
        </div>
      </div>
      </div>
    </Col>
  )
}