import PortfolioBust from "../resources/Portfolio_Bust.png";
import iconhtml from "../resources/iconhtml.svg";
import iconcss from "../resources/iconcss.svg";
import iconjs from "../resources/iconjs.svg";
import iconreact from "../resources/iconreact.svg";

function Home() {
  return (
    <div className="homepage-container">
      <div className="hero-container">
        <h1>ELIJAH SLAUGHTER</h1>
        <p>Software Engineer</p>
      </div>

      <div className="about-container">
        <img src={PortfolioBust} alt="" className="about-image"></img>
        <div className="about-text">
          <div>
            <h2>About Me</h2>
            <p>
              I've been a software engineer for three years and I'm eager to get
              additional development experience under my belt. I'm located in
              Kingston, Ontario, though I would prefer to work remotely. I keep
              up with modern web design trends and take pride in seeing my work
              come to life in a clean, user-friendly experience.
            </p>
            <p>
              I'm not just an engineer for software though. I studied Chemical
              Engineering and enjoy game programming in C#. I also love to cook,
              and have been working on my own creative writing.
            </p>
          </div>
          <div className="about-cta">
            <a href="/projects" className="page-link">
              VIEW PORTFOLIO
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="page-link"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>

      <div className="experience-section">
        <h2>Experience</h2>
        <p className="experience-role">
          Software Engineer &nbsp;·&nbsp; Wrk Technologies &nbsp;·&nbsp; Jul 2021 - Sep 2023
        </p>
        <ul>
          <li>
            Led a full redesign of the company's core SaaS dashboard in React
            and TypeScript, building a modular component library of 20-30
            components that reduced feature build time by <strong>~50%</strong>.
          </li>
          <li>
            Delivered platform-wide performance improvements, cutting page load
            times by <strong>2-5 seconds</strong>.
          </li>
          <li>
            Co-developed 12-15 Django REST API endpoints to replace a legacy
            template-based architecture.
          </li>
          <li>
            Redesigned Luigi data pipelines, reducing compute time by{" "}
            <strong>~70%</strong> and cutting multi-day runtimes down to hours
            via checkpointing.
          </li>
          <li>
            Built and operated CircleCI CI/CD pipelines; managed
            Docker-containerized services on Kubernetes and GCP.
          </li>
          <li>
            Authored a technical design document that resolved a critical
            product/engineering alignment issue, unblocking a stalled project.
          </li>
        </ul>
      </div>

      <div className="skills-container">
        <h2>My Current Tech Stack</h2>
        <div className="skills-grid">
          <div>
            <h3>Frontend</h3>
            <p>
              React, TypeScript, Redux, MUI, Styled Components, HTML5, CSS3
              &nbsp;—&nbsp; tested with Jest and Cypress
            </p>
          </div>
          <div>
            <h3>Backend</h3>
            <p>
              Django, Python, Node.js, REST APIs, gRPC/protobuf, PostgreSQL,
              Luigi
            </p>
          </div>
          <div>
            <h3>DevOps</h3>
            <p>GCP, Kubernetes, Docker, CircleCI, Prometheus, shell scripting</p>
          </div>
          <div>
            <h3>Languages</h3>
            <p>TypeScript, JavaScript, Python, Go</p>
          </div>
        </div>
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
