import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import playstore from "../../Images/whatsapp/play.webp";

const Footer = () => {
  const location = useLocation();
  const flag = location?.pathname?.includes("/feedback");

  if (flag) {
    return <></>;
  } else {
    return (
      <footer className="bg-dark mt-6 text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h4 className="">Kaizen karate India</h4>
              <p className="text-muted">
                Martial art emphasizing striking, kicking, and defensive
                techniques for self-defense and discipline
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=com.karate.kaizenkarateindia"
                className="button"
                download="BigWin(1.0.1).apk"
                target="_blank"
              >
                {/* <img src={playstore} className="img-fluid" alt="Download" /> */}
                <img
                  src={playstore}
                  className="img-fluid w-50 h-30"
                  alt="Download"
                />
              </a>
            </div>
            <div className="col-md-3">
              <h5></h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <Link to="/privacy_policy" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Get In Touch</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <Link to="/contact" className="text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
          <div className="col-md-6 text-center"> {/* Center the content */}
  <ul className="list-inline social-link">
    <li className="list-inline-item">
      <Link
        to="https://www.facebook.com/kaizenkarateindia/"
        className="text-white"
      >
        <FontAwesomeIcon icon={faFacebook} className="social-icon fa-2x" /> {/* Make the icon bigger */}
      </Link>
    </li>
  </ul>
</div>

            <div className="col-md-6 text-md-right">
              <p className="text-muted">
                Copyright@2020 All Rights Reserved By :{" "}
                <Link to="#" className="text-white">
                  <strong> Karate</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
