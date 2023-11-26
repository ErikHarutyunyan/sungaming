import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// Package
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
// Components
import Brands from "components/Brands";
import CounterActive from "components/Counter/CounterActive";
import { OnboardModal } from "components/Modal";
import PlayButton from "components/PlayButton";
import ShapeArea from "components/ShapeArea";
import SimpleSlider from "components/Slides/SimpleSlider";
import Subscribe from "components/Subscribe";
import LazyImage from "images/LazyImage";
// Data and Configuration
import { counterActiveData } from "data/dataCounters";
import { dataGames } from "data/dataGames";
import { settingsGameSingle } from "../../features/SliderConfig";
// Images and Icons
import {
  bubble,
  circle,
  ellipse7,
  gameDetails,
  lineImg,
  objectImg,
} from "images";
import { IoCheckmark, IoPlay } from "react-icons/io5";

const GameSingle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [indexImages, setIndexImages] = useState(-1);
  const { id: title } = useParams();
  const location = useLocation();
  let data = location.state?.data;
  if (!data) {
    data = dataGames.find((game) => {
      return game.path === title;
    });
  }
  const images = data.imgMore
    ? [...data.imgMore].map((src) => ({ src }))
    : null;

  return (
    <>
      <section
        className="banner-section inner-banner position-relative store gameDetails "
        style={{
          backgroundImage: `url(${circle}), url(${gameDetails}), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))`,
        }}
      >
        <ShapeArea>
          <img src={bubble} className="shape-1" alt="icon" />
          <img src={ellipse7} className="shape-2" alt="icon" />
        </ShapeArea>
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
      <section className="our-games single-game bg-transparent top-features pt-120 pb-120">
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
                {data.features.length ? (
                  <div className="single-content">
                    <ul className="ms-10 d-grid gap-4">
                      {data.features.map((feature, i) => {
                        return (
                          <li key={`${feature}_${i}`}>
                            <IoCheckmark
                              size={20}
                              color="#0ef0ad"
                              className="fCheck"
                            />
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10 mt-8 mt-lg-0">
              <div className="single-box cus-scrollbar gameSingleCart tab-content position-relative text-center p-3 p-md-10">
                {data.category[0] ? (
                  <span className="feature-tag d-none d-sm-flex d-center categoryTag">
                    {data.category[0]}
                  </span>
                ) : null}
                <div className="singleGameImg">
                  <LazyImage alt={data.title} src={data.imgMain} />
                </div>
                <div className="main-content gameSingleContent py-4">
                  <h3 className="visible-slowly-bottom mb-4">{data.title}</h3>
                  {data.platforms.length !== 0 ? (
                    <ul className="d-flex flex-wrap gameCategory mt-8 fs-seven align-items-center gap-5 gap-md-10">
                      {data.platforms.map((platform, index) => {
                        return (
                          <li key={`${platform}_${index}`}>{platform} </li>
                        );
                      })}
                    </ul>
                  ) : null}
                  {data.info.length !== 0 ? (
                    <div className="review-box infoData mt-4 mt-md-8 mb-5 mb-md-8 w-100 p-2 p-sm-4 d-center gap-3 justify-content-evenly">
                      {data.info.map((item, index) => (
                        <div className="single-area" key={`${item}_${index}`}>
                          {Object.keys(item).map((key) => (
                            <div key={key}>
                              <div className="d-flex gap-1 align-items-center mb-1 justify-content-center">
                                <h4 className="fs-four">{item[key]}</h4>
                              </div>
                              <p className="fs-seven ">{key}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <PlayButton url={data.url} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {data.video ? (
        <section className="our-focus bg-transparent game-trailers position-relative overflow-hidden pt-120 pb-20">
          <ShapeArea>
            <img src={lineImg} className="shape-1" alt="icon" />
            <img src={objectImg} className="shape-2" alt="icon" />
          </ShapeArea>
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
                      className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute"
                    >
                      <IoPlay size={40} color="#0ef0ad" />
                    </button>
                    <OnboardModal
                      video={data.video}
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
      <CounterActive className={`bg-800`} counterData={counterActiveData} />
      {data.imgMore.length !== 0 ? (
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
                <SimpleSlider
                  className="gallery-carousel"
                  setting={settingsGameSingle}
                >
                  {data.imgMore.map((imgMore, index) => {
                    return (
                      <div
                        key={`img_${index}`}
                        className="slide-area slick-slide slick-cloned"
                      >
                        <div className="single-slider">
                          <LazyImage
                            alt="gallery"
                            src={imgMore}
                            onClick={() => {
                              setIndexImages(index);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </SimpleSlider>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <Brands />
      <Subscribe />
      {data.imgMore.length !== 0 ? (
        <Lightbox
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .9)" },
          }}
          index={indexImages}
          slides={images}
          open={indexImages >= 0}
          close={() => setIndexImages(-1)}
          plugins={[Zoom]}
        />
      ) : null}
    </>
  );
};

export default GameSingle;
