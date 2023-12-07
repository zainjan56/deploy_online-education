import React from "react";
import StudentHeader from "../Student/StudentHeader";
import CourseSidebar from "./CourseSidebar";
import { Link } from "react-router-dom";
import "./TopicOne.css";
//import { useSelector } from "react-redux";

const TopicOne = () => {
  //   const courseName = useSelector((state) => state.cart);
  //   console.log(courseName);
  return (
    <div>
      <StudentHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CourseSidebar />
        <div className="container firstTopic">
        <br />
          <div className="row">
            <div className="col-sm-12">
              <h1>Video Lecture About Variables</h1>
              <div className='videoArea'>
                <iframe
                className="videoFrame"
                width="580"
                height="360"
                src="https://www.youtube.com/embed/Ez1RTEXfLSw"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
            <div className="courseMaterials">
            <h1>C++ Variables</h1>
              <p className="variables-details">Variables are containers for storing data values.</p>
              <h5>In C++, there are different types of variables</h5>
              <ul>
                <li className="variables-details">
                  <b>int: </b>stores integers (whole numbers), without decimals,
                  such as 123 or -123.
                </li>
                <li className="variables-details">
                  <b>double: </b>stores floating point numbers, with decimals,
                  such as 19.99 or -19.99.
                </li>
                <li className="variables-details">
                  <b>char: </b>stores single characters, such as 'a' or 'B'.
                  Char values are surrounded by single quotes.
                </li>
                <li className="variables-details">
                  <b>string: </b>stores text, such as "Hello World". String
                  values are surrounded by double quotes.
                </li>
                <li className="variables-details">
                  <b>bool: </b>stores values with two states: true or false.
                </li>
              </ul>
              <h4>Declaring or Creating Variables</h4>
              <h5>Syntax</h5>
              <p className="variables-details">type variableName = value;</p>
              <p className="variables-details">
                Where type is one of C++ types (such as int), and variableName
                is the name of the variable (such as x or myName). The equal
                sign is used to assign values to the variable.
              </p>
              <Link to='/topictwo'><button className="btn btn-primary">Next</button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicOne;
