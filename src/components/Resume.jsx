import React from 'react';
import "../css/resume.css"

const Resume = () => {
    return (
      <div className="resume-container">
        <div className="resume-header">
          <h1>Rubini J S</h1>
          <p>
            <a href="https://github.com/Rubini17" className="resume-link">GitHub</a> |
            <a href="https://www.linkedin.com/in/rubini-j-s-49aa55249/" className="resume-link"> LinkedIn</a> |
            <a href="mailto:rubinijs2004@gmail.com" className="resume-link"> Email</a> |
            <a href="tel:9150860262" className="resume-link"> Phone</a> |
            <a href="https://leetcode.com/u/rubini17/" className="resume-link"> LeetCode</a>
          </p>
        </div>
  
        <section className="resume-section">
          <h2>About Me</h2>
          <p>I'm a web development enthusiast who loves creating websites and bringing ideas to life through code. I enjoy solving problems, experimenting with new technologies, and making the web a more exciting place.</p>
        </section>
  
        <section className="resume-section">
          <h2>Education</h2>
          <ul>
            <li>B.E CSE at St. Joseph's Institute of Technology (2022 - present) | CGPA: 9.07</li>
            <li>Class 12th CBSE Board (2022) | 95.6%</li>
            <li>Class 10th CBSE Board (2020) | 96.2%</li>
          </ul>
        </section>
  
        <section className="resume-section">
          <h2>Projects</h2>
          <div className="resume-project">
            <h3>Sudoku Solver</h3>
            <p><a href="https://github.com/Rubini17/Sudoku-Solver" className="resume-link">GitHub Link</a></p>
            <p>Developed a desktop application that solves Sudoku puzzles using a backtracking algorithm.</p>
            <p><strong>Tools Used:</strong> Java, Swing (GUI), Algorithms (Backtracking)</p>
          </div>
  
          <div className="resume-project">
            <h3>ATM Machine Simulation</h3>
            <p><a href="https://github.com/Rubini17/ATM-Machine-Simulation" className="resume-link">GitHub Link</a></p>
            <p>Console-based ATM simulation managing banking functions such as balance checking, withdrawals, and deposits.</p>
            <p><strong>Tools Used:</strong> Java, ArrayList, Scanner</p>
          </div>
        </section>
  
        <section className="resume-section">
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming Languages:</strong> Java,HTML,CSS,JavaScript</li>
            <li><strong>Frameworks:</strong>React, Node, Express</li>
            <li><strong>Version Control:</strong> Git,GitHub</li>

          </ul>
        </section>
  
        <section className="resume-section">
          <h2>Other Profiles</h2>
          <ul>
            <li><a href="https://leetcode.com/u/rubini17/" className="resume-link">LeetCode</a></li>
            <li><a href="https://www.hackerrank.com/profile/rubinijs17" className="resume-link">HackerRank</a></li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Resume;
  