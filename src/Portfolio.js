import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <motion.section 
        className="intro-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Hey, I'm [Your Name]</h1>
        <div className="description">
          <p className="role">Engineer | Content Creator | Community Builder</p>
          
          <p>
            I live in [Your City] and I'm on a mission to learn as many things as possible! I recently graduated{' '}
            <a href="#" className="highlight-link">Your University & Major</a> and previously worked at{' '}
            <a href="#" className="highlight-link">Company Name</a>, where I was building [Your Achievement].
          </p>

          <p>
            In my free time, I'm obsessed with{' '}
            <span className="highlight-text">creating meaningful content</span>. I post content 
            on career, lifestyle, and college on Tiktok followers, views, LinkedIn followers, views, and Youtube followers. I also love sharing coding tutorials and 
            educational notes on Twitter.
          </p>

          <p>
            I also care deeply about building community. In college, I took a gap to found{' '}
            <a href="#" className="highlight-link">Project Name</a>, a [brief project description] and 
            scaled to [achievement metric]. I also regularly host events for [Organization Names].
          </p>

          <p>
            If I can be helpful or you'd like to chat, please reach out!{' '}
            <a href="mailto:your.email@example.com" className="highlight-link">
              your.email@example.com
            </a>
          </p>
        </div>
      </motion.section>

      <motion.div 
        className="more-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <a href="/about" className="more-link">
          More about Me →
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
