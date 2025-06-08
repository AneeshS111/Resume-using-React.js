import React from 'react';
import './App.css';
import profilePic from './assets/Aneesh.jpg';
import {
FaEnvelope,
FaLinkedin,
FaGithub,
FaCode,
FaGraduationCap,
FaProjectDiagram,
FaUser,
FaHome,
FaLaptopCode,
FaSchool,
FaAddressBook,
} from 'react-icons/fa';

function App() {
return (
<div>
<nav className="navbar">
<div className="navbar-container">
<a href="#home" className="logo"><FaHome /> Hi I'm Aneesh!</a>
<ul className="nav-links">
<li><a href="#about"><FaUser /> About</a></li>
<li><a href="#skills"><FaLaptopCode /> Skills</a></li>
<li><a href="#education"><FaSchool /> Education</a></li>
<li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
<li><a href="#contact"><FaAddressBook /> Contact</a></li>
</ul>
</div>
</nav>
  <header className="header" id="home">
    <img src={profilePic} alt="P M ANEESH SRIVATS" className="profile-pic" />
    <h1>P M ANEESH SRIVATS</h1>
    <p>Java Developer | AI & ML Enthusiast | Designer</p>
  </header>

  <section className="card about" id="about">
    <h2><FaUser className="icon" /> About Me</h2>
    <p>I'm a passionate full-stack Java developer and Artificial Intelligence enthusiast, currently pursuing my B.E in Computer Science & Engineering at Malnad College of Engineering.</p>
  </section>

  <section className="card skills" id="skills">
    <h2><FaCode className="icon" /> Technical Skills</h2>
    <ul>
      <li>C</li>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>React.js</li>
    </ul>
  </section>

  <section className="card education" id="education">
    <h2><FaGraduationCap className="icon" /> Education</h2>
    <ul>
      <li><strong>10th:</strong> BGS National Public School – 84% – 2020</li>
      <li><strong>12th:</strong> BASE PU College – 77% – 2022</li>
      <li><strong>B.E (CSE):</strong> Malnad College of Engineering – 86% – 2026</li>
    </ul>
  </section>

  <section className="card projects" id="projects">
    <h2><FaProjectDiagram className="icon" /> Projects</h2>
    <div className="project">
      <h3>Weather Forecasting</h3>
      <p>Developed a system for obtaining weather forecasts using Open Source Weather API Calls.</p>
    </div>
    <div className="project">
      <h3>Jason Power DB – Form Management</h3>
      <p>Created a student registration form with HTML & JavaScript and stored the data in a modern JSON PowerDB database using REST APIs.</p>
    </div>
    <div className="project">
      <h3>Digital Voting System</h3>
      <p>Secure voting web app with OTP verification, Node.js backend, and MySQL database.</p>
    </div>
    <div className="project">
      <h3>Blood Smear Segmentation</h3>
      <p>V-Net based deep learning model to segment and classify leukemia-affected cells in blood smear images.</p>
    </div>
  </section>

  <section className="card contact" id="contact">
    <h2><FaEnvelope className="icon" /> Contact</h2>
    <p><FaEnvelope className="icon-inline" /> Email: <a href="mailto:anee632004@gmail.com">anee632004@gmail.com</a></p>
    <p><FaLinkedin className="icon-inline" /> LinkedIn: <a href="https://www.linkedin.com/in/aneeshsrivats15824b25a" target="_blank" rel="noopener noreferrer">aneeshsrivats15824b25a</a></p>
    <p><FaGithub className="icon-inline" /> GitHub: <a href="https://github.com/AneeshS111" target="_blank" rel="noopener noreferrer">AneeshS111</a></p>
  </section>

  <footer className="footer">
    &copy; 2025 P M ANEESH SRIVATS. All rights reserved.
  </footer>
</div>
);
}

export default App;
