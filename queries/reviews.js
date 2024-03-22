const db = require("../db/dbconfig");

const getAllReviews = async () => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews");
    return allReviews;
  } catch (error) {
    return error;
  }
};

const getReviewById = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

const createReview = async (reviews) => {
  const { user_id, course_id, rating, review } = reviews;
  try {
    const newReview = await db.one(
      "INSERT INTO Reviews (user_id, course_id, rating, review) VALUES($1, $2, $3, $4) RETURNING *",
      [user_id, course_id, rating, review]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const deleteReviewById = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM Reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

const updateReviewById = async (id, reviews) => {
  const { user_id, course_id, rating, review } = reviews;
  try {
    const updatedReview = await db.one(
      "UPDATE Reviews SET user_id=$1, course_id=$2, rating=$3,  review=$4 WHERE id=$5 RETURNING *",
      [user_id, course_id, rating, review, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  deleteReviewById,
  updateReviewById,
};
