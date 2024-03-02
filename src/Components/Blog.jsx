import React from "react";
import Navbar from "../common/Navbar";
import { Link } from "react-router-dom";
import logo from "../../Images/Testimonials/logo-wide.png";
import img1 from "../../Images/boardMember/img1.jpg";

const Blog = () => {
  return (
    <>
      <section className="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mt-5">
              Board <span className="text-danger fw-bold">Member</span>
            </h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              "Breaking: Global leaders unite for climate action. New tech
              breakthrough sparks innovation. Explore the latest trends,
              insights, and updates. Stay informed, stay connected. #News #Blog
              #Updates"
            </p>
          </div>
        </div>

        <div class="row text-center justify-content-center">
          <div class="col-md-4 mb-5 mb-md-0 happy_client_box py-4 mx-1">
            <div class="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md1.jpg" alt="" */}
              <img src={img1} alt="" width="200" height="200" />
            </div>
            <h5 class="mb-3">Shihan Debasish Dhali </h5>
            <h6 class="text-primary mb-3">chief technical director</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>
              "As Chief Technical Director, I lead innovation, drive technology
              strategies, and foster excellence in our team, ensuring
              cutting-edge solutions for success."
            </p>
            {/* <button type="button" class="btn btn-danger">
              Show More
            </button> */}
          </div>
          <div class="col-md-4 mb-5 mb-md-0 happy_client_box py-4 mx-1">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000"
                width="200"
                height="200"
              />
            </div>
            <h5 class="mb-3">Lisa Cudrow</h5>
            <h6 class="text-primary mb-3">karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i> A groundbreaking
              technological advancement sparks a wave of innovation across
              industries. The transformative breakthrough promises to reshape
              the future and propel progress to new heights.
            </p>
            {/* <button type="button" class="btn btn-danger">
              Show More
            </button> */}
          </div>
          <div class="col-md-4 mb-5 mb-md-0 happy_client_box py-4 mx-1">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0CIdYSO4wPWIYxRrhqBRu82ehTnwkncsdNXwYjvjxg&s"
                width="200"
                height="200"
              />
            </div>
            <h5 class="mb-3">John Smith</h5>
            <h6 class="text-primary mb-3">Karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Stay connected with the
              latest trends, insights, and updates. Explore dynamic content
              covering diverse topics, ensuring you're well-informed and ahead
              of the curve.
            </p>
            {/* <button type="button" class="btn btn-danger">
              Show More
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
