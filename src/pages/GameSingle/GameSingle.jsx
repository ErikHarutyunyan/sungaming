// Styles
import { useLocation } from "react-router-dom";
import "./GameSingle.css";
import { blogsImg1, bubble, ellipse7 } from "../../components/Images";
import circle from "../../assets/img/circle.png";
import objectImg from "../../assets/img/object-1.png";
import lineImg from "../../assets/img/line-1.png";
import videoBg from "../../assets/img/video-bg.png";

console.log("circle :", circle);
import gameDetalis from "../../assets/img/gameDtalisBig.png";
import { IoPlay } from "react-icons/io5";
import { useState } from "react";
import OnboardModal from "../../components/OnboardModal/OnboardModal";
import { MdOutlineNorthEast } from "react-icons/md";
import { settingsBlog, settingsGameSingle } from "../../features/SliderConfig";
import SimpleSlider from "../../components/SimpleSlider";
console.log("gameDetalis :", gameDetalis);

// const popupConfig = {
//   disableOn: 700,
//   type: "iframe",
//   mainClass: "mfp-fade",
//   removalDelay: 160,
//   preloader: false,
//   fixedContentPos: false,
// };

const GameSingle = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="banner-section inner-banner position-relative store gameDetails "
        style={{
          backgroundImage: `url(${circle}), url(${gameDetalis}), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))`,
        }}>
        <div className="shape-area">
          <img src={bubble} className="shape-1" alt="icon" />
          <img src={ellipse7} className="shape-2" alt="icon" />
        </div>
        <div className="container position-relative">
          <div className="banner-content row justify-content-center">
            <div className="col-lg-8 col-md-10 justify-content-center">
              <div className="main-content">
                <h2 className="visible-slowly-bottom teact-center display-four mb-6">
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
                    Ready to Become a Dragon Master?
                  </h2>
                  <p className="mb-3">
                    Take on the hottest dragon game and collect tons of adorable
                    fire-breathing dragons! Train them to your will, grow your
                    collection, and prove your might to claim the title of top
                    Dragon Master in the world!
                  </p>
                  <p>
                    Play on all devices and take your baby dragons wherever you
                    go! Available on Windows, iOS, and Android.Play through
                    thousands of relaxing levels, team up with your friends in
                    Clubs, and win prizes in daily events.
                  </p>
                </div>
                <div className="single-content">
                  <ul className="ms-10 d-grid gap-4">
                    <li>Thousands of levels across multiple worlds</li>
                    <li>Challenging gameplay to train your brain</li>
                    <li>
                      Club Tournaments and other exciting ways to play with
                      friends
                    </li>
                    <li>Daily events to help you win more prizes</li>
                    <li>Free rewards every day</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10 mt-8 mt-lg-0">
              <div className="single-box tab-content position-relative text-center p-3 p-md-15">
                <div className="main-content py-4">
                  <h3 className="visible-slowly-bottom mb-4">Download Now</h3>
                  <ul className="d-flex flex-wrap mb-6 fs-seven align-items-center gap-5 gap-md-10">
                    <li>Horror Adventure</li>
                    <li>Mobile</li>
                    <li>Action RPG</li>
                    <li>PC</li>
                  </ul>
                  <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-evenly">
                    <div className="single-area">
                      <div className="d-flex gap-1 align-items-center mb-1">
                        <i className="material-symbols-outlined mat-icon">
                          star
                        </i>
                        <h4 className="fs-four">4.5</h4>
                      </div>
                      <p className="fs-seven">5.2M Reviews</p>
                    </div>
                    <div className="single-area">
                      <h4 className="fs-four mb-1">500M+</h4>
                      <p className="fs-seven">Downloads</p>
                    </div>
                  </div>

                  <p>Game includes optional in-app purchases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <img src={videoBg} className="w-100" alt="sec-img" />
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
                    videoPath="https://vimeo.com/243556536"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gaming-character ongoing-values bg-transparent gallery pt-120">
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
                className={"gallery-carousel"}
                setting={settingsGameSingle}>
                <div className="slide-area slick-slide slick-cloned">
                  <div className="single-slider">
                    <img src={blogsImg1} alt="gallery" />
                  </div>
                </div>
                <div className="slide-area slick-slide slick-cloned">
                  <div className="single-slider">
                    <img src={blogsImg1} alt="gallery" />
                  </div>
                </div>
                <div className="slide-area slick-slide slick-cloned">
                  <div className="single-slider">
                    <img src={blogsImg1} alt="gallery" />
                  </div>
                </div>
                <div className="slide-area slick-slide slick-cloned">
                  <div className="single-slider">
                    <img src={blogsImg1} alt="gallery" />
                  </div>
                </div>
                <div className="slide-area slick-slide slick-cloned">
                  <div className="single-slider">
                    <img src={blogsImg1} alt="gallery" />
                  </div>
                </div>
              </SimpleSlider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameSingle;
