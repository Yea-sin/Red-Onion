import React from "react";
import "./Header.css";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img
                src="https://i.ibb.co/VSX51yb/logo2.png"
                width="100"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="active-area">
                <h3>
                  <BsFillCartFill />
                </h3>
                <h5>
                  <NavLink activeClassName="active" to="/login">
                    Login
                  </NavLink>
                </h5>
                <h5>
                  <NavLink activeClassName="active" to="/singup">
                    Sing Up
                  </NavLink>
                </h5>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
