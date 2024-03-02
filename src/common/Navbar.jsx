import React from "react";
// import '../App.css'
import { Link } from "react-router-dom";
// import logo from "../../Images/Testimonials/logo-wide.png";
import logo from "../../Images/whatsapp/newlogo-removebg.png";
const Navbar = () => {
  return (
    <> 
    <div className="">
  
      <nav className=" navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand text-size my-auto text-white">
            <i className="fa-solid fa-phone icon-size my-auto"></i> [ +91
            9832480087 ]
          </a>

          <Link
            to=""
            className="text-white text-decoration-none privacy_policy_link"
          >
            Kaizen Karate-do Association  India
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="mailto:kaizenkarateindia@gmail.com"
                  target="_blank"
                >
                  <i className="fa-solid fa-envelope text-danger icon-size"></i>{" "}
                  kaizenkarateindia@gmail.com
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://www.facebook.com/kaizenkarateindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://wa.me/+919832480087"
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="btn btn-danger" href="/contact" target="_blank">
                  Free Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-2" href="/">
          {/* <img src="./Images/Testimonials/logo-wide.png" alt="" /> */}
          {/* Use the 'Link' component for internal navigation */}
          <img
            src={logo}
            alt=""
            className="w-20 h-10"
            style={{ width: "100px", height: "100px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Add 'navbar-collapse' class to the div for responsive behavior */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Use the 'Link' component for internal navigation */}
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/training">
                Our Trainers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/blog">
                Board Member
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
