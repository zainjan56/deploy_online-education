import React, { useState } from "react";
import axios from "axios";
import TeacherHeader from "../Teacher/TeacherHeader";
import TeacherSidebar from "../Teacher/TeacherSidebar";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import "./AddQuiz.css";

const AddQuiz = () => {
  const [formData, setFormData] = useState({
    question: "",
    options: "",
    correctAnswer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "options") {
      // Split the comma-separated string into an array
      const optionsArray = value.split(",");
      setFormData({
        ...formData,
        [name]: optionsArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://deploy-online-education.vercel.app/quiz/createquiz", formData) // Use Axios to make a POST request
      .then((response) => {
        console.log(response.data);
        // Clear the form or provide user feedback
        NotificationManager.success(
          `${response.data.message}`,
          "",
          3000
        );
        setFormData({
          question: "",
          options: "",
          correctAnswer: "",
        });
      })
      .catch((error) => {
        //console.error(error);
        NotificationManager.error(error.response.data, "", 3000);
      });
  };
  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
      <div className="container" style={{overflowY:"auto"}}>
        <br></br>
        <div className="col-sm-12">
          <div className="row">
            <div className="Auth-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <h3>Quiz Adding Form</h3>
                </div>
                <div className="form-group mt-3">
                  <label>Questions</label>
                  <input
                    className="form-control mt-1"
                    required
                    type="text"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Options (comma-separated)</label>
                  <input
                    type="text"
                    required
                    className="form-control mt-1"
                    name="options"
                    value={formData.options}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Correct Answer</label>
                  <input
                    type="text"
                    required
                    className="form-control mt-1"
                    name="correctAnswer"
                    value={formData.correctAnswer}
                    onChange={handleChange}
                  />
                </div>
                <div className="gap-2 mt-3">
                <button type="submit" className="quizz-add-btn">Add Quiz</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
