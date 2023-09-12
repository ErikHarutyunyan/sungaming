import {useState} from 'react'
import './App.css'
import Slider from "react-slick";

import planet from "./assets/img/planet.webp"
import console1 from "./assets/img/console-1.webp"
import console2 from "./assets/img/console-2.webp"
import ellipse1 from "./assets/img/ellipse-1.png"
import ellipse3 from "./assets/img/ellipse-3.png"
import ellipse6 from "./assets/img/ellipse-6.webp"
import ellipse4 from "./assets/img/ellipse-4.webp"
import ellipse5 from "./assets/img/ellipse-5.webp"
import topBottom from "./assets/img/top-bottom.png"
import gameSlide from "./assets/img/gameSlide.webp"

function App() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section className="banner-section index-one overflow-hiden">
        <div className="shape-area">
          <img src={planet} alt="planet" loading="lazy" width="219" height="144" className="shape-1"/>
          <img src={console1} alt="planet" loading="lazy" width="266" height="272" className="shape-2"/>
          <img src={console2} alt="planet" loading="lazy" width="489" height="318" className="shape-3"/>
        </div>
        <div className="ellipse-area ellipse-one position-absolute">
          <img src={ellipse6} alt="elipse6" loading="lazy" width="20" height="20" className="ellipse-1"/>
          <img src={ellipse4} alt="elipse4" loading="lazy" width="11" height="16" className="ellipse-2"/>
          <img src={ellipse5} alt="elipse5" width="9" height="9" decoding="async" data-nimg="1" className="ellipse-3"/>
        </div>
        <div className="ellipse-area ellipse-two position-absolute">
          <img alt="icon" src={ellipse6} loading="lazy" width="20" height="20" className="ellipse-1"/>
          <img alt="icon" src={ellipse3} loading="lazy" width="20" height="20" className="ellipse-3"/>
          <img alt="icon" src={ellipse4} loading="lazy" width="11" height="16" className="ellipse-4"/>
          <img alt="icon" src={ellipse1} loading="lazy" width="13" height="12" className="ellipse-2"/>
          <img alt="icon" src={ellipse5} loading="lazy" width="9" height="9" className="ellipse-5"/>
        </div>
        <div className="ellipse-area ellipse-three position-absolute">
          <img alt="icon" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="ellipse-1"
               src={ellipse6}/>
        </div>
        <div className="ellipse-area ellipse-four position-absolute">
          <img alt="icon" src={ellipse6} loading="lazy" width="20" height="20" className="ellipse-1"/>
          <img alt="icon" src={ellipse1} loading="lazy" width="20" height="20" className="ellipse-2"/>
          <img alt="icon" src={ellipse3} loading="lazy" width="10" height="10" className="ellipse-3"/>
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
                      <span className="display-one">We Craft Games<br/>
                      <span className="index-module_type__E-SaG typed d-inline-block">Entertai</span>
                    </span>
                      <p className="fs-four">Developing games that are imaginative, fun and bringing colors to the
                        gaming
                        world</p></div>
                    <div className="btn-area alt-bg undefined">
                      <a
                        className="box-style btn-box d-center" href="/game">Explore
                        Our Games</a></div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mt-10 mt-lg-0 col-10">
                  <Slider {...settings} className={"game-carousel pb-20 slick-initialized"}>
                    <div className="slide-area" style="width:100%;display:inline-block">
                      <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                        <img alt="Image" loading="lazy" width="33" height="29" src={topBottom}/>
                        <h4 className="mb-1">Featured Games</h4></div>
                      <div className="single-slider p-3 p-sm-5">
                        <div className="thumb-wrapper">
                          <div className="thumb">
                            <img alt="Image" loading="lazy" width="392" height="491" src={gameSlide}/>
                          </div>
                          <div className="app-download-title pt-5 pb-3 text-center"><h3>Crazy Wild</h3></div>
                          <div className="app-download d-flex gap-5 align-items-center">
                            <a href="/">
                              Detal Game
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-area" style="width:100%;display:inline-block">
                      <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                        <img alt="Image" loading="lazy" width="33" height="29" src={topBottom}/>
                        <h4 className="mb-1">Featured Games</h4></div>
                      <div className="single-slider p-3 p-sm-5">
                        <div className="thumb-wrapper">
                          <div className="thumb">
                            <img alt="Image" loading="lazy" width="392" height="491" src={gameSlide}/>
                          </div>
                          <div className="app-download-title pt-5 pb-3 text-center"><h3>Crazy Wild</h3></div>
                          <div className="app-download d-flex gap-5 align-items-center">
                            <a href="/">
                              Detal Game
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-area" style="width:100%;display:inline-block">
                      <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                        <img alt="Image" loading="lazy" width="33" height="29" src={topBottom}/>
                        <h4 className="mb-1">Featured Games</h4></div>
                      <div className="single-slider p-3 p-sm-5">
                        <div className="thumb-wrapper">
                          <div className="thumb">
                            <img alt="Image" loading="lazy" width="392" height="491" src={gameSlide}/>
                          </div>
                          <div className="app-download-title pt-5 pb-3 text-center"><h3>Crazy Wild</h3></div>
                          <div className="app-download d-flex gap-5 align-items-center">
                            <a href="/">
                              Detal Game
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-area" style="width:100%;display:inline-block">
                      <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                        <img alt="Image" loading="lazy" width="33" height="29" src={topBottom}/>
                        <h4 className="mb-1">Featured Games</h4></div>
                      <div className="single-slider p-3 p-sm-5">
                        <div className="thumb-wrapper">
                          <div className="thumb">
                            <img alt="Image" loading="lazy" width="392" height="491" src={gameSlide}/>
                          </div>
                          <div className="app-download-title pt-5 pb-3 text-center"><h3>Crazy Wild</h3></div>
                          <div className="app-download d-flex gap-5 align-items-center">
                            <a href="/">
                              Detal Game
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-area" style="width:100%;display:inline-block">
                      <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                        <img alt="Image" loading="lazy" width="33" height="29" src={topBottom}/>
                        <h4 className="mb-1">Featured Games</h4></div>
                      <div className="single-slider p-3 p-sm-5">
                        <div className="thumb-wrapper">
                          <div className="thumb">
                            <img alt="Image" loading="lazy" width="392" height="491" src={gameSlide}/>
                          </div>
                          <div className="app-download-title pt-5 pb-3 text-center"><h3>Crazy Wild</h3></div>
                          <div className="app-download d-flex gap-5 align-items-center">
                            <a href="/">
                              Detal Game
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-area" style="width:100%;display:inline-block">
                      <div className="top-area d-flex justify-content-end gap-4 mb-5 align-items-end">
                        <img alt="Image" loading="lazy" width="33" height="29" src={topBottom}/>
                        <h4 className="mb-1">Featured Games</h4></div>
                      <div className="single-slider p-3 p-sm-5">
                        <div className="thumb-wrapper">
                          <div className="thumb">
                            <img alt="Image" loading="lazy" width="392" height="491" src={gameSlide}/>
                          </div>
                          <div className="app-download-title pt-5 pb-3 text-center"><h3>Crazy Wild</h3></div>
                          <div className="app-download d-flex gap-5 align-items-center">
                            <a href="/">
                              Detal Game
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
