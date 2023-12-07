import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import logo from "../images/web_logo1.png";
import { FaUserTie } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
//import adminIcon from "../images/adminicon.png";

const StudentHeader = () => {
  const teacherName = localStorage.getItem('name');
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <img
        src={logo}
        alt="website logo"
        style={{ width: "5%", height: "5%" }}
      />
      <Container>
        <Navbar.Brand><b>Online-Education</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand>Welcome To Student Portion</Navbar.Brand>
          </Nav>
          <Nav>
            <Dropdown className="d-inline mx-2" autoClose="inside">
              <Dropdown.Toggle id="dropdown-autoclose-inside" variant="secondary">
                <Navbar.Brand>{teacherName}</Navbar.Brand>
                <i>
                  <FaUserTie size={30} color="PeriwinkleBlue" />
                </i>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: "100%" }}>
                <Dropdown.Item><Link exact to="/studentprofile" className="profile-link">Profile</Link></Dropdown.Item>
                <Dropdown.Item><Link exact to="/studentrecord" className="profile-link">Learning</Link></Dropdown.Item>
                <Dropdown.Item><Link exact to="/logout" className="profile-link">Logout</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StudentHeader;
