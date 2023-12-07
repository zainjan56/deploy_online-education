import React, { useState } from "react";
import axios from "axios";
import "./CourseUpdate.css";

const CourseUpdate = ({ course, onClose, onUpdate }) => {
  const [updatedData, setUpdatedData] = useState({
    title: course.title,
    instructor: course.instructor,
    topics: course.topics.join(", "),
    description: course.description,
    courseImage: null, // Initialize with null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleImageChange = (e) => {
    setUpdatedData({ ...updatedData, courseImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", updatedData.title);
    formData.append("instructor", updatedData.instructor);
    formData.append("topics", updatedData.topics);
    formData.append("description", updatedData.description);
    formData.append("courseImage", updatedData.courseImage);

    try {
      await axios.put(
        `http://localhost:3001/courses/updatecourse/${course._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onUpdate(course._id, updatedData);
      onClose();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div>
      <h4 className="courseEditTitle">Course Edit Form</h4><br />
      <form className="auth-form CourseformArea" onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <div className="form-group mt-3">
            <label className="courseAddLabel">Course Title</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              name="title"
              placeholder="Course Title"
              alue={updatedData.title}
              onChange={handleInputChange}
              id="mycourseTitle"
            />
          </div>
          <div className="form-group mt-3">
            <label className="courseAddLabel">Instructor Name</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              name="instructor"
              placeholder="Instructor Name"
              value={updatedData.instructor}
              onChange={handleInputChange}
              id="mycourseInstructor"
            />
          </div>
          <div className="form-group mt-3">
            <label className="courseAddLabel">Topics</label>
            <input
              type="text"
              required
              className="form-control mt-1"
              name="topics"
              placeholder="Topics (comma separated)"
              value={updatedData.topics}
              onChange={handleInputChange}
              id="mycourseTopics"
            />
          </div>
          <div className="form-group mt-3">
            <label className="courseAddLabel">Description(1-15 Words)</label>
            <textarea
              type="text"
              required
              className="form-control mt-1"
              name="description"
              placeholder="Course Description"
              value={updatedData.description}
              onChange={handleInputChange}
              id="mycoursedesc"
            />
          </div>
          <div className="form-group mt-3">
            <label className="courseAddLabel">Course Image</label>
            <input
              type="file"
              required
              className="form-control mt-1"
              name="courseImage"
              onChange={handleImageChange}
              id="mycourseImage"
            />
          </div>
          <br></br>
          <button type="submit" className="updateBtn">Update</button>
          <button type="button" onClick={onClose} id="updateClose">
            Cancel
          </button>
        </div>
        <br></br>
      </form>
    </div>
  );
};

export default CourseUpdate;
