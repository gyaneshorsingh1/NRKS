import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaFire, FaBriefcase, FaSearch, FaTimes, FaCheck } from 'react-icons/fa'
import './Courses.css'
import CourseHero from '../HeroSection/CourseHero'
import CallToAction from '../CallToAction/CallToAction'

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showHighDemand, setShowHighDemand] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('')

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
      buttonText: "Start Learning",
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
      buttonText: "Start Learning",
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
      buttonText: "Start Learning",
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
      buttonText: "Start Learning",
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
      buttonText: "Start Learning",
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
      buttonText: "Start Learning",
      isHighDemand: true
    },
    {
      id: 7,
      title: "Cloud Computing AWS",
      instructor: "David Brown",
      rating: 4.5,
      students: 11234,
      price: 54.99,
      image: "/src/assets/course7.jpg",
      category: "Cloud Computing",
      duration: "Short-term (1-3 months)",
      lessons: "12 Lessons(Recorded)",
      features: [
        "Mentor support & Q&A sessions",
        "Resume building & career guidance"
      ],
      buttonText: "Start Learning",
      isHighDemand: false
    },
    {
      id: 8,
      title: "Cybersecurity Fundamentals",
      instructor: "Lisa Anderson",
      rating: 4.7,
      students: 6789,
      price: 59.99,
      image: "/src/assets/course8.jpg",
      category: "Security",
      duration: "Short-term (1-3 months)",
      lessons: "12 Lessons(Recorded)",
      features: [
        "Mentor support & Q&A sessions",
        "Resume building & career guidance"
      ],
      buttonText: "Start Learning",
      isHighDemand: true
    },
    {
      id: 9,
      title: "Blockchain Development",
      instructor: "Robert Martinez",
      rating: 4.6,
      students: 13456,
      price: 69.99,
      image: "/src/assets/course9.jpg",
      category: "Blockchain",
      duration: "Short-term (1-3 months)",
      lessons: "12 Lessons(Recorded)",
      features: [
        "Mentor support & Q&A sessions",
        "Resume building & career guidance"
      ],
      buttonText: "Start Learning",
      isHighDemand: false
    },
    {
      id: 10,
      title: "DevOps Engineering",
      instructor: "Chris Taylor",
      rating: 4.8,
      students: 8901,
      price: 59.99,
      image: "/src/assets/course10.jpg",
      category: "DevOps",
      duration: "Short-term (1-3 months)",
      lessons: "12 Lessons(Recorded)",
      features: [
        "Mentor support & Q&A sessions",
        "Resume building & career guidance"
      ],
      buttonText: "Start Learning",
      isHighDemand: true
    }
  ]

  // Get unique categories from courses
  const categories = [...new Set(coursesData.map(course => course.category))]

  // Filter and sort courses
  const getFilteredCourses = () => {
    let filtered = [...coursesData]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // High demand filter
    if (showHighDemand) {
      filtered = filtered.filter(course => course.isHighDemand)
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        filtered.sort((a, b) => b.students - a.students)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }

  const filteredCourses = getFilteredCourses()

  return (
    <div className="courses-section">
      <div className='course-hero-section'>
            <CourseHero />
        </div>
      <div className="content-wrapper">
        
        <div className="courses-header">
          <div className="header-top">
            <div className="header-left">
              <h2>New Arrivals <span className="course-count">({filteredCourses.length})</span></h2>
              <div className="course-badges">
                <span className="badge placement-badge">
                  <FaBriefcase />
                  Placement Support
                </span>
                <span 
                  className={`badge demand-badge ${showHighDemand ? 'active' : ''}`}
                  onClick={() => setShowHighDemand(!showHighDemand)}
                  role="button"
                  tabIndex={0}
                >
                  <FaFire />
                  High Demand
                </span>
              </div>
            </div>
            
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search courses..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          <div className="courses-filters">
            <select 
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select 
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
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
                    <div className="course-price">
                      <span className="price-amount">${course.price}</span>
                    </div>
                    <button className="start-learning-btn">
                      {course.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No courses found</h3>
              <p>Try adjusting your filters or search criteria</p>
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('')
                  setSortBy('')
                  setShowHighDemand(false)
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='callToAction'>
             <CallToAction />
      </div>
    </div>
  )
}

export default Courses
