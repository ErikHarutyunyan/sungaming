// Styles
import "./Services.css";

import serviceBanner from "../../assets/img/services-banner.png";
import BannerPages from "../../components/BannerPages/BannerPages";
import serviceGames1 from "../../assets/img/services-img-1.png";
import { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import objectImg from "../../assets/img/object-1.png";
import lineImg from "../../assets/img/line-1.png";

import Subscribe from "../../components/Subscribe/index";
import { brandLogo } from "../../components/Images";
const Services = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <>
      <BannerPages
        classNames={"services"}
        page={"Services"}
        bg={serviceBanner}
        title={"Our"}
        titleSecond={"Services"}
        desc={
          "Our systematic approach to art development ensures high delivery standards for games and game-based solutions, from look development to engine integration."
        }
      />

      <section className="services pt-120 pb-120">
        <div className="container">
          <div className="row section-header justify-content-center">
            <div className="col-lg-7 text-center">
              <h4 className="sub-title">
                Game <span>Design &amp; Development</span> Services
              </h4>
              <span className="fs-two heading mb-6">
                Our Comprehensive Game <span>Development Services</span>
              </span>
              <p>
                End-to-end game development, revamping, and outsourcing
                services. Immersive technology expertise for top-class gaming
                experiences
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row cus-mar">
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={serviceGames1} alt="Image" />

                <h3 className="visible-slowly-bottom position-absolute">
                  Game Art
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={serviceGames1} alt="Image" />

                <h3 className="visible-slowly-bottom position-absolute">
                  Game Art
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={serviceGames1} alt="Image" />

                <h3 className="visible-slowly-bottom position-absolute">
                  Game Art
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={serviceGames1} alt="Image" />

                <h3 className="visible-slowly-bottom position-absolute">
                  Game Art
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={serviceGames1} alt="Image" />

                <h3 className="visible-slowly-bottom position-absolute">
                  Game Art
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={serviceGames1} alt="Image" />

                <h3 className="visible-slowly-bottom position-absolute">
                  Game Art
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area our-focus index-two position-relative pt-120 pb-120">
        <div className="shape-area">
          <img src={lineImg} className="shape-1" alt="icon" />
          <img src={objectImg} className="shape-2" alt="icon" />
        </div>
        <div className="container">
          <div className="row cus-mar d-inline-flex d-center">
            <div className="col-sm-6 col-xl-3">
              <div className="single-box d-grid justify-content-center">
                <div className="counters d-center">
                  <CountUp
                    className="counter"
                    start={viewPortEntered ? null : 0}
                    end={310}
                    duration={5}
                    separator={"+"}
                    useEasing={true}>
                    {({ countUpRef }) => {
                      return (
                        <ReactVisibilitySensor
                          active={!viewPortEntered}
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall>
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span className="display-one symbol">+</span>
                </div>
                <p className="name-area fs-seven">Years in Business</p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single-box d-grid justify-content-center">
                <div className="counters d-center">
                  <CountUp
                    className="counter"
                    start={viewPortEntered ? null : 0}
                    end={310}
                    duration={5}
                    separator={"+"}
                    useEasing={true}>
                    {({ countUpRef }) => {
                      return (
                        <ReactVisibilitySensor
                          active={!viewPortEntered}
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall>
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span className="display-one symbol">+</span>
                </div>
                <p className="name-area fs-seven">Years in Business</p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single-box d-grid justify-content-center">
                <div className="counters d-center">
                  <CountUp
                    className="counter"
                    start={viewPortEntered ? null : 0}
                    end={310}
                    duration={5}
                    separator={"+"}
                    useEasing={true}>
                    {({ countUpRef }) => {
                      return (
                        <ReactVisibilitySensor
                          active={!viewPortEntered}
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall>
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span className="display-one symbol">+</span>
                </div>
                <p className="name-area fs-seven">Years in Business</p>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single-box d-grid justify-content-center">
                <div className="counters d-center">
                  <CountUp
                    className="counter"
                    start={viewPortEntered ? null : 0}
                    end={310}
                    duration={5}
                    separator={"+"}
                    useEasing={true}>
                    {({ countUpRef }) => {
                      return (
                        <ReactVisibilitySensor
                          active={!viewPortEntered}
                          onChange={(isVisible) => {
                            if (isVisible) {
                              setViewPortEntered(true);
                            }
                          }}
                          delayedCall>
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span className="display-one symbol">+</span>
                </div>
                <p className="name-area fs-seven">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center section-text">
            <div className="col-lg-6 text-center">
              <h4 className="sub-title">
                A Simple yet Powerful and efficient <span>Process</span>
              </h4>
              <span className="fs-two heading mb-4">
                Our Game <span>Development Process</span>
              </span>
              <p className="mb-4">
                Take your game development for next level in 10 simple step.
                Always work Done By the Following Process
              </p>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <i className="material-symbols-outlined mat-icon">
                  double_arrow
                </i>
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    edit_document{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Script Writing</h4>
                  <p>
                    We start by sketching the script using your instructions as
                    a guide, and we then wait for your approval before moving.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <i className="material-symbols-outlined mat-icon">
                  double_arrow
                </i>
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    burst_mode{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Story Board</h4>
                  <p>
                    We draw a representation of your work that shows the camera
                    angles and the script.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <i className="material-symbols-outlined mat-icon">
                  double_arrow
                </i>
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    view_in_ar{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">3D Modeling</h4>
                  <p>
                    We create the objects, people, settings, and other things
                    that go into creating your video.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <i className="material-symbols-outlined mat-icon">
                  double_arrow
                </i>
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <i className="material-symbols-outlined fs-two">
                    {" "}
                    auto_awesome_motion{" "}
                  </i>
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Animation</h4>
                  <p>
                    After creating the animations and adding voiceovers and
                    sound effects, we turn the project over.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-game-features benefits pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center section-text">
            <div className="col-lg-6 text-center">
              <h4 className="sub-title">
                Client-Centric <span>Creativity</span>
              </h4>
              <span className="fs-two heading mb-4">
                Our Fundamental Benefits in{" "}
                <span>Game ART and Development</span>
              </span>
              <p className="mb-4">
                A client-centric approach coupled with creative freedom,
                professional experimentation, and a willingness to create beyond
                the limits makes us a great partner for businesses looking to
                deliver a product that stands out.
              </p>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <i className="material-symbols-outlined fs-three">
                      {" "}
                      sports_esports{" "}
                    </i>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">
                      Customized Game Art and Development
                    </h5>
                    <p>
                      All our services, from art creation to a full-fledged
                      game, are implemented using flexible methodologies and
                      taking into account all client requirements for an
                      effective result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <i className="material-symbols-outlined fs-three">
                      {" "}
                      search{" "}
                    </i>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">
                      Transparent &amp; Reliable Communication
                    </h5>
                    <p>
                      The client has constant access &amp; the ability to
                      control entire workflow &amp; receive instant feedback on
                      any aspect of their interest, which ensures repeat
                      business in 90% of cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <i className="material-symbols-outlined fs-three">
                      {" "}
                      verified{" "}
                    </i>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">
                      Commitment to Global Quality Standards
                    </h5>
                    <p>
                      Whether it's quality or security standards, our customers
                      don't have to worry: we follow the latest innovations in
                      data protection and always adhere to global quality
                      standards for world-class products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <i className="material-symbols-outlined fs-three">
                      {" "}
                      military_tech{" "}
                    </i>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">
                      Proven Track Record in Different Styles
                    </h5>
                    <p>
                      A team of 350+ professional artists and developers with
                      extensive experience in both casual and AAA projects of
                      various styles and genres can cover the volume of almost
                      any project.
                    </p>
                  </div>
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

export default Services;
