import React from "react";
import "./Food.css";
import { Col, Button } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";

const Food = ({ food }) => {
  console.log(food);
  const { img, title, price, descriptionSm } = food;
  return (
    <Col>
      <div className="p-5 food-item">
        <div>
          <img src={img} className="img-fluid rounded-circle" alt="" />
        </div>
        <h4 className="text-nowrap mt-3">{title}</h4>
        <small className="text-secondary">{descriptionSm}</small>
        <h4 className="fw-bold">${price}</h4>
        <div className="d-flex ms-4">
          <Button variant="outline-secondary" className="me-2">
            Add to cart
            <BsFillCartFill className="ms-1" />
          </Button>
          <Button variant="outline-secondary">Details</Button>
        </div>
      </div>
    </Col>
  );
};

export default Food;
