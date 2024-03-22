\c coursquest_db
 -- change name of db


-- Create your seedfiles here using SQL -  INSERT INTO() VALUES()
-- Inserting user data
INSERT INTO users (name, email, is_faculty)
VALUES 
('John Doe', 'john@example.com', false),
('Jane Smith', 'jane@example.com', true);

-- Inserting course data
INSERT INTO courses (user_id, name, subject, description, professor, image_url, start_date, end_date, difficulty, cost)
VALUES 
(1, 'Introduction to Programming', 'Computer Science', 'Learn the basics of programming.', 'Dr. Smith', 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,w_200,h_200/v1711049845/images_x0nve1.jpg', '2024-01-01', '2024-03-01', 'Beginner', 0.00),
(1, 'Data Science Fundamentals', 'Data Science', 'Explore the world of data science.', 'Prof. Johnson', 'https://res.cloudinary.com/dluexpyt4/image/upload/v1711049998/images_msnikf.jpg', '2024-02-01', '2024-04-01', 'Intermediate', 29.99),
(NULL, 'Web Development Fundamentals', 'Computer Science', 'Introduction to web development concepts.', 'Dr. Brown', 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,w_200,h_200/v1711049845/images_x0nve1.jpg', '2024-03-01', '2024-05-01', 'Beginner', 0.00),
(NULL, 'Machine Learning Basics', 'Machine Learning', 'An introductory course to machine learning.', 'Prof. Lee', 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,w_200,h_200/v1711049745/machine_learning_umt76d.jpg', '2024-04-01', '2024-06-01', 'Intermediate', 49.99),
(NULL, 'Digital Marketing Essentials', 'Marketing', 'Fundamentals of digital marketing strategies.', 'Dr. White', 'https://res.cloudinary.com/dluexpyt4/image/upload/v1711049998/images_msnikf.jpg', '2024-05-01', '2024-07-01', 'Beginner', 19.99),
(1, 'Introduction to Drawing', 'Art', 'Learn the basics of drawing.', 'Prof. Davis', 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,w_200,h_200/v1711050617/pie5jenjmkftcn01zkaj.jpg', '2024-06-01', '2024-08-01', 'Beginner', 0.00),
(1, 'Art History', 'Art', 'Explore the history of art from ancient times to the present.', 'Dr. Rodriguez', 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,w_200,h_200/v1711050617/pie5jenjmkftcn01zkaj.jpg', '2024-07-01', '2024-09-01', 'Intermediate', 39.99),
(1, 'Photography Basics', 'Art', 'Introduction to the basics of photography.', 'Prof. Martinez', 'https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,w_200,h_200/v1711050617/pie5jenjmkftcn01zkaj.jpg', '2024-08-01', '2024-10-01', 'Beginner', 29.99);

-- Inserting reviews data
INSERT INTO reviews (user_id, course_id, rating, review)
VALUES 
(1, 1, 5, 'Great course! I learned a lot.'),
(1, 2, 4, 'Enjoyed the content, but could use more exercises.'),
(1, 3, 4, 'Great introduction to web development.'),
(1, 4, 5, 'Excellent course on machine learning concepts.'),
(1, 5, 3, 'Informative content, but could use more practical examples.'),
(1, 6, 4, 'Great course! Covers the basics of drawing thoroughly.'),
(1, 7, 5, 'Fascinating exploration of art history.'),
(1, 8, 4, 'Enjoyed learning photography basics with this course.');
