import React from "react";
import { Link } from "react-scroll";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info p-1">
          <Link 
            className="navbar-brand ml-3"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Ciro Griffiths
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
              <ul className="navbar-nav">
                  <Link
                    className="nav-item nav-link mx-1"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Projects
                  </Link>
                  <Link
                    className="nav-item nav-link mx-1"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Skills & Education
                </Link>
                  <Link
                    className="nav-item nav-link mx-1"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    About Me
                </Link>
                  <Link
                    className="nav-item nav-link mx-1"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    Contact
                </Link>
              </ul>
          </div>
      </nav>
      </div>
      );
}

export default Navbar;