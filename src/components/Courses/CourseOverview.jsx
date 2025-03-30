import React from 'react'
import courseImage from './Courses.png' // adjust the path and filename according to your image
import './CourseOverview.css'

const CourseOverview = () => {
  const courseData = {
    title: "Web Development Fundamentals",
    instructor: "John Doe",
    duration: "8 weeks",
    level: "Intermediate",
    image: courseImage,
    sections: [
      {
        id: 1,
        title: "HTML & CSS Basics",
        lessons: 12,
        duration: "2 hours"
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        lessons: 15,
        duration: "2.5 hours"
      },
      {
        id: 3,
        title: "React Basics",
        lessons: 10,
        duration: "1.8 hours"
      }
    ]
  }

  return (
    <div className="course-overview">
      <div className="course-header">
        <div className="course-image-container">
          <img 
            src={courseData.image} 
            alt="Course Overview" 
            className="course-image"
          />
        </div>
        <div className="course-info">
          <h1>{courseData.title}</h1>
          <div className="course-meta">
            <span>Instructor: {courseData.instructor}</span>
            <span>Duration: {courseData.duration}</span>
            <span>Level: {courseData.level}</span>
          </div>
        </div>
      </div>

      <div className="course-sections">
        <h2>Course Content</h2>
        {courseData.sections.map((section) => (
          <div key={section.id} className="section-card">
            <h3>{section.title}</h3>
            <div className="section-details">
              <span>{section.lessons} lessons</span>
              <span>{section.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseOverview
