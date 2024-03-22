const express = require("express");
const users = express.Router();

const { getAllUsers, getUserById } = require("../queries/users");
const { getAllCourses } = require("../queries/course");

users.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allCourses = await getAllCourses();
    const user = await getUserById(id);
    const filteredCourses = allCourses.filter(
      (course) => user.id === course.user_id
    );
    if (user) {
      res.status(200).json({ ...user, filteredCourses });
    } else {
      res.status(404).json({ error: "User not found with this ID" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = users;
