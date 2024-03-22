const express = require("express");
const reviews = express.Router();

const {
  getAllReviews,
  getReviewById,
  createReview,
  deleteReviewById,
  updateReviewById,
} = require("../queries/reviews");

reviews.get("/", async (req, res) => {
  try {
    const allReviews = await getAllReviews();
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const review = await getReviewById(id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ error: "Review not found with this ID" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

reviews.post(
  "/",

  async (req, res) => {
    try {
      const newReview = await createReview(req.body);
      res.status(201).json(newReview);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedReview = await updateReviewById(id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await deleteReviewById(id);
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(404).json({ error: "Review not found with this ID" });
  }
});

module.exports = reviews;
