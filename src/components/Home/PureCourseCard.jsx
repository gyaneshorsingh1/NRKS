import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'

const PureCourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="course-category">{course.category}</div>
      </div>
      <div className="course-content">
        <div className="course-header">
          <h3 className="course-title">{course.title}</h3>
          <div className="course-rating">
            <AiFillStar className="star-icon" />
            {course.rating}
          </div>
        </div>
        <ul className="course-info-list">
          <li>{course.duration}</li>
          <li>{course.lessons}</li>
        </ul>
        <div className="course-features">
          {course.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <FaCheck className="check-icon" />
              {feature}
            </div>
          ))}
        </div>
        <div className="card-footer">
          <button className="start-learning-btn">{course.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default PureCourseCard
