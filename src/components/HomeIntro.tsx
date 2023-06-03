import './HomeIntro.css'
import { Link } from 'react-router-dom';

const HomeIntro = () => {
  return (
    <div className="outer">
      <section className="home section" id="home">
        <div className="home-container container grid">
          <div className="home-data">
            <span className="home-greetings">Hello, I'm</span>
            <h1 className="home-name">Mohammed Niyas</h1>
            <h3 className="home-education">Full Stack Web Developer</h3>
            <div className="home-buttons">
              <a
                href="https://drive.google.com/file/d/1ydL7cgEUuBXQiPUupVrWigps1XVGBW9n/view?usp=sharing"
                target="_blank"
                className="button button-ghost"
              >
                Download CV
              </a>
              <a href="#about" className="button">
                About me
              </a>
            </div>
          </div>
          <div className="home-social">
            <a
              href="https://www.linkedin.com/in/mohammed-niyas-6437801b2/"
              target="_blank"
              className="social-link"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a
              href="https://github.com/MohammedNiyasK"
              className="social-link"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <a href="#about" className="home-scroll">
            <i className="bx bx-mouse"></i>
            <span className="scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>

      <section className="about section" id="about">
        <span className="section-subtitle">My Intro</span>
        <h2 className="section-title">About Me</h2>
        <div className="about-container container grid">
          <p className="about-description">
            Self-taught MERN stack developer with a passion for coding ,With a
            drive to constantly improve and expand their skillset,dedicated to
            creating innovative and functional web applications using the latest
            technologies.
          </p>

          <div className="about-data">
            <div className="about-info">
              <div className="about-box">
                <i className="bx bx-award about-icon"></i>
                <h3 className="about-title">Experiences</h3>
                <span className="about-subtitle"> 1 Year of Working</span>
              </div>

              <div className="about-box">
                <i className="bx bx-briefcase-alt-2 about-icon"></i>
                <h3 className="about-title">Completed</h3>
                <span className="about-subtitle">20 + Projects</span>
              </div>

              <div className="about-box">
                <i className="bx bx-support about-icon"></i>
                <h3 className="about-title">Availability</h3>
                <span className="about-subtitle">Online 24/7</span>
              </div>
            </div>
            <div className="aboutme-button aboutme-btn">
              <Link to="/contact" className="button">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeIntro;
