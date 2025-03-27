import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>RESUME</h1>
      <p className="resume-subtitle">Engineer | Quant Trader | Founder</p>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Bachelors in Computer Science</h3>
          <p className="institution">Your University, Year</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Entrepreneurship</h2>
        <div className="resume-item">
          <h3>Position Title</h3>
          <p className="company">Company Name</p>
          <p className="date">Month Year - PRESENT</p>
        </div>
        {/* Add more experience items */}
      </section>

      <section className="resume-section">
        <h2>Work Experience</h2>
        <div className="resume-item">
          <h3>Software Engineer</h3>
          <p className="company">Company Name</p>
          <p className="date">Month Year - Month Year</p>
        </div>
        {/* Add more experience items */}
      </section>

      <section className="resume-section">
        <h2>Leadership</h2>
        <div className="resume-item">
          <h3>Position Title</h3>
          <p className="organization">Organization Name</p>
          <p className="date">Month Year - Month Year</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Awards & Achievements</h2>
        <div className="resume-item">
          <h3>Award Name</h3>
          <p className="award-detail">Competition/Organization, Year</p>
        </div>
      </section>
    </div>
  );
};

export default Resume; 