import React from "react";
// import '../App.css'
import { Link } from "react-router-dom";
// import logo from "../../Images/Testimonials/logo-wide.png";
import { FaCaretDown } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import logo from "../../Images/whatsapp/newlogo-removebg.png";
const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container">
            <a className="navbar-brand text-size my-auto text-white fw-bold">
              <i
                className="fa-solid fa-phone icon-size my-auto  "
                style={{
                  fontSize: "16px",
                  width: "20px",
                  height: "20px",
                }}
              ></i>{" "}
              +91 9832480087
            </a>

            <Link
              to=""
              className="text-white text-decoration-none privacy_policy_link fw-bold"
            >
              Kaizen Karate-do Association India
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold"
                    aria-current="page"
                    href="mailto:kaizenkarateindia@gmail.com"
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-envelope text-danger icon-size"
                      style={{
                        fontSize: "16px",
                        width: "20px",
                        height: "20px",
                      }}
                    ></i>{" "}
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
                    <i
                      className="fab fa-facebook"
                      style={{
                        fontSize: "24px",
                        width: "30px",
                        height: "30px",
                      }}
                    ></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://wa.me/+919832480087"
                    target="_blank"
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{
                        fontSize: "24px",
                        width: "30px",
                        height: "30px",
                      }}
                    ></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/martial.arts.india/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-instagram"
                      style={{
                        color: "#E1306C",
                        fontWeight: "bold",
                        fontSize: "24px",
                        width: "30px",
                        height: "30px",
                      }}
                    ></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.youtube.com/@kaizenkarateassociationindia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-youtube"
                      style={{
                        color: "#FF0000",
                        fontWeight: "bold",
                        fontSize: "24px",
                        width: "30px",
                        height: "30px",
                      }}
                    ></i>
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
            <img
              src={logo}
              alt=""
              className="w-10 h-10"
              style={{ width: "80px", height: "80px" }}
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

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-16 mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <Link
                  className="nav-link active font-weight-bold text-dark"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  className="nav-link active font-weight-bold text-dark"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              {/* <li className="nav-item me-5">
                <Link className="nav-link active" to="/training">
                  Our Trainers
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/blog">
                  Board Member
                </Link>
              </li> */}
              <li className="nav-item me-5">
                <ul className="navbar-nav ms-10 mb-2 mb-lg-0">
                  <NavDropdown
                    title={
                      <span className="font-weight-bold text-dark">
                        Gallery
                      </span>
                    }
                    id="member-dropdown"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/media"
                      className="font-weight-bold text-dark"
                    >
                      Media
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/images"
                      className="font-weight-bold text-dark"
                    >
                      Images
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/video"
                      className="font-weight-bold text-dark"
                    >
                      Video
                    </NavDropdown.Item>
                  </NavDropdown>
                </ul>
              </li>

              <li className="nav-item me-5">
                <ul className="navbar-nav ms-10 mb-2 mb-lg-0">
                  <NavDropdown
                    title={
                      <span className="font-weight-bold text-dark">Member</span>
                    }
                    id="member-dropdown"
                  >
                    <NavDropdown.Item
                      href="/training"
                      className="font-weight-bold text-dark"
                    >
                      <i className="fas fa-users me-2"></i> Our Trainers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/blog"
                      className="font-weight-bold text-dark"
                    >
                      <i className="fas fa-user-tie me-2"></i> Board Member
                    </NavDropdown.Item>
                  </NavDropdown>
                </ul>
              </li>

              <li className="nav-item me-5 font-weight-bold text-dark">
                <Link className="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <a
            className="btn btn-primary fw-bold p-3 d-none d-sm-none d-lg-inline"
            href="/contact"
            target="_blank"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
