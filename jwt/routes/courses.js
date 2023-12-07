const express = require("express");
const multer = require("multer");
const path = require("path");
const { courseValidation } = require("./validation");
const router = express.Router();
const Course = require("../models/Courses");

// Set up multer storage for course images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

//router.use('/uploads', express.static('uploads'));

// API endpoint to add a new course
router.post("/addcourse", upload.single("courseImage"), async (req, res) => {
  try {
    const { title, instructor, topics, description } = req.body;
    const { error } = courseValidation(req.body);
    if (error) return res.send(error.details[0].message);

    const topicsArray = topics.split(",").map((topic) => topic.trim()); // Convert comma-separated string to an array

    const findCourse = await Course.findOne({
      title: req.body.title,
    });
    if (findCourse) return res.status(400).send("Course is already registerd!");

    const imagePath = req.file.filename;

    const newCourse = new Course({
      title,
      instructor,
      topics: topicsArray,
      description,
      imagePath,
    });
    await newCourse.save();

    res.status(201).json({
      course: newCourse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// To get all courses
router.get("/addcourse", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// To delete course
router.delete("/deletecourse/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Use findByIdAndDelete to remove the course by its ID
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// To update the course
// In your server file (e.g., courses.js)
router.put(
  "/updatecourse/:id",
  upload.single("courseImage"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const updatedCourseData = req.body;

      // Handle updating course image if provided
      if (req.file) {
        updatedCourseData.imagePath = req.file.filename;
      }

      // Convert topics string to array
      updatedCourseData.topics = updatedCourseData.topics
        .split(", ")
        .map((topic) => topic.trim());

      // Use findByIdAndUpdate to update the course by its ID
      const updatedCourse = await Course.findByIdAndUpdate(
        id,
        updatedCourseData,
        { new: true }
      );

      if (!updatedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.json(updatedCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }
);

// Define a route to get a specific course by ID
router.get('/addcourse/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
