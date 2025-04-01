import React from "react";
import "./home.css"
import HomeHero from "../HeroSection/HomeHero";
import InternshipPrograms from "../InternshipPrograms/InternshipProgram";
import OurStory from "./OurStory";
import Certification from "./Certification";
import PureCourseList from "./PureCourseList";
import ExpertSlider from "./Experts/ExpertSlider";

const Home = () => {
  return (
    <>
      <div>
        <HomeHero />
        <OurStory />
        <InternshipPrograms />
        <Certification />
        <section className="courselist-section">
            <PureCourseList />
        </section>
        <ExpertSlider />
      </div>
    </>
  );
};

export default Home;
