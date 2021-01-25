/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a className="navbar-brand" href="#">
            Kobam <img src="/img/coding.svg" alt="coding" width="40px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                to="/"
                className={`nav-link ${location.pathname === "/" && "active"}`}
              >
                Home
              </Link>
              <Link
                to="/tutorial"
                className={`nav-link ${
                  location.pathname === "/tutorial" && "active"
                }`}
              >
                Tutorial
              </Link>
              <a className="nav-link" href="#about-us">
                About Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
