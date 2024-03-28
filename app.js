const express = require("express");
const cors = require("cors");
const cron = require('node-cron')

const app = express();

const courseController = require("./controllers/courseController");
const reviewController = require("./controllers/reviewsController");
const userController = require("./controllers/usersController");

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseController);
app.use("/api/reviews", reviewController);
app.use("/api/users", userController);

app.use(cors())
app.use(express.json())

cron.schedule('*/10 * * * *', () => {
  const currentTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
  })
  console.log(`Running a task every 10 minutes. Current time: ${currentTime}`)
})

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
