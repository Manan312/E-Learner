import React from "react";
import "../styles/components/About.css";

export default function About() {
  return (
    <div className="aboutWrapper">
      <h2>About Us</h2>
      <div className="aboutInformation">
        <h4>
          Online Courses
        </h4>
        <p>
          We provide a variety of online courses to help you learn new skills and advance your career.
        </p>
      </div>
      <div className="aboutInformation">
        <h4>
          Our Mission
        </h4> 
        <p>
          Our mission is to make education accessible to everyone, everywhere.
        </p>
      </div>
      <div className="aboutInformation">
        <h4>Mentoring</h4>
        <p>
          We offer personalized mentoring to help you achieve your learning goals.
        </p>
      </div>
      <div className="aboutInformation">
        <h4>Learning Yourself</h4>
        <p>
          We believe in self-paced learning, allowing you to learn at your own speed and convenience.
        </p>
      </div>
    </div>
  );
}
