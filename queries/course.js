const db = require('../db/dbconfig');

const getAllCourses = async () => {
  try {
    const allCourses = await db.any('SELECT * FROM courses');
    return allCourses;
  } catch (error) {
    return error;
  }
};

const getCourseById = async (id) => {
  try {
    const oneCourse = await db.one('SELECT * FROM courses WHERE id=$1', id);
    return oneCourse;
  } catch (error) {
    return error;
  }
};

const createCourse = async (course) => {
  const { name, subject, description, professor, image_url, start_date, end_date, difficulty, cost } = course;
  try {
    const newCourse = await db.one(
      'INSERT INTO courses (name, subject, description, professor, image_url, start_date, end_date, difficulty, cost) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, subject, description, professor, image_url, start_date, end_date, difficulty, cost]
    );
    return newCourse;
  } catch (error) {
    return error;
  }
};

const deleteCourseById = async (id) => {
  try {
    const deletedCourse = await db.one(
      'DELETE FROM courses WHERE id = $1 RETURNING *',
      id
    );
    return deletedCourse;
  } catch (error) {
    return error;
  }
};

const updateCourseById = async (id, course) => {
  const { name, subject, description, professor, image_url, start_date, end_date, difficulty, cost } = course;
  try {
    const updatedCourse = await db.one(
      'UPDATE courses SET name=$1, subject=$2, description=$3, professor=$4, image_url=$5, start_date=$6, end_date=$7, difficulty=$8, cost=$9 WHERE id=$10 RETURNING *',
      [name, subject, description, professor, image_url, start_date, end_date, difficulty, cost, id]
    );
    return updatedCourse;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourseById,
  updateCourseById
};
