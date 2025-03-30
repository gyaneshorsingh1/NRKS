// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css"; // Make sure to import the CSS
import holdingLaptop from "../../assets/holding-laptop.png"
import home2 from "../../assets/home2.png"
export default function HomeHero() {
  return (
    <>
    <div className="hero-home-container">

    <section className="hero-section">
      <h1 className="hero-heading">
        Unlock Your Career <img src={home2} className="home-hero2" alt="" /> <br /> Potential with Industry- <br /> Driven Learning
      </h1>
      <p className="hero-subtext">
        Master in-demand skills with hands-on training, real-world projects, and expert mentorship. Your career transformation starts here.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-outline">Learn More</button>
      </div>
    </section>
    <div className="left-hero-img">
        <img className="home-hero-img" src={holdingLaptop} alt=" a girl holding laptop" />
        <div className="boxshadow1"></div>
        <div className="boxshadow2"></div>
        <div className="boxshadow3"></div>
        <div className="boxshadow4"></div>
     </div>
    </div>
    </>
  );
}
