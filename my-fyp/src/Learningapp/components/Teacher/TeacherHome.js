import React from "react";
import teacherPic from "../images/education11.jpg";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./TeacherHome.css";

const TeacherHome = () => {
  const teacherName = localStorage.getItem("name");
  return (
    <div className="container" style={{ overflow: "auto" }}>
      <div className="row">
        <div className="col-sm-6 teacherColumn">
          <br />
          <br />
          <h2 className="teacher-title">Welcome Dear {teacherName}!</h2>
          <p className="teacher-details">
            Teaching is the profession that teaches all the other professions!
          </p>
          <p className="teacher-request">
            Dear teachers! Please upload your courses here, you are able to see
            registered sudents and progress of students.
          </p>
          <Link to="/taddcourses" className="teacher-btn">
            <button className="teacher-button">Add Course Here</button>
          </Link>
        </div>
        <div className="col-sm-6 teacherColumn">
          <img
            src={teacherPic}
            alt="teacher display"
            className="teacher-display-pic"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 teacher-second">
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="teacher-display-cards">
                <Card.Body>
                  <Card.Title className="teacher-cards-title">Course Adding</Card.Title>
                  <Card.Text>
                    All teachers are able to add their own course. Teachers can add different courses for students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="teacher-display-cards">
                <Card.Body>
                  <Card.Title className="teacher-cards-title">Quiz Adding</Card.Title>
                  <Card.Text>
                  All teachers are able to add their cousre quizz. Teachers can add different quizzes for students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="teacher-display-cards">
                <Card.Body>
                  <Card.Title className="teacher-cards-title">Students List</Card.Title>
                  <Card.Text>
                  All teachers are able to check list of registered students. Teachers can only check student list which are registered.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="teacher-display-cards">
                <Card.Body>
                  <Card.Title className="teacher-cards-title">Students Records</Card.Title>
                  <Card.Text>
                  All teachers are able to check students records. Teachers can can check progress of all students, which they made.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
