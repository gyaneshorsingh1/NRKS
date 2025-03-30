import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle.jsx";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><img src="/logo.png" alt="logo" /> <ThemeToggle /></div>
    
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/internships">Internships</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <button className="btn-primary get-started">Get Started<FaChevronRight/></button>
    </ul>
  </nav>
);

export default Navbar;
