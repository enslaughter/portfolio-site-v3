import PortfolioBust from "../resources/Portfolio_Bust.png";
import iconhtml from "../resources/iconhtml.svg";
import iconcss from "../resources/iconcss.svg";
import iconjs from "../resources/iconjs.svg";
import iconreact from "../resources/iconreact.svg";

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
              I've been a frontend web developer for three years and I'm eager
              to get additional developer experience under my belt. I'm located
              in Kingston, Ontario, though I would prefer to work remotely. I
              keep up with modern web design trends and take pride in seeing my
              work come to life in a clean, user-friendly experience.
            </p>
            <p>
              I'm not just a web developer though. I studied Chemical
              Engineering and enjoy game programming in C#. I also love to cook,
              and have been working on my own creative writing.
            </p>
          </div>
          <a href="/projects" className="page-link">
            VIEW PORTFOLIO
          </a>
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
          fundamentals of HTML, CSS, and Javascript/Typescript. My frontend
          framework of choice is React, but I am able to learn whatever tools
          are required. My preferred frontend testing languages are Jest and
          Cypress. I prefer Github for my version control, and Ubuntu as part of
          my development environment.
        </p>
        <p>
          In addition to the above skills, I have educated myself in core
          computer science concepts like data structures and algorithms. I have
          experience in creating modern website functionalities such as object
          filtering, dynamic loading, modals, and form validation. On top of
          frontend work, I have successfully completed work in APIs written in
          Python, and devops work involving Kubernetes and GCP.
        </p>
      </div>

      <div className="contact-cta">
        <p>
          Like what <br></br>you see?
        </p>
        <div className="contact-cta--divider"></div>
        <a href="/contact" className="page-link">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default Home;
