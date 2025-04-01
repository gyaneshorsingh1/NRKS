
import { FaArrowCircleRight } from "react-icons/fa";
import "./Ourstory.css"
import UserIcon from "../../assets/user-icon.png";
import ResumeIcon from  "../../assets/resume-icon.png";
import VectorIcon from "../../assets/Vector.png";
import BookIcon from "../../assets/book-icon.png";


const features = [
  { title: "Expert-Led Training", description: "Learn from professionals with real-world experience.", icon: "🧑‍🏫" },
  { title: "Industry-Focused Curriculum", description: "Stay ahead with skills that employers value.", icon: "📄" },
  { title: "Career-Oriented Approach", description: "Helping learners build a strong foundation for future job opportunities.", icon: "👨‍💼" },
  { title: "Hands-on Learning", description: "Practical, interactive and engaging course structures.", icon: "📘" }
];


export default function OurStory() {
    
  return (
    <div className="story-container">
      <div className="story-section">
        <div className="home-part2">
          <h2>Bridging Education & Industry – <br /> <span className="highlight">Our Story</span></h2>
          <p>NRKS Skill Development Private Limited, we are on a mission to bridge the gap between education and industry needs by offering cutting-edge, job-oriented training programs.</p>
          <button className="learn-more">Learn More <FaArrowCircleRight className="right-arrow" /> </button>
        </div>
        <div className="features-grid">
    <div className="home-card1">
        <img src={UserIcon} alt="user icon" />
        <h3>Expert-Led Training</h3>
        <p>Learn from professionals with real-world experience.</p>
        <p className="underline-p"></p>
    </div>
    <div className="home-card2">
    <img src={ResumeIcon} alt="user icon" />
        <h3>Industry-Focused Curriculum</h3>
        <p>Stay ahead with skills that employers value.</p>
        <p className="underline-p"></p>
    </div>
    <div className="home-card3">
    <img src={VectorIcon} alt="user icon" />
        <h3>Career-Oriented Approach</h3>
        <p>Helping learners build a strong foundation for future job opportunities.</p>
        <p className="underline-p"></p>
    </div>
    <div className="home-card4">
    <img src={BookIcon} alt="user icon" />
        <h3>Hands-on Learning</h3>
        <p>Practical, interactive and engaging course structures.</p>
        <p className="underline-p"></p>
    </div>
</div>

      </div>
    </div>
  );
}
