const express = require("express");
const cors = require("cors");

const app = express();

const courseController = require("./controllers/courseController");

app.use(cors());
app.use(express.json());


app.use("/api/courses", courseController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to CoursQuest App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
