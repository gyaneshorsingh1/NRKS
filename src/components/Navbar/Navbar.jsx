import React from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle.jsx";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><img src="/logo.png" alt="logo" /> <ThemeToggle /></div>
    
    <ul className="nav-links">
      <li>Home</li>
      <li>Courses</li>
      <li>Internships</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <button className="btn-primary get-started">Get Started<FaChevronRight/></button>
    </ul>
  </nav>
);

export default Navbar;
