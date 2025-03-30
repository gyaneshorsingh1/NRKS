import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/CourseHero.jsx";
import SearchBar from "./components/Search/Search.jsx";
import Courses from "./components/Courses/Courses.jsx";
import CallToAction from "./components/CallToAction/CallToAction.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import Home from "./components/Home/Home.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/courses" element={<Courses />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
