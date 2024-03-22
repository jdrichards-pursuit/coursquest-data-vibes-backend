const validateReviewRating = (req, res, next) => {
  const { rating } = req.body;
  if (typeof +rating !== "number" || +rating < 1 || +rating > 5) {
    return res
      .status(400)
      .json({ error: "Rating must be a number between 1 and 5" });
  }
  next();
};

module.exports = { validateReviewRating };
