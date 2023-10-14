import "./Home.css";
import { Link } from "react-router-dom";
import { MdOutlineNorthEast } from "react-icons/md";

import {
  console1,
  console2,
  ellipse1,
  ellipse3,
  ellipse4,
  ellipse5,
  ellipse6,
  ellipse7,
  ellipse8,
  planet,
  topBottom,
} from "../../components/Images";

import SimpleSlider from "../../components/SimpleSlider";
import Subscribe from "../../components/Subscribe";
import Service from "../../components/Service/index.jsx";
import GamesThumb from "../../components/GamesThumb/GamesThumb";
import CounterActive from "../../components/CounterActive/CounterActive.jsx";
import Brands from "../../components/Brands";
import { settingsBlog, settingsFeatured } from "../../features/SliderConfig";
import { featuredGames } from "../../data/dataGames";
import { dataNews } from "../../data/dataNews";
import { GAMES } from "../../router/route-path";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

function Home() {
  return (
    <>
      <section className="banner-section homeBanner index-one overflow-hidden">
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
                        <span>Building Sun Gaming Worlds</span>
                      </h3>
                      <span className="display-one">
                        Modern iGaming
                        <br />
                        <span className="index-module_type__E-SaG typed d-inline-block">
                          content
                        </span>
                      </span>
                      <p className="fs-four">
                        We uplift our passion creating a perfectly tailored
                        range of products with hugely engaging game features,
                        appealing design and courage to go beyond the limits of
                        the ordinary.
                      </p>
                    </div>
                    <div className="btn-area alt-bg undefined">
                      <Link to={GAMES} className="box-style btn-box d-center">
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
                      const { id, title, imgMain, path } = featuredItem;
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
                                  to={`${GAMES}/${path}`}>
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

      <Service />
      <CounterActive />

      <GamesThumb />

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
              {dataNews?.slice(1, 5).map((newsItem) => {
                const { id, title, data, imgMain } = newsItem;
                return (
                  <div
                    key={id}
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
                            src={imgMain}
                          />
                        </div>
                        <div className="position-absolute cus-position bottom-0 start-0">
                          <div className="content-box p-3 p-sm-6">
                            <div className="top-bar d-flex align-items-center gap-3">
                              <h5>News</h5>
                              <span>{data}</span>
                            </div>
                            <a href="/blog-single">
                              <h4 className="mt-3">{title}</h4>
                            </a>
                            <a
                              className="end-area mt-8 d-center"
                              href="/blog-single">
                              <MdOutlineNorthEast />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </SimpleSlider>
          </div>
        </div>
      </section>
      <Brands />
      <Subscribe />
    </>
  );
}

export default Home;
