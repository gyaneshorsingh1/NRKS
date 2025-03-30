import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course }) => (
  <div className="course-card">
    <h3>{course.title}</h3>
    <p>Duration: {course.duration}</p>
    <p>Lessons: {course.lessons}</p>
    <p>Rating: ⭐ {course.rating}</p>
    <button className="btn-primary">View Course</button>
  </div>
);

export default CourseCard;
