import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="top-nav">
          <nav className="navbar navbar-expand-lg navbar-default text-center mx-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-controls="bs-example-navbar-collapse-1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/icons" className="nav-link">
                    Icons
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/typograhy" className="nav-link">
                    Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/single" className="nav-link">
                    Info
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
