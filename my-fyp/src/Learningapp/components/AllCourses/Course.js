import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StudentHeader from "../Student/StudentHeader";
import CourseSidebar from "./CourseSidebar";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import quizpic from "../images/quiz4.png";
import "./Course.css";

const Course = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the course ID from the URL parameter
  const [course, setCourse] = useState({});

  useEffect(() => {
    // Fetch the specific course's details based on the course ID
    axios
      .get(`https://deploy-online-education.vercel.app/courses/addcourse/${id}`)
      .then((response) => {
        setCourse(response.data);
        dispatch(cartActions.addItemToCart(response.data));
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id, dispatch]);

  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CourseSidebar />
        <div className="container courseCont">
          <br />
          <div className="row">
            <div className="col-sm-8 selectedCourse">
              <h1>{course.title} Tutorial</h1>
              <div className="cplusdetails">
                <h4 className="cpluscontent">Learn C++</h4>
                <p className="cpluscontent">
                  C++ is a popular programming language. C++ is used to create
                  computer programs, and is one of the most used language in
                  game development.
                </p>
                <br />
                <Link to='/topicone'><button className="btn btn-primary starting-btn-cplus">Start Learning C++ now</button></Link>
              </div>
            </div>
            <div className="col-sm-4 selectedCourse">
              <div className="circleprogress">
                {/* <CircularProgressbar value={quizScore} text={`${quizScore}%`} /> */}
                <h1>{course.title} Quiz</h1>
                <div className="quiz-area">
                <img src={quizpic} alt="myquiz" className="quiz-pic"/>
                </div>
                <Link className="nav-link" to="/quizhome"><button className="btn btn-primary quiz-btn">Take a Quiz</button></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2>C++ Introduction</h2>
              <h5>What is C++?</h5>
              <p className="cplus-course-details">
                C++ is a cross-platform language that can be used to create
                high-performance applications. C++ was developed by Bjarne
                Stroustrup, as an extension to the C language. C++ gives
                programmers a high level of control over system resources and
                memory. The language was updated 4 major times in 2011, 2014,
                2017, and 2020 to C++11, C++14, C++17, C++20.
              </p>
              <h5>Why Use C++</h5>
              <p className="cplus-course-details">
                C++ is one of the world's most popular programming languages.
                C++ can be found in today's operating systems, Graphical User
                Interfaces, and embedded systems. C++ is an object-oriented
                programming language which gives a clear structure to programs
                and allows code to be reused, lowering development costs. C++ is
                portable and can be used to develop applications that can be
                adapted to multiple platforms. C++ is fun and easy to learn! As
                C++ is close to C, C# and Java, it makes it easy for programmers
                to switch to C++ or vice versa.
              </p>
              <h5>Difference between C and C++</h5>
              <p className="cplus-course-details">
                C++ was developed as an extension of C, and both languages have
                almost the same syntax. The main difference between C and C++ is
                that C++ support classes and objects, while C does not.
              </p>
              <h5>Get Started</h5>
              <p className="cplus-course-details">This tutorial will teach you the basics of C++.</p>
              <Link to='/topicone'><button className="btn btn-primary">Get Started</button></Link><br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
