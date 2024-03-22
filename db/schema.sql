DROP DATABASE IF EXISTS coursquest_db; -- change name of db
CREATE DATABASE coursquest_db; -- change name of db

\c coursquest_db;
 -- change name of db

-- Create your tables here

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50),
  is_faculty BOOLEAN DEFAULT FALSE
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  name VARCHAR(50),
  subject VARCHAR(30),
  description TEXT,
  professor VARCHAR(50),
  image_url VARCHAR(255),
  start_date DATE,
  end_date DATE,
  difficulty VARCHAR(20),
  cost DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  course_id INTEGER,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  review TEXT,
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (course_id) REFERENCES Courses(id)
);
