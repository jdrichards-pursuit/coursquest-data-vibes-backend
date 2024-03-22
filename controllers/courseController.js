const express = require("express");
const courses = express.Router();

const { 
  getAllCourses, 
  getCourseById, 
  createCourse,
  updateCourseById,
  deleteCourseById,
} = require('../queries/course');

const { 
  validateCourseName,
  validateCourseDescription,
  validateCourseDifficulty,
  validateCourseCost
} = require("../validations/checkCourse");

courses.get("/", async (req, res) => {
  try {
    const allCourses = await getAllCourses();
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

courses.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await getCourseById(id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found with this ID' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

courses.post('/', validateCourseName, validateCourseDescription, validateCourseDifficulty, validateCourseCost, async (req, res) => {
  try {
    const newCourse = await createCourse(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

courses.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCourse = await updateCourseById(id, req.body);
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

courses.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCourse = await deleteCourseById(id);
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(404).json({ error: 'Course not found with this ID' });
  }
});

module.exports = courses;
