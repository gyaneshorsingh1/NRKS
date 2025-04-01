import "./InternshipPrograms.css";
import internIcon1 from "../../assets/icon1.png";
import internIcon2 from "../../assets/icon2.png";
import internIcon3 from "../../assets/icon3.png";
import internIcon4 from "../../assets/icon4.png";
import internIcon5 from "../../assets/icon5.png";
import internIcon6 from "../../assets/icon6.png";



export default function InternshipPrograms() {
  return (
    <div className="internship-container">
      <div className="internship-section">
        <h2>Upskill with Expert-Led Internship Programs</h2>
        <p>Gain hands-on experience with our carefully curated internships designed for the modern job market.</p>
        <div className="internship-grid">
          <div className="internship-item">
            <img className="icon" src={internIcon1} alt="Design & Creativity" />
            <h3>Design & Creativity</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="internship-item">
            <img className="icon" src={internIcon2} alt="Software Development" />
            <h3>Software Development</h3>
            <ul>
              <li>Web Development</li>
              <li>Java Development</li>
              <li>Python Development</li>
            </ul>
          </div>
          <div className="internship-item">
            <img className="icon" src={internIcon3} alt="Cybersecurity & Testing" />
            <h3>Cybersecurity & Testing</h3>
            <ul>
              <li>Cyber Security</li>
              <li>Software Testing</li>
            </ul>
          </div>
          <div className="internship-item">
            <img className="icon" src={internIcon4} alt="Data & Analytics" />
            <h3>Data & Analytics</h3>
            <ul>
              <li>Data Science</li>
              <li>Data Analytics</li>
            </ul>
          </div>
          <div className="internship-item">
            <img className="icon" src={internIcon5} alt="Digital Business & Marketing" />
            <h3>Digital Business & Marketing</h3>
            <ul>
              <li>Digital Marketing</li>
              <li>Content Writing</li>
            </ul>
          </div>
          <div className="internship-item">
            <img className="icon" src={internIcon6} alt="Explore More Internships" />
            <h3>Explore More Internships</h3>
            <p>We won’t stop <br /> empowering you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
