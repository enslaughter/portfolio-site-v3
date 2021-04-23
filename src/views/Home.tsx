import PortfolioBust from "../resources/Portfolio_Bust.png";
import iconhtml from "../resources/iconhtml.svg";
import iconcss from "../resources/iconcss.svg";
import iconjs from "../resources/iconjs.svg";
import iconreact from "../resources/iconreact.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage-container">
      <div className="hero-container">
        <h1>ELI SLAUGHTER</h1>
        <p>Frontend Web Developer</p>
      </div>

      <div className="about-container">
        <img src={PortfolioBust} alt="" className="about-image"></img>
        <div className="about-text">
          <div>
            <h2>About Me</h2>
            <p>
              I'm a self-taught frontend web developer and I'm eager to get some
              real-world developer experience under my belt. I'm located in
              Waterloo, Ontario, though I would prefer to work remotely. I keep
              up with modern website trends and take pride in seeing my work
              come to life in a clean, user-friendly experience.
            </p>
            <p>
              I'm not just a web developer though. I studied Chemical
              Engineering and enjoy game programming in C#. I also love to cook,
              and have been working on my own creative writing.
            </p>
          </div>
          <Link to="/projects" className="page-link">
            VIEW PORTFOLIO
          </Link>
        </div>
      </div>

      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-icon-container">
          <img src={iconhtml} alt="HTML"></img>
          <img src={iconcss} alt="CSS"></img>
          <img src={iconjs} alt="Javascript"></img>
          <img src={iconreact} alt="React"></img>
        </div>
        <br></br>
        <p>
          Being a frontend web developer, I am experienced in the core
          fundamentals of HTML, CSS, and Javascript. My frontend framework of
          choice is React, but I am more than willing to learn whatever I am
          asked to use. I experience with Github for my version control, and am
          familiar with the use of shells such as Cygwin.
        </p>
        <p>
          In addition to the above skills, I have been educating myself on the
          topics of algorithms and data structures. In terms of workplace-ready
          skills, I have experience in creating modern website functionalities
          such as object filtering, modals, and form validation. I am currently
          trying to elevate the robustness of my work by teaching myself testing
          via Jest, design patterns, and using Typescript over regular
          Javascript.
        </p>
      </div>

      <div className="contact-cta">
        <p>
          Like what <br></br>you see?
        </p>
        <div className="contact-cta--divider"></div>
        <Link to="/contact" className="page-link">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}

export default Home;
