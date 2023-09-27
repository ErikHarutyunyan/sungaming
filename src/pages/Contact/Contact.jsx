// Styles
import "./Contact.css";

import contactUs from "../../assets/img/contactUs.jpg";
import BannerPages from "../../components/BannerPages/BannerPages";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";

import faqIcon from "../../assets/img/faq.png";
import faqFramer from "../../assets/img/faq-frame.png";
import { ABOUT } from "../../router/route-path.jsx";
import { Link } from "react-router-dom";

import AccordionBox from "../../components/Accardion/index.jsx";

const Contact = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <BannerPages
        page={"Contact"}
        bg={contactUs}
        title={"Contact"}
        titleSecond={"Us"}
        desc={
          "We’d love to talk about how we can work together.Send us a message below and we’ll respond as soon as possible."
        }
      />
      <section className="contact-us bg-transparen pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h4 className="sub-title">
                  Have <span>Questions?</span>
                </h4>
                <span className="fs-two heading mb-6">
                  Can’t find what are <span>you Looking for</span> ? Get in
                  Touch
                </span>
                <p>
                  Please fill out the form and let us know about your
                  concerns.We will try our best to provide optimized solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <form action="#" className="p-4 p-sm-8">
                <h3>Write A Message</h3>
                <div className="form-inside mt-6 p-4">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          placeholder="Enter your email"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="Enter Subject"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="message">Leave us a message</label>
                        <textarea
                          cols="4"
                          rows="4"
                          id="message"
                          placeholder="Please type your Message here..."></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-4">
                      <div className="btn-area">
                        <button className="box-style btn-box">
                          Send Massage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 mt-7 mt-lg-0">
              <div className="py-8 py-sm-15 px-3 px-sm-6 get-in-touch">
                <h3>Get in Touch</h3>
                <div className="single-content d-grid mt-5 mt-sm-10">
                  <div className="single-content d-grid py-5 py-sm-7 gap-3 gap-sm-5">
                    <div className="check d-center justify-content-start gap-3">
                      <IoCallOutline size={30} color="white" />
                      <h4>Have any Questions</h4>
                    </div>
                    <p className="d-flex gap-5">
                      <span>(302) 555-0107</span>
                      <span>(704) 555-0127</span>
                    </p>
                  </div>
                  <div className="single-content d-grid py-5 py-sm-8 gap-2">
                    <div className="check d-center justify-content-start gap-3">
                      <SlLocationPin size={30} color="white" />

                      <h4>Contact Address</h4>
                    </div>
                    <p className="d-flex">
                      <span>(302) 555-0107</span>
                    </p>
                  </div>
                  <div className="single-content d-grid py-5 py-sm-8 gap-2">
                    <div className="check d-center justify-content-start gap-3">
                      <AiOutlineClockCircle size={30} color="white" />
                      <h4>Opening Hours</h4>
                    </div>
                    <p className="d-flex">
                      <span>(302) 555-0107</span>
                    </p>
                  </div>
                </div>
                <ul className="d-flex justify-content-center gap-4 social-area py-4 py-sm-8 mt-5 mt-sm-10">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      aria-label="Facebook"
                      className="d-center">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      aria-label="Instagram"
                      className="d-center">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      aria-label="Linkedin"
                      className="d-center">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      aria-label="Twitter"
                      className="d-center">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-map">
        <iframe
          src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/"
          loading="lazy"></iframe>
      </div>
      <section className="faqs-section position-relative">
        <div className="shape-area">
          <img src={faqFramer} className="shape-1" alt="icon" />
          <img src={faqFramer} className="shape-2" alt="icon" />
        </div>
        <div className="overlay pt-120 pb-120">
          <div className="container position-relative cus-z1">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-7">
                <div className="section-header text-center">
                  <h4 className="sub-title">
                    Answers to Common Questions about <span>Our Company</span>
                  </h4>
                  <span className="fs-two heading mb-6">
                    Frequently Asked Questions About{" "}
                    <span>Our Gaming Studio</span>
                  </span>
                  <p>
                    Our gaming company develops games for multiple platforms and
                    is always looking for talented individuals to join our team.
                    Quality and player satisfaction is our top priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-xl-7 col-lg-7">
                <div className="accordion" id="accordionFaqs">
                  <AccordionBox
                    title={
                      " What services does GameStorm offer for game development?"
                    }>
                    GameStorm offers a full range of services for game
                    development, including game art, design, programming, and
                    project management.
                  </AccordionBox>
                  <AccordionBox
                    title={
                      " What services does GameStorm offer for game development?"
                    }>
                    GameStorm offers a full range of services for game
                    development, including game art, design, programming, and
                    project management.
                  </AccordionBox>
                  <AccordionBox
                    title={
                      " What services does GameStorm offer for game development?"
                    }>
                    GameStorm offers a full range of services for game
                    development, including game art, design, programming, and
                    project management.
                  </AccordionBox>
                  <AccordionBox
                    title={
                      " What services does GameStorm offer for game development?"
                    }>
                    GameStorm offers a full range of services for game
                    development, including game art, design, programming, and
                    project management.
                  </AccordionBox>
                  <AccordionBox
                    title={
                      " What services does GameStorm offer for game development?"
                    }>
                    GameStorm offers a full range of services for game
                    development, including game art, design, programming, and
                    project management.
                  </AccordionBox>
                  <AccordionBox
                    title={
                      " What services does GameStorm offer for game development?"
                    }>
                    GameStorm offers a full range of services for game
                    development, including game art, design, programming, and
                    project management.
                  </AccordionBox>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 mt-8 mt-lg-0">
                <div className="faq-bg py-15 px-8 text-center">
                  <div className="icon-area">
                    <img src={faqIcon} alt="Image" />
                  </div>
                  <h3 className="visible-slowly-bottom py-5">
                    Check More Information
                  </h3>
                  <p>
                    GameStorm is a full-service gaming studio company
                    specializing in game development, art, design, and project
                    management
                  </p>
                  <div className="btn-area">
                    <div className="btn-area mt-8 alt-bg">
                      <Link to={ABOUT} className="box-style btn-box d-center">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
