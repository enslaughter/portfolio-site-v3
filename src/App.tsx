import React from "react";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import { ReactComponent as Logo } from "./resources/Logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <nav>
          <div className="nav-bar">
            <div>
              <Link to="/" className="nav-logo">
                <Logo className="nav-logo-image" />
              </Link>
            </div>
            <div>
              <Link to="/" className="nav-link">
                HOME
              </Link>
              <Link to="/projects" className="nav-link">
                PROJECTS
              </Link>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <div className="page-footer">
          <nav>
            <div className="nav-bar">
              <div>
                <Link to="/" className="nav-logo">
                  <Logo className="nav-logo-image" />
                </Link>
              </div>
              <div>
                <a href="/" className="nav-link">
                  HOME
                </a>
                <a href="/projects" className="nav-link">
                  PROJECTS
                </a>
                <a href="/contact" className="nav-link">
                  CONTACT
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default App;
