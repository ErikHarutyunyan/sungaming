import {
  planet,
  console1,
  console2,
  ellipse1,
  ellipse3,
  ellipse6,
  ellipse4,
  ellipse5,
  topBottom,
  brandLogo,
  blogsImg1,
  ellipse7,
  ellipse8,
} from "../../components/Images";
import {MdOutlineArrowForward, MdOutlineNorthEast} from "react-icons/md";
import Subscribe from "../../components/Subscribe";
import {
  settingsBlog,
  settingsFeatured,
  settingsServices,
} from "../../features/SliderConfig";
import SimpleSlider from "../../components/SimpleSlider";
import Service from "../../components/Service/index.jsx";
import {GAMES} from "../../router/route-path";
import {Link} from "react-router-dom";
import {featuredGames} from "../../data/dataGames";
import GamesThumb from "../../components/GamesThumb/GamesThumb";
import CounterActive from "../../components/CounterActive/CounterActive.jsx";

function Home() {
  return (
    <>
      <section className="banner-section index-one overflow-hiden">
        <div className="shape-area">
          <img
            src={planet}
            alt="planet"
            loading="lazy"
            width="219"
            height="144"
            className="shape-1"
          />
          <img
            src={console1}
            alt="planet"
            loading="lazy"
            width="266"
            height="272"
            className="shape-2"
          />
          <img
            src={console2}
            alt="planet"
            loading="lazy"
            width="489"
            height="318"
            className="shape-3"
          />
        </div>
        <div className="ellipse-area ellipse-one position-absolute">
          <img
            src={ellipse6}
            alt="elipse6"
            loading="lazy"
            width="20"
            height="20"
            className="ellipse-1"
          />
          <img
            src={ellipse4}
            alt="elipse4"
            loading="lazy"
            width="11"
            height="16"
            className="ellipse-2"
          />
          <img
            src={ellipse5}
            alt="elipse5"
            width="9"
            height="9"
            decoding="async"
            data-nimg="1"
            className="ellipse-3"
          />
        </div>
        <div className="ellipse-area ellipse-two position-absolute">
          <img
            alt="icon"
            src={ellipse6}
            loading="lazy"
            width="20"
            height="20"
            className="ellipse-1"
          />
          <img
            alt="icon"
            src={ellipse3}
            loading="lazy"
            width="20"
            height="20"
            className="ellipse-3"
          />
          <img
            alt="icon"
            src={ellipse4}
            loading="lazy"
            width="11"
            height="16"
            className="ellipse-4"
          />
          <img
            alt="icon"
            src={ellipse1}
            loading="lazy"
            width="13"
            height="12"
            className="ellipse-2"
          />
          <img
            alt="icon"
            src={ellipse5}
            loading="lazy"
            width="9"
            height="9"
            className="ellipse-5"
          />
        </div>
        <div className="ellipse-area ellipse-three position-absolute">
          <img
            alt="icon"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            className="ellipse-1"
            src={ellipse6}
          />
        </div>
        <div className="ellipse-area ellipse-four position-absolute">
          <img
            alt="icon"
            src={ellipse6}
            loading="lazy"
            width="20"
            height="20"
            className="ellipse-1"
          />
          <img
            alt="icon"
            src={ellipse1}
            loading="lazy"
            width="20"
            height="20"
            className="ellipse-2"
          />
          <img
            alt="icon"
            src={ellipse3}
            loading="lazy"
            width="10"
            height="10"
            className="ellipse-3"
          />
        </div>
        <div className="overlay overflow-hidden">
          <div className="banner-content position-relative">
            <div className="container">
              <div className="row justify-content-between justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="main-content">
                    <div className="mb-8">
                      <h3 className="visible-slowly-bottom sub-title">
                        <span>Building Gaming Worlds</span>
                      </h3>
                      <span className="display-one">
                        We Craft Games
                        <br/>
                        <span className="index-module_type__E-SaG typed d-inline-block">
                          Entertai
                        </span>
                      </span>
                      <p className="fs-four">
                        Developing games that are imaginative, fun and bringing
                        colors to the gaming world
                      </p>
                    </div>
                    <div className="btn-area alt-bg undefined">
                      <Link
                        to={GAMES}
                        className="box-style btn-box d-center"
                        href="/game">
                        Explore Our Games
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mt-10 mt-lg-0 col-10">
                  <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                    <img
                      alt="Image"
                      loading="lazy"
                      width="33"
                      height="29"
                      src={topBottom}
                    />
                    <h4 className="mb-1">Featured Games</h4>
                  </div>
                  <SimpleSlider
                    setting={settingsFeatured}
                    className={"game-carousel pb-20 slick-initialized"}>
                    {featuredGames.map((featuredItem) => {
                      const {id, title, imgMain} = featuredItem;
                      return (
                        <div
                          key={id}
                          className="slide-area"
                          style="width:100%;display:inline-block">
                          <div className="single-slider p-3 p-sm-5">
                            <div className="thumb-wrapper">
                              <div className="thumb ">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width="392"
                                  height="491"
                                  src={imgMain}
                                />
                              </div>
                              <div className="app-download-title pt-5 pb-3 text-center">
                                <h3>{title}</h3>
                              </div>
                              <div className="link-item-featured app-download d-flex gap-5 align-items-center">
                                <Link
                                  className="text-decoration-underline"
                                  to={`${GAMES}/${id}`}>
                                  Detal Game
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </SimpleSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services pt-120">
        <div className="container overflow-hidden">
          <div className="row align-items-center section-text">
            <div className="col-lg-4">
              <h4 className="sub-title">
                Our
                <span>Provide</span>
              </h4>
              <span className="fs-two heading">
                Next Level <span>Services</span>
              </span>
            </div>
            <div className="col-lg-6">
              <p>
                Gamestorm Studios provides end-to-end services for clients
                wishing to employ game development businesses skilled in
                Unity3D, Unreal, PlayCanvas, blockchain, game design, VR, NFT,
                metaverse, and more.
              </p>
            </div>
          </div>
          <SimpleSlider
            setting={settingsServices}
            className="services-carousel">
            {/* <div className="slide-area" style="width:100%;display:inline-block">
              <div className="single-slider box-style box-first p-5 px-xl-9 py-xl-10">
                <div className="icon-box d-center">
                  <svg
                    viewBox="0 0 90.32267761230469 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1.1123482605979957)">
                      <g>
                        <path
                          d="M9.4,77v4.4c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8v-4.3   c-3.7,3.9-11.3,8.6-26.6,8.6C21.8,86.3,13.4,80.9,9.4,77z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M64.8,64.9c-3.7,3.9-11.3,8.6-26.6,8.6c-16.4,0-24.8-5.4-28.8-9.3v5.1c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3   c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8V64.9z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M64.5,34.3c14.3-0.5,26-7,26-14.6C90.6,11.7,77.9,5,62.9,5s-27.7,6.7-27.7,14.7c0,1.8,0.7,3.6,1.9,5.2   C49.1,24.9,59.3,28.6,64.5,34.3z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M37.1,28.4c-15,0-27.7,6.7-27.7,14.7c0,7.9,12.7,14.7,27.7,14.7S64.8,51,64.8,43C64.8,35.1,52.1,28.4,37.1,28.4z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M68.3,50v7c0,0.3,0,0.6,0,0.9h0v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-4.9C87.2,45,80.7,49.2,68.3,50z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M64.8,51.5c-5.1,5.8-15.5,9.7-27.7,9.7s-22.5-3.9-27.7-9.7v5c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3   c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8V51.5z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M66.9,37.6c0.9,1.7,1.3,3.5,1.3,5.4c0,0.7-0.1,1.4-0.2,2.1h0.2v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-5.5   C86,33.3,77.3,36.9,66.9,37.6z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          d="M68.3,62.8v7c0,0.1,0,0.2,0,0.2h0v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-4.3C87.2,57.9,80.7,62,68.3,62.8   z"
                          transform="translate(-9.39999771118164,-5)"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Free Bet and Tournament Service</h3>
                  <p>
                    Integrate our REST API to guarantee high player engagement
                    and provide in-game bonuses for existing and new players.{" "}
                  </p>
                  <div className="link-area mt-8">
                    <a
                      className="d-flex align-items-center"
                      href="our-services-details">
                      Learn More
                      <MdOutlineArrowForward />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-area" style="width:100%;display:inline-block">
              <div className="single-slider box-style box-first p-5 px-xl-9 py-xl-10">
                <div className="icon-box d-center">
                  <svg
                    viewBox="0 0 92.85713958740234 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(3.5714285714285716)">
                      <title>Icons / create-new-version-icon</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        transform="translate(-350.000000, -289.000000)"
                        fill="#000000">
                        <g transform="translate(350.000000, 289.000000)">
                          <path
                            d="M11.5115978,6.04221752 C11.5038678,6.1933243 11.5,6.34592278 11.5,6.5 C11.5,8.69824711 12.2872927,10.5954934 13.8458996,12.1541004 C14.7267425,13.0349432 15.715744,13.6694347 16.8061102,14.0546906 L11.9166667,16.4270833 C11.6874989,16.5416672 11.3819464,16.5989583 11,16.5989583 C10.6180536,16.5989583 10.3125011,16.5416672 10.0833333,16.4270833 L0.401041667,11.7291667 C0.133679219,11.6145828 0,11.471355 0,11.2994792 C0,11.1276033 0.133679219,10.9843756 0.401041667,10.8697917 L10.0833333,6.171875 C10.3125011,6.05729109 10.6180536,6 11,6 C11.1892969,6 11.3598291,6.01407244 11.5115978,6.04221752 Z M21.5989583,16.5416667 C21.8663208,16.6562506 22,16.8090268 22,17 C22,17.1909732 21.8663208,17.3437494 21.5989583,17.4583333 L11.9166667,22.0989583 C11.6111096,22.2517369 11.3055571,22.328125 11,22.328125 C10.6944429,22.328125 10.3888904,22.2517369 10.0833333,22.0989583 L0.401041667,17.4583333 C0.133679219,17.3437494 0,17.1909732 0,17 C0,16.8090268 0.133679219,16.6562506 0.401041667,16.5416667 C1.43229682,16.0451364 2.06249885,15.7395839 2.29166667,15.625 C2.52083448,15.4722215 2.76909589,15.4722215 3.03645833,15.625 L10.0833333,19.0625 C10.3125011,19.1770839 10.6180536,19.234375 11,19.234375 C11.3819464,19.234375 11.6874989,19.1770839 11.9166667,19.0625 C16.5382176,16.8090165 18.9253465,15.6440976 19.078125,15.5677083 C19.2690982,15.4913191 19.4409715,15.4913191 19.59375,15.5677083 L21.5989583,16.5416667 Z M21.5989583,22.2708333 C21.8663208,22.3854172 22,22.528645 22,22.7005208 C22,22.8723967 21.8663208,23.0156244 21.5989583,23.1302083 L11.9166667,27.828125 C11.6874989,27.9427089 11.3819464,28 11,28 C10.6180536,28 10.3125011,27.9427089 10.0833333,27.828125 L0.401041667,23.1302083 C0.133679219,23.0156244 0,22.8723967 0,22.7005208 C0,22.528645 0.133679219,22.3854172 0.401041667,22.2708333 C1.43229682,21.7361084 2.06249885,21.4114589 2.29166667,21.296875 C2.48263984,21.1822911 2.73090125,21.2013881 3.03645833,21.3541667 L10.0833333,24.734375 C10.3125011,24.8489589 10.6180536,24.90625 11,24.90625 C11.3819464,24.90625 11.6874989,24.8489589 11.9166667,24.734375 C16.5382176,22.5190861 18.9253465,21.3732643 19.078125,21.296875 C19.2690982,21.2204857 19.4409715,21.2204857 19.59375,21.296875 L21.5989583,22.2708333 Z M14.90625,1.90625 C16.1770897,0.635410312 17.7083244,0 19.5,0 C21.2916756,0 22.8229103,0.635410312 24.09375,1.90625 C25.3645897,3.17708969 26,4.70832438 26,6.5 C26,8.29167562 25.3645897,9.82291031 24.09375,11.09375 C22.8229103,12.3645897 21.2916756,13 19.5,13 C17.7083244,13 16.1770897,12.3645897 14.90625,11.09375 C13.6354103,9.82291031 13,8.29167562 13,6.5 C13,4.70832438 13.6354103,3.17708969 14.90625,1.90625 Z M22.84375,7.15625 L22.84375,5.84375 L20.15625,5.84375 L20.15625,3.15625 L18.84375,3.15625 L18.84375,5.84375 L16.15625,5.84375 L16.15625,7.15625 L18.84375,7.15625 L18.84375,9.84375 L20.15625,9.84375 L20.15625,7.15625 L22.84375,7.15625 Z"
                            transform="translate(0,0)"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Seamless API integration</h3>
                  <p>
                    Get your source account updated in real time, reduce the
                    time and costs of software development service and increase
                    reliability to fit regulated market requirements.
                  </p>
                  <div className="link-area mt-8">
                    <a
                      className="d-flex align-items-center"
                      href="our-services-details">
                      Learn More
                      <MdOutlineArrowForward />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-area" style="width:100%;display:inline-block">
              <div className="single-slider box-style box-first p-5 px-xl-9 py-xl-10">
                <div className="icon-box d-center">
                  <svg
                    viewBox="0 0 99.87355041503906 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1.2706488188487848)">
                      <g>
                        <path
                          fill="#000000"
                          d="M39.5,0.5C17.8,0.5,0.2,18.2,0.2,39.9s17.6,39.3,39.3,39.3s39.3-17.6,39.3-39.3   C78.9,18.2,61.3,0.5,39.5,0.5z M57.3,56.5c-0.8,1.1-2,1.7-3.2,1.7c-0.8,0-1.6-0.2-2.3-0.7L37.3,47.3c-0.1-0.1-0.1-0.2-0.2-0.2   c-0.2-0.2-0.4-0.4-0.6-0.6c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.1-0.1-0.2-0.1-0.3v-25   c0-2.2,1.8-4,4-4s4,1.8,4,4v23l12.9,9C58.2,52.3,58.6,54.7,57.3,56.5z"
                          transform="translate(-0.20000000298023224,-0.5)"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">24/7 product support</h3>
                  <p>
                    Get complete consultation, receive technical support and
                    account management on a 24/7 basis.
                  </p>
                  <div className="link-area mt-8">
                    <a
                      className="d-flex align-items-center"
                      href="our-services-details">
                      Learn More
                      <MdOutlineArrowForward />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-area" style="width:100%;display:inline-block">
              <div className="single-slider box-style box-first p-5 px-xl-9 py-xl-10">
                <div className="icon-box d-center">
                  <svg
                    viewBox="0 0 78.56375885009766 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1.1216662878487065)">
                      <path
                        d="M49.75,86.562V12.035c0,0,16.451,1.083,28.933,5.355c0,0-0.149,13.336-0.147,26.567  c0.004,18.437-14.132,38.17-28.785,41.837 M84.771,12.555C69.664,7.38,50.728,5.925,49.75,5.925c-1.088,0-19.915,1.455-35.021,6.63  c0,0,0.108,16.142,0.104,32.159C14.83,67.034,32.011,90.641,49.75,95.078c17.738-4.438,34.895-28.044,34.891-50.364  C84.639,28.697,84.771,12.555,84.771,12.555"
                        transform="translate(-14.729000091552734,-5.925000190734863)"></path>
                    </g>
                  </svg>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Provable fairness system</h3>
                  <p>
                    Sun Gaming platform integration also introduces the
                    “provable fairness” feature to verify fair play ensuring the
                    game outcomes are determined 5 rounds in advance and players
                    receive it in the coded form.{" "}
                  </p>
                  <div className="link-area mt-8">
                    <a
                      className="d-flex align-items-center"
                      href="our-services-details">
                      Learn More
                      <MdOutlineArrowForward />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="slide-area" style="width:100%;display:inline-block">
              <div className="single-slider box-style box-first p-5 px-xl-9 py-xl-10">
                <div className="icon-box d-center">
                  <svg
                    viewBox="0 0 100 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(6.25)">
                      <path
                        d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-3 4l8 4-8 4v-8z"
                        transform="translate(0,0)"></path>
                    </g>
                  </svg>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Jackpot engine</h3>
                  <p>
                    Our Jackpot engine is a perfect solution for all our
                    partners that want to boost the loyalty level of their
                    players and maximise their attraction to our games.{" "}
                  </p>
                  <div className="link-area mt-8">
                    <a
                      className="d-flex align-items-center"
                      href="our-services-details">
                      Learn More
                      <MdOutlineArrowForward/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-area" style="width:100%;display:inline-block">
              <div className="single-slider box-style box-first p-5 px-xl-9 py-xl-10">
                <div className="icon-box d-center">
                  <svg
                    viewBox="0 0 99.99996185302734 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(3.125)">
                      <path
                        d="M64.8,46.51h-1.33c-0.15,0-0.29-0.11-0.34-0.27c-0.29-1.01-0.69-1.98-1.19-2.88c-0.08-0.14-0.05-0.32,0.05-0.42l0.95-0.95  c0.46-0.47,0.46-1.22,0-1.68l-3.25-3.25c-0.31-0.3-0.63-0.37-0.85-0.37c-0.22,0-0.54,0.07-0.85,0.37l-0.94,0.95  c-0.1,0.1-0.28,0.12-0.42,0.04c-0.89-0.5-1.86-0.9-2.89-1.2c-0.15-0.04-0.25-0.17-0.25-0.33v-1.33c0-0.66-0.54-1.19-1.2-1.19h-4.6  c-0.65,0-1.18,0.53-1.18,1.19v1.33c0,0.15-0.12,0.29-0.27,0.33c-1.01,0.29-1.98,0.69-2.89,1.2c-0.14,0.08-0.32,0.06-0.42-0.04  l-0.88-0.88c-0.44-0.52-1.43-0.45-1.74-0.07l-3.19,3.2c-0.27,0.22-0.42,0.54-0.42,0.89c0,0.34,0.15,0.67,0.36,0.84l0.93,0.94  c0.11,0.11,0.13,0.29,0.05,0.43c-0.5,0.9-0.9,1.87-1.2,2.89c-0.04,0.15-0.17,0.26-0.32,0.26h-1.34c-0.65,0-1.18,0.54-1.18,1.19v4.6  c0,0.66,0.53,1.19,1.18,1.19h1.34c0.14,0,0.28,0.11,0.33,0.26c0.29,1.02,0.69,2,1.19,2.89c0.08,0.15,0.07,0.31-0.04,0.42l-0.95,0.95  c-0.47,0.47-0.47,1.21,0.01,1.68l3.2,3.2c0.22,0.26,0.55,0.41,0.89,0.41c0.34,0,0.66-0.15,0.84-0.36L42.93,62  c0.11-0.11,0.29-0.13,0.42-0.05c0.95,0.52,1.93,0.93,2.88,1.19c0.16,0.05,0.28,0.19,0.28,0.34v1.34c0,0.65,0.53,1.18,1.18,1.18h4.6  c0.66,0,1.2-0.53,1.2-1.18v-1.34c0-0.15,0.11-0.29,0.25-0.34c0.98-0.27,1.95-0.67,2.88-1.19c0.14-0.08,0.32-0.06,0.43,0.05l1,1  c0.46,0.39,1.12,0.39,1.63-0.06l3.31-3.31c0.39-0.45,0.39-1.11-0.05-1.63l-0.95-0.94c-0.11-0.11-0.13-0.28-0.05-0.42  c0.5-0.9,0.9-1.87,1.19-2.88c0.05-0.15,0.19-0.27,0.34-0.27h1.33c0.66,0,1.2-0.53,1.2-1.19v-4.6C66,47.05,65.46,46.51,64.8,46.51z   M54.32,55.99c-1.24,0.89-2.68,1.37-4.18,1.4h-0.15c-3.01,0-5.78-1.88-6.88-4.68c-1.13-2.89-0.32-6.22,2.02-8.28  c2.31-2.04,5.8-2.39,8.49-0.87c3.08,1.73,4.52,5.56,3.35,8.91C56.47,53.88,55.56,55.09,54.32,55.99z"
                        transform="translate(-34.0000114440918,-33.999996185302734)"></path>
                    </g>
                  </svg>
                </div>
                <div className="title-area">
                  <h3 className="mt-6 mb-3">Back Office Support</h3>
                  <p>
                    Successfully manage and track your players’ activity,
                    analyse statistics for each game and constantly keep your
                    hand on your business’ pulse with our multifunctional
                    backoffice.
                  </p>
                  <div className="link-area mt-8">
                    <a
                      className="d-flex align-items-center"
                      href="our-services-details">
                      Learn More
                      <MdOutlineArrowForward/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SimpleSlider>
        </div>
      </section>
      <Service/>
      <CounterActive/>

      <GamesThumb/>

      <section className=" about-block  recently-completed blogs gaming-character">
        <div className="shape-area">
          <img
            src={ellipse7}
            alt="elipse7"
            className="shape-1"
            loading="lazy"
            width="173"
            height="206"
          />
          <img
            src={ellipse8}
            alt="elipse8"
            className="shape-2"
            loading="lazy"
            width="128"
            height="152"
          />
        </div>
        <div className="container pt-120 pb-120">
          <div className="row section-header justify-content-center">
            <div className="col-lg-6 text-center">
              <h4 className="sub-title">
                The Latest <span>Trends and Technologies</span>
              </h4>
              <span className="fs-two heading mb-6">
                Tips and Tricks from Our <span>Game Development Experts</span>
              </span>
              <p>
                Behind the scenes, we share our game development process,
                research and development efforts, and reflections on our growth
                in the gaming industry
              </p>
            </div>
          </div>
          <div className="row cus-mar">
            <SimpleSlider setting={settingsBlog}>
              <div
                className="slide-area"
                style="width:100%;display:inline-block">
                <div className="single-box">
                  <div className="position-relative d-grid align-items-center">
                    <div className="img-box">
                      <img
                        alt="Image"
                        loading="lazy"
                        width="636"
                        height="400"
                        src={blogsImg1}
                      />
                    </div>
                    <div className="position-absolute cus-position bottom-0 start-0">
                      <div className="content-box p-3 p-sm-6">
                        <div className="top-bar d-flex align-items-center gap-3">
                          <h5>News</h5>
                          <span>25 January,2023</span>
                        </div>
                        <a href="/blog-single">
                          <h4 className="mt-3">
                            Crafting Digital Worlds with Expertise
                          </h4>
                        </a>
                        <a
                          className="end-area mt-8 d-center"
                          href="/blog-single">
                          <MdOutlineNorthEast/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slide-area"
                style="width:100%;display:inline-block">
                <div className="single-box">
                  <div className="position-relative d-grid align-items-center">
                    <div className="img-box">
                      <img
                        alt="Image"
                        loading="lazy"
                        width="636"
                        height="400"
                        src={blogsImg1}
                      />
                    </div>
                    <div className="position-absolute cus-position bottom-0 start-0">
                      <div className="content-box p-3 p-sm-6">
                        <div className="top-bar d-flex align-items-center gap-3">
                          <h5>News</h5>
                          <span>25 January,2023</span>
                        </div>
                        <a href="/blog-single">
                          <h4 className="mt-3">
                            Crafting Digital Worlds with Expertise
                          </h4>
                        </a>
                        <a
                          className="end-area mt-8 d-center"
                          href="/blog-single">
                          <MdOutlineNorthEast/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slide-area"
                style="width:100%;display:inline-block">
                <div className="single-box">
                  <div className="position-relative d-grid align-items-center">
                    <div className="img-box">
                      <img
                        alt="Image"
                        loading="lazy"
                        width="636"
                        height="400"
                        src={blogsImg1}
                      />
                    </div>
                    <div className="position-absolute cus-position bottom-0 start-0">
                      <div className="content-box p-3 p-sm-6">
                        <div className="top-bar d-flex align-items-center gap-3">
                          <h5>News</h5>
                          <span>25 January,2023</span>
                        </div>
                        <a href="/blog-single">
                          <h4 className="mt-3">
                            Crafting Digital Worlds with Expertise
                          </h4>
                        </a>
                        <a
                          className="end-area mt-8 d-center"
                          href="/blog-single">
                          <MdOutlineNorthEast/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slide-area"
                style="width:100%;display:inline-block">
                <div className="single-box">
                  <div className="position-relative d-grid align-items-center">
                    <div className="img-box">
                      <img
                        alt="Image"
                        loading="lazy"
                        width="636"
                        height="400"
                        src={blogsImg1}
                      />
                    </div>
                    <div className="position-absolute cus-position bottom-0 start-0">
                      <div className="content-box p-3 p-sm-6">
                        <div className="top-bar d-flex align-items-center gap-3">
                          <h5>News</h5>
                          <span>25 January,2023</span>
                        </div>
                        <a href="/blog-single">
                          <h4 className="mt-3">
                            Crafting Digital Worlds with Expertise
                          </h4>
                        </a>
                        <a
                          className="end-area mt-8 d-center"
                          href="/blog-single">
                          <MdOutlineNorthEast/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleSlider>
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

      <Subscribe/>
    </>
  );
}

export default Home;
