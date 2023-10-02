// Styles
import "./News.css";
import BannerPages from "../../components/BannerPages/BannerPages";
import { blogsImg1 } from "../../components/Images";
import newsBg from "../../assets/img/bg2.jpg";
import { Link } from "react-router-dom";
import { NEWS, NEWS_BLOG } from "../../router/route-path";
import { dataNews } from "../../data/dataNews";

const News = () => {
  return (
    <>
      <BannerPages
        page={"News"}
        bg={newsBg}
        titleSecond={"News"}
        classNames="newsBanner"
        desc={"Your Premier Destination for Online Entertainment!"}
      />
      <section className="recently-completed blogs blog-section">
        <div className="container pt-120">
          <h1 className="pb-10">News</h1>
          {/*
           <div className="news-section">
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
            <div className="newsItem">
              <div className="newsImg-a">
                <a href="/news/SBCSummitBarcelona2023">
                  <img alt="Image" loading="lazy" src={blogsImg1} />
                </a>
              </div>
              <i>12.09.2023</i>
              <h6>The Role Of Music And Sound Effects In Game Design</h6>
              <p>
                When you think about your favourite video games, what stands
                out? Is it the gameplay, the graphics, or maybe the story?
                Chances are, the music and sound effects played a big role in
                creating the overall experience. In fact, music and sound
                effects are an essential component of game design, helping to
                set the tone, build immersion, and create memorable moments.Here
                are just a few ways music and sound effects impact game design:
              </p>
              <a href="/news/SBCSummitBarcelona2023">Read More</a>
            </div>
          </div> 
          */}
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="news-section">
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      {}
                      <img
                        alt="Image"
                        loading="lazy"
                        src={dataNews[1].imgMain}
                      />
                    </a>
                  </div>
                  <i>{dataNews[1].data}</i>
                  <h6>{dataNews[1].title}</h6>
                  <p>{dataNews[1].shortInfo}</p>
                  <Link to={`${NEWS}\\${dataNews[1].path}`}>Read More</Link>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
                <div className="newsItem">
                  <div className="newsImg-a">
                    <a href="/news/SBCSummitBarcelona2023">
                      <img alt="Image" loading="lazy" src={blogsImg1} />
                    </a>
                  </div>
                  <i>12.09.2023</i>
                  <h6>The Role Of Music And Sound Effects In Game Design</h6>
                  <p>
                    When you think about your favourite video games, what stands
                    out? Is it the gameplay, the graphics, or maybe the story?
                    Chances are, the music and sound effects played a big role
                    in creating the overall experience. In fact, music and sound
                    effects are an essential component of game design, helping
                    to set the tone, build immersion, and create memorable
                    moments.Here are just a few ways music and sound effects
                    impact game design:
                  </p>
                  <a href="/news/SBCSummitBarcelona2023">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
              <div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
                <div className="d-flex flex-column gap-6">
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Search</h3>
                    <div className="input-area mt-6 p-1 d-flex align-items-center">
                      <input
                        type="text"
                        className="ps-3"
                        placeholder="Search"
                      />
                      <div className="btn-area">
                        <button className="box-style btn-box border-re p-2">
                          <i className="material-symbols-outlined"> search </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Category</h3>
                    <ul className="underwriters d-grid gap-3">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between">
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <i className="material-symbols-outlined mat-icon fs-five">
                                double_arrow
                              </i>
                            </div>
                            <span>Game Development</span>
                          </div>
                          <div className="right-area">
                            <span>(08)</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between">
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <i className="material-symbols-outlined mat-icon fs-five">
                                double_arrow
                              </i>
                            </div>
                            <span>Game Art</span>
                          </div>
                          <div className="right-area">
                            <span>(08)</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between">
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <i className="material-symbols-outlined mat-icon fs-five">
                                double_arrow
                              </i>
                            </div>
                            <span>Game Animation</span>
                          </div>
                          <div className="right-area">
                            <span>(07)</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between">
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <i className="material-symbols-outlined mat-icon fs-five">
                                double_arrow
                              </i>
                            </div>
                            <span>Game QA Testing</span>
                          </div>
                          <div className="right-area">
                            <span>(06)</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between">
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <i className="material-symbols-outlined mat-icon fs-five">
                                double_arrow
                              </i>
                            </div>
                            <span>Game UI/UX</span>
                          </div>
                          <div className="right-area">
                            <span>(04)</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between">
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <i className="material-symbols-outlined mat-icon fs-five">
                                double_arrow
                              </i>
                            </div>
                            <span>Out Staffing</span>
                          </div>
                          <div className="right-area">
                            <span>(04)</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">
                      Related Articles
                    </h3>
                    <div className="cus-mar">
                      <div className="single-box d-center justify-content-start gap-5">
                        <div className="img-area">
                          <img src={blogsImg1} alt="Image" />
                        </div>
                        <div className="info-area">
                          <a href="blog.html">
                            <h6>Tips for Creating Engaging Game Characters</h6>
                          </a>
                          <div className="article-info pt-3 d-flex gap-5">
                            <div className="d-flex gap-1 single">
                              <div className="icon-wrap d-flex align-items-end">
                                <i className="material-symbols-outlined mat-icon fs-six">
                                  schedule
                                </i>
                              </div>
                              <span>15 Min</span>
                            </div>
                            <div className="d-flex gap-1 single ps-5">
                              <div className="icon-wrap d-flex align-items-end">
                                <i className="material-symbols-outlined mat-icon fs-six">
                                  visibility
                                </i>
                              </div>
                              <span>55</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box d-center justify-content-start gap-5">
                        <div className="img-area">
                          <img src={blogsImg1} alt="Image" />
                        </div>
                        <div className="info-area">
                          <a href="blog.html">
                            <h6>The Pros and Cons of Different Game Engines</h6>
                          </a>
                          <div className="article-info pt-3 d-flex gap-5">
                            <div className="d-flex gap-1 single">
                              <div className="icon-wrap d-flex align-items-end">
                                <i className="material-symbols-outlined mat-icon fs-six">
                                  schedule
                                </i>
                              </div>
                              <span>15 Min</span>
                            </div>
                            <div className="d-flex gap-1 single ps-5">
                              <div className="icon-wrap d-flex align-items-end">
                                <i className="material-symbols-outlined mat-icon fs-six">
                                  visibility
                                </i>
                              </div>
                              <span>55</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-box d-center justify-content-start gap-5">
                        <div className="img-area">
                          <img src={blogsImg1} alt="Image" />
                        </div>
                        <div className="info-area">
                          <a href="blog.html">
                            <h6>The Role of Storytelling in Game Design</h6>
                          </a>
                          <div className="article-info pt-3 d-flex gap-5">
                            <div className="d-flex gap-1 single">
                              <div className="icon-wrap d-flex align-items-end">
                                <i className="material-symbols-outlined mat-icon fs-six">
                                  schedule
                                </i>
                              </div>
                              <span>15 Min</span>
                            </div>
                            <div className="d-flex gap-1 single ps-5">
                              <div className="icon-wrap d-flex align-items-end">
                                <i className="material-symbols-outlined mat-icon fs-six">
                                  visibility
                                </i>
                              </div>
                              <span>55</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Follow Us</h3>
                    <ul className="d-flex gap-4 social-area">
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
                  <div className="sidebar-area py-8 py-sm-15 text-center p-5">
                    <h5 className="mb-4">
                      <span>Let’s Work Together</span>
                    </h5>
                    <h3 className="visible-slowly-bottom mb-8">
                      Game Studio Services Agency
                    </h3>
                    <div className="btn-area alt-bg">
                      <a href="contact.html" className="box-style btn-box">
                        Contact us
                        <i className="material-symbols-outlined mat-icon fs-five">
                          chevron_right
                        </i>
                      </a>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="d-center mt-8 call-number gap-2">
                      <i className="material-symbols-outlined mat-icon fs-six">
                        call
                      </i>
                      +000 (123) 456 88
                    </a>
                  </div>
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Popular Tags</h3>
                    <ul className="tags d-flex flex-wrap gap-2">
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">App</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">Game App</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">Game Art</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">Game Animation</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">Game QA Testing</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">Unity Development</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">3D ART</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">3D Game Modeling</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">3D Animation</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">Environment Design</a>
                      </li>
                      <li className="box-style btn-box">
                        <a href="javascript:void(0)">3D Characters</a>
                      </li>
                    </ul>
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

export default News;
