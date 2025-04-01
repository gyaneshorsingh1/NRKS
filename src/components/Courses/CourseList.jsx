import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.css';

const coursesData = [
  {
    id: 1,
    title: "UI/UX Designing",
    instructor: "John Doe",
    rating: 4.8,
    students: 15234,
    price: 49.99,
    image: "/src/assets/course1.jpg",
    category: "Design",
    duration: "Short-term (1-3 months)",
    lessons: "12 Lessons (Recorded)",
    features: ["Mentor support & Q&A sessions", "Resume building & career guidance"],
    buttonText: "Start Learning"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    instructor: "Jane Smith",
    rating: 4.9,
    students: 12345,
    price: 59.99,
    image: "/src/assets/course2.jpg",
    category: "Web Development",
    duration: "Short-term (1-3 months)",
    lessons: "12 Lessons (Recorded)",
    features: ["Mentor support & Q&A sessions", "Resume building & career guidance"],
    buttonText: "Start Learning"
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    instructor: "Mike Johnson",
    rating: 4.7,
    students: 8567,
    price: 54.99,
    image: "/src/assets/course3.jpg",
    category: "Data Science",
    duration: "Short-term (1-3 months)",
    lessons: "12 Lessons (Recorded)",
    features: ["Mentor support & Q&A sessions", "Resume building & career guidance"],
    buttonText: "Start Learning"
  }
];

const CourseList = () => {
  return (
    <div className="courses-grid">
      {coursesData.map(course => (
        <CourseCard ky={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
