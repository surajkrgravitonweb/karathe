import React from "react";
import "../App.css";
import logo from "../../Images/Testimonials/logo-wide.png";

import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";

const About = () => {
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Educational guidance by Karethe.</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              At Karethe Teaching, our mission is to provide high-quality
              education and empower individuals to achieve their learning goals.
              We believe in fostering a positive learning environment that
              encourages curiosity, creativity, and collaboration.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Instructors</h3>
            <p>
              Our dedicated team of experienced instructors is committed to
              guiding students through their educational journey. With a focus
              on both theoretical knowledge and practical skills, our
              instructors ensure a well-rounded learning experience.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Learning Approach</h3>
            <p>
              We embrace a hands-on and interactive learning approach. Through
              engaging lectures, workshops, and projects, students gain a deep
              understanding of the subjects they are studying.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Facilities</h3>
            <p>
              Our state-of-the-art facilities provide a conducive learning
              environment. From modern classrooms to well-equipped labs, we
              ensure that students have access to the resources they need.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Testimonials</h3>
            <p>
              Hear what our students have to say about their experiences at
              Karethe Teaching. Our testimonials reflect the success stories and
              positive impact our education has had on their lives and careers.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>
              Have questions or ready to enroll? Contact us today! Our friendly
              staff is ready to assist you. Visit our campus or reach out via
              email or phone for more information about our courses and
              programs.
            </p>
            <p>Email: kaizenkarateindia@gmail.com</p>
            <p>Phone: +91 9832480087</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
