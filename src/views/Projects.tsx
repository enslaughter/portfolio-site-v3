import siteinvoiceapp from "../resources/siteinvoiceapp.png";
import sitepomodoroapp from "../resources/sitepomodoroapp.png";
import sitejobfilters from "../resources/sitejobfilters.png";
import sitejobapi from "../resources/sitejobapi.png";
import sitephotosnap from "../resources/sitephotosnap.png";

function Projects() {
  return (
    <div className="projects-container">
      <div className="contact-flexbox">
        <h2>A Selection of My Work</h2>
        <div className="projects-info-box">
          <p>
            Below are some of my personal projects, primarily focused on
            frontend React development. All sites feature responsive designs and
            modern design features such as theme switching, modals, and data
            filtering. All code is written by myself and can be found on my
            Github page.
          </p>
          <br></br>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/enslaughter"
            className="page-link"
          >
            GITHUB PROFILE
          </a>
        </div>
      </div>
      <div className="about-container">
        <img src={siteinvoiceapp} alt="" className="project-image"></img>
        <div className="about-text">
          <div>
            <h2>Invoice Management Application</h2>
            <p>
              An invoice-management app created with the React framework.
              Includes routing for viewing specific invoices, theme switching,
              modal confirmation, form validation, filtering, and the ability to
              add new invoices, edit current ones, or delete existing ones.
            </p>
          </div>
          <div className="project-link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fem-invoice-app.vercel.app/"
              className="page-link"
            >
              VIEW SITE
            </a>
            <div className="project-link-divider"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/enslaughter/fem-invoice-app"
              className="page-link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
      </div>

      <div className="about-container project-even">
        <div className="about-text">
          <div>
            <h2>Jobs Board Application</h2>
            <p>
              A job board application that allows the user to search and filter
              for jobs, as well as click on them for the full listing. Features
              theme switching, searching, filtering, and markdown rendering.
            </p>
            <p>
              <b>Note:</b> This project was originally created with data fetched
              from the Github Jobs API. The GitHub Jobs API has been deprecated
              as of May 2021. As a result, legacy API data is used for this
              application. The code for the API calls and management is still
              intact and viewable{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/enslaughter/fem-github-jobs-api-react"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="project-link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react-github-jobs-api-omega.vercel.app/"
              className="page-link"
            >
              VIEW SITE
            </a>
            <div className="project-link-divider"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/enslaughter/fem-github-jobs-api-react"
              className="page-link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
        <img src={sitejobapi} alt="" className="project-image"></img>
      </div>

      {/* <div className="about-container">
        <img src={sitejobfilters} alt="" className="project-image"></img>
        <div className="about-text">
          <div>
            <h2>Job Filtering Component</h2>
            <p>
              A small project that generates job listings from JSON data.
              Includes filtering tag management and makes use of the new array
              methods introduced in Javascript ES6.
            </p>
          </div>
          <div className="project-link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fem-static-job-listings-react.vercel.app/"
              className="page-link"
            >
              VIEW SITE
            </a>
            <div className="project-link-divider"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/enslaughter/fem-static-job-listings-react"
              className="page-link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
      </div> */}

      <div className="about-container">
        <img src={sitephotosnap} alt="" className="project-image"></img>
        <div className="about-text">
          <div>
            <h2>Photosnap Marketing Website</h2>
            <p>
              A more stylistically-driven project, focused more on clean, modern
              design. It features four pages that each have a responsive design
              to be viewed on both desktop and mobile. This project is a
              demonstration of my ability to create websites that are more
              geared towards businesses in need of modernized customer-facing
              pages.
            </p>
          </div>
          <div className="project-link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fem-photosnap-react.vercel.app/"
              className="page-link"
            >
              VIEW SITE
            </a>
            <div className="project-link-divider"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/enslaughter/fem-photosnap-react"
              className="page-link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
      </div>

      <div className="about-container project-even">
        <div className="about-text">
          <div>
            <h2>Pomodoro App</h2>
            <p>
              A single-site app for productivity using the traditional
              "Pomodoro" study technique. Created with basic HTML and CSS, and
              coded with the jQuery library. Makes use of the HTML Canvas API
              for rendering. Features a settings modal, app modes, and user
              customization.
            </p>
          </div>
          <div className="project-link-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ens-pomodoro-app.vercel.app/"
              className="page-link"
            >
              VIEW SITE
            </a>
            <div className="project-link-divider"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/enslaughter/fem-pomodoro-app"
              className="page-link"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
        <img src={sitepomodoroapp} alt="" className="project-image"></img>
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

export default Projects;
