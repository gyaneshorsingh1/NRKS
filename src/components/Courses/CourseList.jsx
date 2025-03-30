import React from "react";
import "./CourseList.css";
import CourseCard from "./CourseCard";

const courses = [
  { id: 1, title: "UI/UX Designing", duration: "1-3 months", lessons: 12, rating: 4.5 },
  { id: 2, title: "UI/UX Designing", duration: "1-3 months", lessons: 12, rating: 4.5 },
  { id: 3, title: "UI/UX Designing", duration: "1-3 months", lessons: 12, rating: 4.5 },
  { id: 4, title: "UI/UX Designing", duration: "1-3 months", lessons: 12, rating: 4.5 }
];

const CourseList = () => (
  <section className="course-list">
    {courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ))}
  </section>
);

export default CourseList;
