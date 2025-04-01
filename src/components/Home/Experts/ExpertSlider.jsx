import React, { useState } from "react";
import "./ExpertSlider.css";

const ExpertSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: "Card 1", description: "This is the description for card 1" },
    { title: "Card 2", description: "This is the description for card 2" },
    { title: "Card 3", description: "This is the description for card 3" },
    { title: "Card 4", description: "This is the description for card 4" },
  ];

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="card-slider">
      <div className="slider-container" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button className="slidebtn prev" onClick={slideLeft}>{"<"}</button>
      <button className="slidebtn next" onClick={slideRight}>{">"}</button>
    </div>
  );
};

export default ExpertSlider;
