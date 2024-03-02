import React from "react";

import Navbar from "../common/Navbar";

import logo from "../../Images/Testimonials/logo-wide.png";

import team1 from "../../Images/traingPhoto/img1.jpg";
import team2 from "../../Images/Teams/2.jpg";
import team3 from "../../Images/Teams/3.jpg";
import team4 from "../../Images/Teams/4.jpg";

import { Link } from "react-router-dom";

export const Trainer = () => {
  return (
    <>
      <div>
        {" "}
        <p className="display-6 fw-bold text-center">
          Our <span className="text-danger fw-bold">Trainers</span>
        </p>
        <p className="text-center font-italic">
          Join our martial art club and be healthy{" "}
        </p>
        <div className="row container-fluid container-lg justify-content-center mx-auto">
          <div className="col-12 col-sm-6 col-lg-3 box m-2">
            {/* <img src="../Images/Teams/1 (1).jpg" className=" w-100 my-2" /> */}
            <img src={team1} className=" w-100 my-2" />
            <h3 className="mt-3 ms-3">
              <span className="text-danger fw-bold ">Suraj Kumar</span> |{" "}
            </h3>
            {/* <p className="text-secondary fst-italic ms-2 my-0">01:00 pm - 03:00 pm</p> */}
            <p className="text-secondary fst-italic ms-2">1st Dan Black Belt</p>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-12 col-sm-6 col-lg-3 box m-2">
            {/* <img src="../Images/Teams/2.jpg" className=" w-100 my-2" /> */}
            <img src={team2} className=" w-100 my-2" />
            <h3 className="mt-3 ms-2">
              <span className="text-danger fw-bold">Private</span> | Group
              Lessons
            </h3>
            <p className="text-secondary fst-italic ms-2 my-0">
              01:00 pm - 03:00 pm
            </p>
            <p className="text-secondary fst-italic ms-2">
              121 King Street, Melbourne
            </p>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-12 col-sm-6 col-lg-3 box m-2">
            <img src={team3} className=" w-100 my-2" />
            <h3 className="mt-3">
              <span className="text-danger fw-bold">Private</span> | Group
              Lessons
            </h3>
            <p className="text-secondary fst-italic my-0">
              01:00 pm - 03:00 pm
            </p>
            <p className="text-secondary fst-italic">
              121 King Street, Melbourne
            </p>
          </div>
          {/* <div className="col-1"></div> */}
          {/* </div> */}

          {/* <div className="row container mx-auto"> */}
          <div className="col-12 col-sm-6 col-lg-3  box m-2">
            <img src={team4} className=" w-100 my-2" />
            <h3 className="mt-3">
              <span className="text-danger fw-bold">Private</span> | Group
              Lessons
            </h3>
            <p className="text-secondary fst-italic my-0">
              01:00 pm - 03:00 pm
            </p>
            <p className="text-secondary fst-italic">
              121 King Street, Melbourne
            </p>
          </div>
          {/* <div className="col-1"></div> ms-3*/}
          <div className="col-12 col-sm-6 col-lg-3 box m-2">
            <img src={team3} className=" w-100 my-2" />
            <h3 className="mt-3">
              <span className="text-danger fw-bold">Private</span> | Group
              Lessons
            </h3>
            <p className="text-secondary fst-italic my-0">
              01:00 pm - 03:00 pm
            </p>
            <p className="text-secondary fst-italic">
              121 King Street, Melbourne
            </p>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-12 col-sm-6 col-lg-3 box m-2">
            <img src={team2} className=" w-100 my-2" />
            <h3 className="mt-3">
              <span className="text-danger fw-bold">Private</span> | Group
              Lessons
            </h3>
            <p className="text-secondary fst-italic my-0">
              01:00 pm - 03:00 pm
            </p>
            <p className="text-secondary fst-italic">
              121 King Street, Melbourne
            </p>
          </div>
          {/* <div className="col-1"></div> */}
        </div>
      </div>
    </>
  );
};
