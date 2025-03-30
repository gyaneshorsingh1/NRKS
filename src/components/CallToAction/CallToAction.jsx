import React from "react";
import "./CallToAction.css";

const CallToAction = () => (
  <section className="cta">
    <h2>Get A Free Career Guidance Session
        <br /> Message Now !!!</h2>
    <div className="send-number">
        <input type="text" className="send-number-input" placeholder="Enter Mobile Number" />
        <button className="send-number-btn">send</button>
    </div>
  </section>
);

export default CallToAction;
