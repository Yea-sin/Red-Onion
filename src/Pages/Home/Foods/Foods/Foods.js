import React, { useState } from "react";
import "./Foods.css";
import { Row, Container } from "react-bootstrap";
import useFoods from "../../../../Hooks/useFoods";
import Food from "../Food/Food";

const Foods = () => {
  const [menu, setMenu] = useState("breakfast");
  const [foods] = useFoods();
  const handleFoods = (type) => {
    setMenu(type);
  };
  return (
    <div>
      <div className="menu-btn d-flex justify-content-center">
        <p onClick={() => handleFoods("breakfast")}>Breakfast</p>
        <p onClick={() => handleFoods("lunch")}>Lunch</p>
        <p onClick={() => handleFoods("dinner")}>Dinner</p>
      </div>
      <div className="mt-4 mb-5">
        <Container>
          <Row lg={3} md={3} sm={1} className="g-5">
            {foods
              .filter((item) => item.type === menu)
              .map((food) => (
                <Food food={food}></Food>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Foods;
