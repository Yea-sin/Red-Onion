import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Food = ({ food }) => {
  console.log(food);
  return (
    <Col>
      <h2>{food.id}</h2>
    </Col>
  );
};

export default Food;
