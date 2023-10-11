// Styles
import { useLocation, useParams } from "react-router-dom";
import "./GameSingle.css";
import { bubble, ellipse7 } from "../../components/Images";
import circle from "../../assets/img/circle.png";
import objectImg from "../../assets/img/object-1.png";
import lineImg from "../../assets/img/line-1.png";

console.log("circle :", circle);
import gameDetails from "../../assets/img/gameDtalisBig.png";
import { IoCheckmark, IoPlay } from "react-icons/io5";
import { Suspense, useState } from "react";
import OnboardModal from "../../components/OnboardModal/OnboardModal";
import { settingsGameSingle } from "../../features/SliderConfig";
import SimpleSlider from "../../components/SimpleSlider";
import { dataGames } from "../../data/dataGames";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "../../settings/gameButtonSetings";
import useMeasure from "react-use-measure";
import { Shapes } from "../../components/Shapes/Shapes";
import CounterActive from "../../components/CounterActive/CounterActive";
import Subscribe from "../../components/Subscribe";
import Brands from "../../components/Brands";

const GameSingle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id: title } = useParams();
  const location = useLocation();
  let data = location.state?.data;
  if (!data) {
    const singleGame = dataGames.find((game) => {
      return game.path === title;
    });
    data = singleGame;
  }

  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <>
      <section
        className="banner-section inner-banner position-relative store gameDetails "
        style={{
          backgroundImage: `url(${circle}), url(${gameDetails}), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))`,
        }}>
        <div className="shape-area">
          <img src={bubble} className="shape-1" alt="icon" />
          <img src={ellipse7} className="shape-2" alt="icon" />
        </div>
        <div className="container position-relative">
          <div className="banner-content row justify-content-start">
            <div className="col-lg-8 col-md-10 justify-content-center">
              <div className="main-content">
                <h2 className="visible-slowly-bottom teact-center display-four">
                  <span className="text-center">{data.title}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-games bg-transparent top-features pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="d-grid gap-15">
                <div className="single-content">
                  <h2 className="visible-slowly-bottom display-four mb-5">
                    {data.subTitle}
                  </h2>
                  <p>{data.desc}</p>
                </div>
                <div className="single-content">
                  <ul className="ms-10 d-grid gap-4">
                    {data.features?.map((feature, i) => {
                      return (
                        <li key={i}>
                          <IoCheckmark
                            size={20}
                            color={"#0ef0ad"}
                            className="fCheck"
                          />
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10 mt-8 mt-lg-0">
              <div className="single-box cus-scrollbar gameSingleCart tab-content position-relative text-center p-3 p-md-15">
                <span className="feature-tag d-none d-sm-flex d-center categoryTag">
                  {data.category[0]}
                </span>
                <div className="singleGameImg">
                  <img src={data.imgMain} alt="" />
                </div>
                <div className="main-content gameSingleContent py-4">
                  <h3 className="visible-slowly-bottom mb-4">{data.title}</h3>
                  <ul className="d-flex flex-wrap gameCategory mt-8 fs-seven align-items-center gap-5 gap-md-10">
                    {data.platforms?.map((platform, index) => {
                      return <li key={index}>{platform} </li>;
                    })}
                  </ul>

                  {data.info && (
                    <div className="review-box infoData mt-4 mt-md-8 mb-5 mb-md-8 w-100 p-2 p-sm-4 d-center gap-3 justify-content-evenly">
                      {data?.info?.map((item, index) => (
                        <div className="single-area" key={index}>
                          {Object.keys(item).map((key) => (
                            <>
                              <div
                                className="d-flex gap-1 align-items-center mb-1 justify-content-center"
                                key={key}>
                                <h4 className="fs-four">{item[key]}</h4>
                              </div>
                              <p className="fs-seven ">{key}</p>
                            </>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  <MotionConfig transition={transition}>
                    <motion.a
                      href={data.url}
                      target="_blank"
                      className="buttonPlaySingle"
                      ref={ref}
                      initial={false}
                      animate={isHover ? "hover" : "rest"}
                      whileTap="press"
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                        press: { scale: 1.05 },
                      }}
                      onHoverStart={() => {
                        resetMousePosition();
                        setIsHover(true);
                      }}
                      onHoverEnd={() => {
                        resetMousePosition();
                        setIsHover(false);
                      }}
                      onTapStart={() => setIsPress(true)}
                      onTap={() => setIsPress(false)}
                      onTapCancel={() => setIsPress(false)}
                      onPointerMove={(e) => {
                        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                      }}>
                      <motion.div
                        className="shapesPlay"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}>
                        <div className="pink blush" />
                        <div className="blue blush" />
                        <div className="containerr">
                          <Suspense fallback={null}>
                            <Shapes
                              isHover={isHover}
                              isPress={isPress}
                              mouseX={mouseX}
                              mouseY={mouseY}
                            />
                          </Suspense>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={{
                          hover: { scale: 1.1 },
                          press: { scale: 0.85 },
                        }}
                        className="labelPlay">
                        Play Demo
                      </motion.div>
                    </motion.a>
                  </MotionConfig>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {data.video ? (
        <section className="our-focus bg-transparent game-trailers position-relative overflow-hidden pt-120">
          <div className="shape-area">
            <img src={lineImg} className="shape-1" alt="icon" />
            <img src={objectImg} className="shape-2" alt="icon" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-text text-center">
                  <h4 className="sub-title">
                    Game <span>Trailers</span>
                  </h4>
                  <span className="fs-two heading mb-6">
                    Our games build worlds, connect communities, and entertain
                    billions.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative d-center">
                  <img
                    src={data.imgMore[0]}
                    className="w-100 gameVideoPoster"
                    alt="sec-img"
                  />
                  <div className="circle-text video position-absolute">
                    <div className="text">
                      <p>
                        <span style={{ transform: "rotate(0deg)" }}>W</span>
                        <span style={{ transform: "rotate(10deg)" }}>a</span>
                        <span style={{ transform: "rotate(20deg" }}>t</span>
                        <span style={{ transform: "rotate(30deg" }}>c</span>
                        <span style={{ transform: "rotate(40deg" }}>h</span>
                        <span style={{ transform: "rotate(50deg" }}> </span>
                        <span style={{ transform: "rotate(60deg" }}>t</span>
                        <span style={{ transform: "rotate(70deg" }}>h</span>
                        <span style={{ transform: "rotate(80deg" }}>e</span>
                        <span style={{ transform: "rotate(90deg" }}> </span>
                        <span style={{ transform: "rotate(100deg" }}>v</span>
                        <span style={{ transform: "rotate(110deg" }}>i</span>
                        <span style={{ transform: "rotate(120deg" }}>d</span>
                        <span style={{ transform: "rotate(130deg" }}>e</span>
                        <span style={{ transform: "rotate(140deg" }}>o</span>
                        <span style={{ transform: "rotate(150deg" }}> </span>
                        <span style={{ transform: "rotate(160deg" }}>*</span>
                        <span style={{ transform: "rotate(170deg" }}> </span>
                        <span style={{ transform: "rotate(180deg" }}>W</span>
                        <span style={{ transform: "rotate(190deg" }}>a</span>
                        <span style={{ transform: "rotate(200deg" }}>t</span>
                        <span style={{ transform: "rotate(210deg" }}>c</span>
                        <span style={{ transform: "rotate(220deg" }}>h</span>
                        <span style={{ transform: "rotate(230deg" }}> </span>
                        <span style={{ transform: "rotate(240deg" }}>t</span>
                        <span style={{ transform: "rotate(250deg" }}>h</span>
                        <span style={{ transform: "rotate(260deg" }}>e</span>
                        <span style={{ transform: "rotate(270deg" }}> </span>
                        <span style={{ transform: "rotate(280deg" }}>v</span>
                        <span style={{ transform: "rotate(290deg" }}>i</span>
                        <span style={{ transform: "rotate(300deg" }}>d</span>
                        <span style={{ transform: "rotate(310deg" }}>e</span>
                        <span style={{ transform: "rotate(320deg" }}>o</span>
                        <span style={{ transform: "rotate(330deg" }}> </span>
                        <span style={{ transform: "rotate(340deg" }}>*</span>
                      </p>
                    </div>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                      <IoPlay size={40} color="#0ef0ad" />
                    </button>
                    <OnboardModal
                      videoPath={data.video}
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <CounterActive className={`bg-800`} />
      <section className="gaming-character ongoing-values bg-transparent gallery pt-20 pb-120">
        <div className="container">
          <div className="row section-text justify-content-center">
            <div className="col-lg-7 text-center">
              <span className="fs-two heading">Gallery</span>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-lg-12">
              {data.imgMore.length !== 0 ? (
                <SimpleSlider
                  className={"gallery-carousel"}
                  setting={settingsGameSingle}>
                  {data.imgMore?.map((imgMore, index) => {
                    return (
                      <div
                        key={index}
                        className="slide-area slick-slide slick-cloned">
                        <div className="single-slider">
                          <img src={imgMore} alt="gallery" />
                        </div>
                      </div>
                    );
                  })}
                </SimpleSlider>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <Subscribe />
    </>
  );
};

export default GameSingle;
