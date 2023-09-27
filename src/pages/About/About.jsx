// Styles
import "./About.css";
import BannerPages from "../../components/BannerPages/BannerPages.jsx";
import aboutBanner from "../../assets/img/aboutBanner.jpg";
import ab from "../../assets/img/ab.webp";
import { BiFlag } from "react-icons/bi";
import {
  IoAccessibilityOutline,
  IoDiamondOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { settingsAbout, settingsBlog } from "../../features/SliderConfig.jsx";
import SimpleSlider from "../../components/SimpleSlider/index.jsx";
import aboutNftImg1 from "../../assets/img/aboutNftImg1.webp";
import aboutNftImg2 from "../../assets/img/aboutNftImg2.webp";
import cricleNft from "../../assets/img/cricleNft.svg";
import teamImg from "../../assets/img/team01.webp";
import { MdOutlineDiversity1, MdOutlineGames, MdOutlineNorthEast } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { useEffect, useRef } from "react";
import services_img04 from "../../assets/img/services_img04.webp";
import services_img02 from "../../assets/img/services_img02.webp";
import services_img03 from "../../assets/img/services_img03.webp";
import services_img01 from "../../assets/img/services_img01.webp";
import { useState } from "react";
import { blogsImg1, brandLogo, ellipse7, ellipse8 } from "../../components/Images";
import Subscribe from "../../components/Subscribe";

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
                }
              >
                <SimpleSlider setting={settingsAbout}>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
                    </div>
                    <h3 className="mt-6 pb-2">Creativity</h3>
                    <p>
                      Striving to bring imagination, original ideas, and
                      excitement to everything we do.
                    </p>
                  </div>
                  <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                    <div className="icon-box d-center">
                      <BiFlag />
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
      <section class="our-vision">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="section-heading">
                <h5 class="subtitle">Take a look</h5>
                <h2 class="title">Our vision & Mission</h2>
                <p class="text">
                  We create long term value for our partners by putting
                  innovations, data and sustainability at the very heart of our
                  business.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-vision">
                <div class="icon one">
                  <IoDiamondOutline size={35} color="white" />
                </div>
                <div class="content">
                  <h4 class="title">Uniqueness</h4>
                  <p class="text">
                    To give back to the people that support our company
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-vision">
                <div class="icon two">
                  <MdOutlineDiversity1 size={35} color="white" />
                </div>
                <div class="content">
                  <h4 class="title">Diversity</h4>
                  <p class="text">
                    To give back to the people that support our company
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-vision">
                <div class="icon three">
                  <IoAccessibilityOutline size={35} color="white" />
                </div>
                <div class="content">
                  <h4 class="title">Accessibility</h4>
                  <p class="text">
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
                    version="1.1"
                  >
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
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                    <img alt="img" loading="lazy" width="224" src={teamImg} />
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
                    <img alt="img" loading="lazy" width="224" src={teamImg} />
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
                    <img alt="img" loading="lazy" width="224" src={teamImg} />
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
                    <img alt="img" loading="lazy" width="224" src={teamImg} />
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
          </div>
        </div>
      </section>
      <section class="services-area services__bg-color pt-120 pb-120">
        <div class="container">
          <div class="row align-items-end align-items-xl-start">
            <div class="col-lg-6">
              <div class="section__title text-start mb-20">
                <span class="sub-title tg__animate-text ready">
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
                <h3 class="title">Our Powerful Services Done on time</h3>
              </div>
              <div class="services__wrapper">
                <div class="services__item">
                  <div class="services__icon">
                    <IoShareSocialOutline size={45} color="#0ef0ad" />
                  </div>
                  <div class="services__content">
                    <h4 class="title">
                      <a href="/service-details">Social Responsibility</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sitamet const adipiscng Duis eletum
                      sollicitudin is yaugue euismods
                    </p>
                  </div>
                </div>
                <div class="services__item">
                  <div class="services__icon">
                    <MdOutlineGames size={45} color="#0ef0ad" />
                  </div>
                  <div class="services__content">
                    <h4 class="title">
                      <a href="/service-details">Gambling Aware</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sitamet const adipiscng Duis eletum
                      sollicitudin is yaugue euismods
                    </p>
                  </div>
                </div>
                <div class="services__item">
                  <div class="services__icon">
                    <AiOutlineSafetyCertificate size={45} color="#0ef0ad" />
                  </div>
                  <div class="services__content">
                    <h4 class="title">
                      <a href="/service-details">Licences & Certifications</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sitamet const adipiscng Duis eletum
                      sollicitudin is yaugue euismods
                    </p>
                  </div>
                </div>
                <div class="services__item">
                  <div class="services__icon">
                    <LuLayoutPanelLeft size={45} color="#0ef0ad" />
                  </div>
                  <div class="services__content">
                    <h4 class="title">
                      <a href="/service-details">Comprehensive Backoffice</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sitamet const adipiscng Duis eletum
                      sollicitudin is yaugue euismods
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="services__images" ref={serviceImgs}>
                <div class="services__images-item active">
                  <img src={services_img04} />
                </div>
                <div class="services__images-item ">
                  <img src={services_img02} />
                </div>
                <div class="services__images-item ">
                  <img src={services_img03} />
                </div>
                <div class="services__images-item ">
                  <img src={services_img01} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-partners pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h4 className="sub-title">
                  <span>Trusted</span> By
                </h4>
                <span className="fs-two heading mb-6">
                  We are happy to work with <span>global largest brands</span>
                </span>
                <p>
                  We are proud to support industry leaders around the world.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="all-items mb-7 d-flex gap-3 justify-content-between flex-wrap">
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
              </div>
              <div className="all-items d-flex gap-3 justify-content-between flex-wrap">
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
                <div className="thumb">
                  <img
                    alt="Image"
                    loading="lazy"
                    width="207"
                    height="46"
                    src={brandLogo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default About;
