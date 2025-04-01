import React from 'react';
import PureCourseCard from './PureCourseCard';
import '../Courses/CourseList.css';

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
        lessons: "12 Lessons(Recorded)",
        features: [
          "Mentor support & Q&A sessions",
          "Resume building & career guidance"
        ],
        buttonText: "Explore Program",
        isHighDemand: true
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
        lessons: "12 Lessons(Recorded)",
        features: [
          "Mentor support & Q&A sessions",
          "Resume building & career guidance"
        ],
        buttonText: "Explore Program",
        isHighDemand: true
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
        lessons: "12 Lessons(Recorded)",
        features: [
          "Mentor support & Q&A sessions",
          "Resume building & career guidance"
        ],
        buttonText: "Explore Program",
        isHighDemand: false
      },
      {
        id: 4,
        title: "Digital Marketing",
        instructor: "Sarah Wilson",
        rating: 4.6,
        students: 10789,
        price: 44.99,
        image: "/src/assets/course4.jpg",
        category: "Marketing",
        duration: "Short-term (1-3 months)",
        lessons: "12 Lessons(Recorded)",
        features: [
          "Mentor support & Q&A sessions",
          "Resume building & career guidance"
        ],
        buttonText: "Explore Program",
        isHighDemand: true
      },
      {
        id: 5,
        title: "Mobile App Development",
        instructor: "Alex Thompson",
        rating: 4.9,
        students: 9876,
        price: 49.99,
        image: "/src/assets/course5.jpg",
        category: "Development",
        duration: "Short-term (1-3 months)",
        lessons: "12 Lessons(Recorded)",
        features: [
          "Mentor support & Q&A sessions",
          "Resume building & career guidance"
        ],
        buttonText: "Explore Program",
        isHighDemand: true
      },
      {
        id: 6,
        title: "Artificial Intelligence & ML",
        instructor: "Emily Chen",
        rating: 4.8,
        students: 7654,
        price: 64.99,
        image: "/src/assets/course6.jpg",
        category: "AI & ML",
        duration: "Short-term (1-3 months)",
        lessons: "12 Lessons(Recorded)",
        features: [
          "Mentor support & Q&A sessions",
          "Resume building & career guidance"
        ],
        buttonText: "Explore Program",
        isHighDemand: true
      }
];

const PureCourseList = () => {
  return (
    <div className='courselist-container'>
          <h2>Master Future-Ready Skills – Your Learning Journey Starts Here!</h2>
          <p>Gain in-demand skills with expert-led courses, hands-on projects, and flexible learning options.</p>
    
    <div className="courses-grid coursegrid">

      {coursesData.map(course => (
        <PureCourseCard key={course.id} course={course} />
      ))}
    </div>
    </div>
  );
};

export default PureCourseList;
