// Styles
import "./About.css";
import BannerPages from "../../components/BannerPages/BannerPages.jsx";

import {
  IoAccessibilityOutline,
  IoDiamondOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import {
  FaBalanceScale,
  FaCertificate,
  FaGavel,
  FaLightbulb,
  FaMagic,
  FaSmile,
  FaUsers,
} from "react-icons/fa";
import { settingsAbout } from "../../features/SliderConfig.jsx";
import SimpleSlider from "../../components/SimpleSlider/index.jsx";

import {
  MdOutlineDiversity1,
  MdOutlineGames,
} from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { useEffect, useRef } from "react";

import { useState } from "react";
import {
  team2,
  team3,
  team4,
  team5,
  services_img04,
  services_img02,
  services_img03,
  services_img01,
  aboutBanner,
  ab,
  aboutNftImg1,
  aboutNftImg2,
  cricleNft,
} from "../../components/Images";

import Subscribe from "../../components/Subscribe";
import Brands from "../../components/Brands";

const About = () => {
  const serviceImgs = useRef(null);

  // State to keep track of the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to add the active class to the current slide
  const updateActiveSlide = () => {
    if (serviceImgs.current) {
      // Remove active class from all child elements
      serviceImgs.current.childNodes.forEach((child, index) => {
        if (child.classList.contains("active")) {
          child.classList.remove("active");
        }
        if (index === activeSlide) {
          child.classList.add("active");
        }
      });
    }
  };

  // Function to handle slide change
  const nextSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide + 1) % serviceImgs.current.childNodes.length
    );
  };

  // Call the updateActiveSlide function when the component mounts and whenever activeSlide changes
  useEffect(() => {
    updateActiveSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide]);

  // Call the nextSlide function to change the slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BannerPages
        page={"About"}
        bg={aboutBanner}
        title={"Our Simple Is Motto Fun For"}
        titleSecond={"Everyone"}
        desc={
          "We continue to open doors to new worlds every day and we are working excitedly for creating new games and unique ideas!"
        }
        rightImg={ab}
      />
      <section className="gaming-character ongoing-values pt-120 pb-120">
        <div className="container">
          <div className="row header justify-content-center">
            <div className="col-lg-7 text-center">
              <h4 className="sub-title">
                Our Ongoing <span>Values</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our Values Inspire And <span>Drive Our Every Move</span>
              </span>
              <p>
                Our values are a reflection of our inner selves, shaped by our
                unique experiences, beliefs, aspirations, and cannot be simply
                adopted from others or chosen arbitrarily.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-12">
              <div
                className={
                  "ongoing-values-carousel slick-initialized slick-slider slick-dotted"
                }>
                <SimpleSlider setting={settingsAbout}>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaBalanceScale size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Integrity</h3>
                    <p>
                      We uphold the highest ethical standards, ensuring fairness
                      and transparency in all our operations.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaLightbulb size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Innovation</h3>
                    <p>
                      We constantly strive to innovate, delivering cutting-edge
                      solutions and experiences to our users.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaCertificate size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Excellence</h3>
                    <p>
                      We pursue excellence in everything we do, from game
                      development to customer support.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaUsers size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Teamwork</h3>
                    <p>
                      We believe in the power of collaboration, working together
                      to achieve our goals.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaSmile size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Fun and Entertainment</h3>
                    <p>
                      We aim to provide fun and entertaining experiences for our
                      players while maintaining a responsible gaming
                      environment.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaGavel size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Fair Play</h3>
                    <p>
                      Commitment to fair play, transparency, and integrity in
                      all aspects of our gambling offerings.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <FaMagic size={35} color="white" />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                </SimpleSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-vision">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Take a look</h5>
                <h2 className="title">Our vision & Mission</h2>
                <p className="text">
                  We create long term value for our partners by putting
                  innovations, data and sustainability at the very heart of our
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-vision">
                <div className="icon one">
                  <IoDiamondOutline size={35} color="white" />
                </div>
                <div className="content">
                  <h4 className="title">Uniqueness</h4>
                  <p className="text">
                    To give back to the people that support our company
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-vision">
                <div className="icon two">
                  <MdOutlineDiversity1 size={35} color="white" />
                </div>
                <div className="content">
                  <h4 className="title">Diversity</h4>
                  <p className="text">
                    To give back to the people that support our company
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-vision">
                <div className="icon three">
                  <IoAccessibilityOutline size={35} color="white" />
                </div>
                <div className="content">
                  <h4 className="title">Accessibility</h4>
                  <p className="text">
                    To give back to the people that support our company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about__area-three pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="about__title-wrap">
                <h2 className="title">
                  <i>WE ARE</i>
                  <span>developer</span>
                  <i>ern nft</i>
                  <i>
                    gam<b>ing</b>
                  </i>
                </h2>
                <div className="about__content-circle">
                  <img
                    alt="img"
                    loading="lazy"
                    width="138"
                    height="138"
                    src={cricleNft}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1">
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        super nft Gaming sits
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="about__three-images">
                <img
                  alt="img"
                  loading="lazy"
                  width="363"
                  height="487"
                  className="left"
                  src={aboutNftImg1}
                />
                <img
                  alt="img"
                  loading="lazy"
                  width="519"
                  height="382"
                  className="right"
                  src={aboutNftImg2}
                />
                <div className="about__dots">
                  <svg
                    width="109"
                    height="35"
                    viewBox="0 0 109 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0H0V7H9V0Z" fill="currentcolor"></path>
                    <path d="M24 0H15V7H24V0Z" fill="currentcolor"></path>
                    <path d="M38 0H29V7H38V0Z" fill="currentcolor"></path>
                    <path d="M53 0H44V7H53V0Z" fill="currentcolor"></path>
                    <path d="M67 0H58V7H67V0Z" fill="currentcolor"></path>
                    <path d="M80 0H71V7H80V0Z" fill="currentcolor"></path>
                    <path d="M9 14H0V21H9V14Z" fill="currentcolor"></path>
                    <path d="M24 14H15V21H24V14Z" fill="currentcolor"></path>
                    <path d="M38 14H29V21H38V14Z" fill="currentcolor"></path>
                    <path d="M53 14H44V21H53V14Z" fill="currentcolor"></path>
                    <path d="M67 14H58V21H67V14Z" fill="currentcolor"></path>
                    <path d="M80 14H71V21H80V14Z" fill="currentcolor"></path>
                    <path d="M95 14H86V21H95V14Z" fill="currentcolor"></path>
                    <path d="M109 14H100V21H109V14Z" fill="currentcolor"></path>
                    <path d="M9 28H0V35H9V28Z" fill="currentcolor"></path>
                    <path d="M24 28H15V35H24V28Z" fill="currentcolor"></path>
                    <path d="M38 28H29V35H38V28Z" fill="currentcolor"></path>
                    <path d="M53 28H44V35H53V28Z" fill="currentcolor"></path>
                    <path d="M67 28H58V35H67V28Z" fill="currentcolor"></path>
                    <path d="M80 28H71V35H80V28Z" fill="currentcolor"></path>
                    <path d="M95 28H86V35H95V28Z" fill="currentcolor"></path>
                    <path d="M109 28H100V35H109V28Z" fill="currentcolor"></path>
                  </svg>
                </div>
              </div>
              <div className="about__three-paragraph"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="team__area team-bg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section__title text-center mb-15">
                <span className="sub-title tg__animate-text ready">
                  <span>O</span>
                  <span>U</span>
                  <span>R</span>
                  <span> </span>
                  <span>T</span>
                  <span>E</span>
                  <span>A</span>
                  <span>M</span>
                  <span> </span>
                  <span>M</span>
                  <span>E</span>
                  <span>M</span>
                  <span>B</span>
                  <span>E</span>
                  <span>R</span>
                </span>
                <h3 className="title">ACTIVE TEAM MEMBERS</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="/team-details">
                    <img alt="img" loading="lazy" width="224" src={team5} />
                  </a>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <a href="/team-details">killer master</a>
                  </h4>
                  <span className="designation">Blockchain Expert</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="/team-details">
                    <img alt="img" loading="lazy" width="224" src={team2} />
                  </a>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <a href="/team-details">code expert</a>
                  </h4>
                  <span className="designation">Developer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="/team-details">
                    <img alt="img" loading="lazy" width="224" src={team3} />
                  </a>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <a href="/team-details">Diamond</a>
                  </h4>
                  <span className="designation">Art Director</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="team__item">
                <div className="team__thumb">
                  <a href="/team-details">
                    <img alt="img" loading="lazy" width="224" src={team4} />
                  </a>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <a href="/team-details">Coin</a>
                  </h4>
                  <span className="designation">Crypto Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area services__bg-color pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end align-items-xl-start">
            <div className="col-lg-6">
              <div className="section__title text-start mb-20">
                <span className="sub-title tg__animate-text ready">
                  <span>P</span>
                  <span>O</span>
                  <span>W</span>
                  <span>E</span>
                  <span>R</span>
                  <span>F</span>
                  <span>U</span>
                  <span>S</span>
                  <span>L</span>
                  <span> </span>
                  <span>E</span>
                  <span>R</span>
                  <span>V</span>
                  <span>I</span>
                  <span>C</span>
                  <span>E</span>
                  <span>S</span>
                </span>
                <h3 className="title">Our Powerful Services Done on time</h3>
              </div>
              <div className="services__wrapper">
                <div className="services__item">
                  <div className="services__icon">
                    <IoShareSocialOutline size={45} color="#0ef0ad" />
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="/service-details">Social Responsibility</a>
                    </h4>
                    <p>
                      Embracing a Better Tomorrow: Our Commitment to Social
                      Responsibility
                    </p>
                  </div>
                </div>
                <div className="services__item">
                  <div className="services__icon">
                    <MdOutlineGames size={45} color="#0ef0ad" />
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="/service-details">Gambling Aware</a>
                    </h4>
                    <p>
                      Promoting Responsible Play: Our Commitment to Gambling
                      Awareness
                    </p>
                  </div>
                </div>
                <div className="services__item">
                  <div className="services__icon">
                    <AiOutlineSafetyCertificate size={45} color="#0ef0ad" />
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="/service-details">Licences & Certifications</a>
                    </h4>
                    <p>
                      Ensuring Compliance and Trust: Our Licences &
                      Certifications
                    </p>
                  </div>
                </div>
                <div className="services__item">
                  <div className="services__icon">
                    <LuLayoutPanelLeft size={45} color="#0ef0ad" />
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="/service-details">Comprehensive Backoffice</a>
                    </h4>
                    <p>
                      Efficiency Unleashed: The Backbone of Our Comprehensive
                      Backoffice
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services__images" ref={serviceImgs}>
                <div className="services__images-item active">
                  <img src={services_img04} />
                </div>
                <div className="services__images-item ">
                  <img src={services_img02} />
                </div>
                <div className="services__images-item ">
                  <img src={services_img03} />
                </div>
                <div className="services__images-item ">
                  <img src={services_img01} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <Subscribe />
    </>
  );
};

export default About;
