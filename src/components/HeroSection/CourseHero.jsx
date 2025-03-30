import React from "react";
import "./CourseHero.css";
import CourseHeroImg from "../../assets/course-hero-img.png"
const CourseHero = () => (
  <section className="course-hero">
    <div className="course-hero-text">
         <h1>Master Future-Ready Skills – Your Learning Journey Starts Here!</h1>
         <p>Gain in-demand skills with expert-led courses, hands-on projects, and flexible learning options.</p>
    </div>

    <div className="course-hero-img-container">
       <img src={CourseHeroImg} alt="Hero" className="course-hero-image" />
    </div>
  </section>
);

export default CourseHero;
