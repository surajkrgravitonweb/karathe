import React from "react";
import "../App.css";

import logo from "../../Images/Testimonials/logo-wide.png";

import testimonial1 from "../../Images/Testimonials/1.jpg";
import testimonial2 from "../../Images/Testimonials/2.jpg";
import bg2 from "../../Images/homeNewImage/img1.jpg";
import bg3 from "../../Images/homeNewImage/img2.jpg";
import bg19 from "../../Images/no-bg-logo.png";
import about4 from "../../Images/About/4.jpg";
import classes1 from "../../Images/Classes/1.jpg";
import classes2 from "../../Images/Classes/2.jpg";
import classes3 from "../../Images/Classes/3.jpg";
import classes4 from "../../Images/Classes/4.jpg";
import classes5 from "../../Images/Classes/5.jpg";

import gallery1 from "../../Images/Gallery/gallery-md1.jpg";
import gallery2 from "../../Images/Gallery/gallery-md2.jpg";
import gallery17 from "../../Images/Gallery/gallery-md2Temp.jpg";
import gallery3 from "../../Images/Gallery/gallery-md3.jpg";
import gallery4 from "../../Images/Gallery/gallery-md4.jpg";
import gallery5 from "../../Images/Gallery/gallery-md5.jpg";
import gallery6 from "../../Images/Gallery/gallery-md6.jpg";
import gallery7 from "../../Images/Gallery/gallery-md7.jpg";
import gallery8 from "../../Images/Gallery/gallery-md8.jpg";
import gallery9 from "../../Images/Gallery/gallery-md9.jpg";
import gallery10 from "../../Images/Gallery/gallery-md10.jpg";
import gallery11 from "../../Images/Gallery/gallery-md11.jpg";
import gallery12 from "../../Images/Gallery/gallery-md12.jpg";

import team1 from "../../Images/traingPhoto/img1.jpg";
import team2 from "../../Images/Teams/2.jpg";
import team3 from "../../Images/Teams/3.jpg";
import team4 from "../../Images/Teams/4.jpg";

import price1 from "../../Images/Pricing/1.jpg";
import price2 from "../../Images/Pricing/2.jpg";
import price3 from "../../Images/Pricing/3.jpg";

import news1 from "../../Images/News/1.jpg";
import news2 from "../../Images/News/2.jpg";
import news3 from "../../Images/News/3.jpg";

