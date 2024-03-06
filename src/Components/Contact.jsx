import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
import logo from "../../Images/Testimonials/logo-wide.png";

import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryFor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryFor: "",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d2v0q6k",
        "template_kpe9yct",
        form.current,
        "YMKspFClZ12EGG2OZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Inquiry Submitted Successfully");
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryFor: "",
    });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h2>Get in Touch.</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inquiryFor" className="form-label">
                  Inquiry For
                </label>
                <textarea
                  className="form-control"
                  id="inquiryFor"
                  name="inquiryFor"
                  value={formData.inquiryFor}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mb-5">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            {/* Display Delhi Map here */}
            <h2>Connect with us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.322635163438!2d88.41710069999999!3d26.7340785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44123e8da7ded%3A0xa033863d2e705f1c!2sNabankur%20Sangha!5e0!3m2!1sen!2sin!4v1709370397487!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center mb-4">Our Branch</h2>

        <div className="row">
          {/* Display the map for the first location in full width on mobile */}
          <div className="col-12 col-md-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.4921687168185!2d88.43065999999999!3d26.728666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441100287e601%3A0x6906cd3911a057a5!2sLittle%20Laureates%20Siliguri%20Jyoti%20Nagar!5e0!3m2!1sen!2sin!4v1709370600233!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "1px solid #ddd", marginBottom: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Display the other three locations in a 2-column layout on mobile */}
          <div className="col-12 col-md-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.619029484894!2d88.4332867!3d26.7246152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441434d561a0b%3A0x2dbea6a5f1cae342!2sBright%20Academy!5e0!3m2!1sen!2sin!4v1709370464672!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "1px solid #ddd", marginBottom: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.2135543713184!2d88.4170499!3d26.705623799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c23bcd8903%3A0xcc048cc023af34cd!2sBright%20Academy%20-%20Khalpara!5e0!3m2!1sen!2sin!4v1709370508514!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "1px solid #ddd", marginBottom: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.50590854671!2d88.3970471!3d26.728227300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e446cdfc7dc14d%3A0x2134ecad44d3dc1e!2sLumina!5e0!3m2!1sen!2sin!4v1709370554442!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "1px solid #ddd", marginBottom: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
