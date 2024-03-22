const validateCourseName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Course name is required' });
    }
    next();
  };
  
  const validateCourseDescription = (req, res, next) => {
    const { description } = req.body;
    if (!description || description.trim() === '') {
      return res.status(400).json({ error: 'Course description is required' });
    }
    next();
  };
  
  const validateCourseDifficulty = (req, res, next) => {
    const { difficulty } = req.body;
    if (!difficulty || ['Beginner', 'Intermediate', 'Advanced'].indexOf(difficulty) === -1) {
      return res.status(400).json({ error: 'Course difficulty must be one of: Beginner, Intermediate, Advanced' });
    }
    next();
  };
  
  const validateCourseCost = (req, res, next) => {
    const { cost } = req.body;
    if (!cost || isNaN(cost) || parseFloat(cost) <= 0) {
      return res.status(400).json({ error: 'Course cost must be a positive number' });
    }
    next();
  };
  
  module.exports = {
    validateCourseName,
    validateCourseDescription,
    validateCourseDifficulty,
    validateCourseCost
  };
  