import clients1 from "../../Images/Clients/w1.png";
import clients2 from "../../Images/Clients/w2.png";
import clients3 from "../../Images/Clients/w3.png";
import clients4 from "../../Images/Clients/w4.png";
import clients5 from "../../Images/Clients/w5.png";
import clients6 from "../../Images/Clients/w6.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="custom-Margin">
      {/* coarousel  */}

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg19} className="d-block w-100 carousel_image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Dynamic Karate Adventures</h2>
              <h4></h4>
              <p>
                Embark on thrilling karate journeys, mastering techniques and
                self-discovery.
              </p>
              <Link to="/contact">
                <button type="button" className="btn btn-danger">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img src={bg3} className="d-block w-100 carousel_image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mastering Karate Excellence</h5>
              <p>
                Unleash your potential through disciplined karate training and
                achieve greatness.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={bg2}
              className="d-block w-100 carousel_image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-danger">Karate Wisdom Unleashed</h5>
              <p className="text-danger">
                Unlock the power of karate philosophy, fostering strength and
                inner harmony.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row my-5 mx-auto w-100 sm:px-5 about">
        <div className="col-12 col-md-6 mt-1 ms-2 ">
          <h2>
            WELCOME TO{" "}
            <span className="text-danger">
              Kaizen Karate-do Association India
            </span>
          </h2>
          <p className="text-secondary">
            Welcome to the world of Kaizen Karate-do Association India , where
            discipline, respect, and skill converge. Discover the ancient
            traditions and modern techniques that empower both mind and body on
            this transformative journey.
          </p>
          <p>
            Embark on a path of self-discovery, mastering techniques that forge
            resilience and confidence.
          </p>
          <div className="row">
            <div className="col-12 col-sm-6 mt-1 d-flex justify-content-center align-items-center ">
              {/* <img src="../Images/Testimonials/1.jpg" className='rounded-circle m-2 w-50' /> */}
              <img src={testimonial1} className="rounded-circle m-2 w-50" />
              <div>
                <span className="text-danger fw-bold">Vanita Brijalani</span>
                <p>
                  {" "}
                  Cultivate mental and physical discipline through martial arts
                  training.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center ">
              {/* <img src="../Images/Testimonials/2.jpg" className='rounded-circle m-2 w-50 ' /> */}
              <img src={testimonial2} className="rounded-circle m-2 w-50 " />
              <div>
                <span className="text-danger fw-bold">Rahul Makhija</span>
                <p>
                  {" "}
                  Learn effective self-defense techniques for personal safety
                  and confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center ">
              {/* <img src="../Images/Testimonials/1.jpg" className='rounded-circle m-2 w-50' /> */}
              <img src={testimonial1} className="rounded-circle m-2 w-50" />
              <div>
                <span className="text-danger fw-bold">Suresh Raina</span>
                <p className=" text-secondary fs-6">
                  {" "}
                  Achieve holistic fitness with a martial arts regimen
                  integrating strength and flexibility.
                </p>
              </div>
            </div>
            <div className=" col-12 col-sm-6 d-flex justify-content-center align-items-center ">
              <img src={testimonial2} className="rounded-circle m-2 w-50" />
              {/* <img src="../Images/Testimonials/2.jpg" className='rounded-circle m-2 w-50' /> */}
              <div>
                <span className="text-danger fw-bold">Shruti Rai</span>
                <p>
                  {" "}
                  Develop resilience, respect, and integrity for personal growth
                  in martial arts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-md-5 mt-5">
          {/* <img src="./Images/About/4.jpg" /> */}
          <img src={about4} />
        </div>
      </div>

      <section className=" container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mt-5">Testimonials</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              "Clients rave about our exceptional service, praising our
              expertise and dedication. Discover why our testimonials speak
              volumes about satisfaction and success."
            </p>
          </div>
        </div>

        <div className="row text-center ">
          <div className="col-md-4 mb-5 mb-md-0 ">
            <div className="d-flex justify-content-center mb-4">
              {/* <img src="../Images/Gallery/gallery-md1.jpg" alt="" */}
              <img
                src="https://vocalvideo.com/resources/content/images/2021/11/what-to-say-in-a-testimonial-video.jpeg"
                alt=""
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Maria Smantha</h5>
            <h6 className="text-primary mb-3">karate</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i> "Impressed with
              personalized attention. Reliable, efficient, and customer-centric.
              A joy to work with. Highly recommended!"
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 ">
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000"
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Lisa Cudrow</h5>
            <h6 className="text-primary mb-3">karate</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>"Outstanding results,
              timely delivery. Professionalism and quality define their work.
              Highly recommend their services."
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0CIdYSO4wPWIYxRrhqBRu82ehTnwkncsdNXwYjvjxg&s"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>

            <h5 class="mb-3">John Smith</h5>
            <h6 class="text-primary mb-3">Karate</h6>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i> "Exceptional service,
              exceeded expectations. Grateful for their expertise and
              dedication. A truly satisfied customer."
            </p>
            <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="fas fa-star fa-sm text-warning"></i>
              </li>
              <li>
                <i class="far fa-star fa-sm text-warning"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="row mt-5 container mx-auto">
        <div className="col-12 col-md-5 ms-md-2 ">
          {/* <img src="../Images/Bg/bg19.jpg" width="450" width="400" height="350" /> */}
          <img src={bg19} className=" w-100" height="350" />
        </div>
        <div className="col-12 col-md-6 mt-2">
          <span className="text-danger fw-bold">
            <h2 className="fw-bold ms-2">TRAIN WITH THE LEGENDS</h2>
          </span>
          <p className="fst-italic p-2">
            "Embark on a transformative journey – Train with the Legends.
            Elevate your skills, gain invaluable insights, and unleash your
            potential alongside industry pioneers. Our cutting-edge programs
            blend expertise with inspiration, shaping you into a legend in your
            field. Join us on this path of excellence, where greatness is not
            just achieved but embraced. #TrainWithLegends #ExcellenceUnleashed"
          </p>
          <h4 className="ms-2">OUR SKILLS</h4>
        </div>
      </div>

      <p className="display-6 fw-bold text-center mt-4">
        PHOTO <span className="text-danger fw-bold">GALLERY</span>
      </p>
      <p className="text-center font-italic">
        "Capturing Moments in Pixels: Explore Our Vibrant Photo Gallery for a
        Visual Feast of Memories."
      </p>
      <div className="row mx-auto ">
      <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3 ">
    <img src={gallery1} width="400" height="200" />
  </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery3} width="400" height="200" />
        </div>

        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery4} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery5} width="400" height="200" />
        </div>

        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          {/* <img src="../Images/Gallery/gallery-md2.jpg" className=" w-100" /> */}
          <img src={gallery17} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery6} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery7} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery8} width="400" height="200" />
        </div>

        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery9} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery10} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery11} width="400" height="200" />
        </div>
        <div className="col-12 col-md-4 col-lg-3 px-0 border border-white mb-3">
          <img src={gallery12} width="400" height="200" />
        </div>
      </div>

      {/* <div className="mt-3 ">
        <button type="button" class="btn btn-danger w-100">
          <img src={clients1} width="200" height="100"></img>
          <img src="../Images/Clients/w1.png" width="200" height="100"></img>
          <img src={clients2} width="200" height="100"></img>
          <img src="../Images/Clients/w2.png" width="200" height="100"></img>
          <img src={clients3} width="200" height="100"></img>
          <img src="../Images/Clients/w3.png" width="200" height="100"></img>
          <img src={clients4} width="200" height="100"></img>
          <img src="../Images/Clients/w4.png" width="200" height="100"></img>
          <img src={clients5} width="200" height="100"></img>
          <img src="../Images/Clients/w5.png" width="200" height="100"></img>
          <img src={clients6} width="200" height="100"></img>
          <img src="../Images/Clients/w6.png" width="200" height="100"></img>
        </button>
      </div> */}
    </div>
  );
};

export default Home;
