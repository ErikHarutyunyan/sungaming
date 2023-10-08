// Styles
import { BiFlag } from "react-icons/bi";
import "./Careers.css";
import SimpleSlider from "../../components/SimpleSlider";
import { settingsAbout } from "../../features/SliderConfig";
import Subscribe from "../../components/Subscribe";
import { dataCareers } from "../../data/dataCareers";
import { MdWorkOutline } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CAREERS, HOME } from "../../router/route-path";
import { FiChevronRight } from "react-icons/fi";
import { bubble, ellipse7 } from "../../components/Images";
const Careers = () => {
  return (
    <>
      <section className="banner-section inner-banner position-relative about career">
        <div className="shape-area">
          <img src={bubble} className="shape-1" alt="icon" />
          <img src={ellipse7} className="shape-2" alt="icon" />
        </div>
        <div className="container position-relative">
          <div className="banner-content row justify-content-between">
            <div className="col-lg-6 col-md-10">
              <div className="main-content">
                <h2 className="visible-slowly-bottom display-four mb-6">
                  Join a <span className="d-inline">team of passionate</span>{" "}
                  people
                </h2>
                <p className="fs-four">
                  we are always building towards an efficient and collaborative
                  team of the best game developers around.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
              <div className="breadcrumb-area position-absolute end-0 bottom-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-end justify-content-end">
                    <li className="breadcrumb-item p-0 m-0">
                      <Link to={HOME}>Home</Link>
                    </li>
                    <FiChevronRight size={20} color={"white"} />
                    <li className="breadcrumb-item active" aria-current="page">
                      Career
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gaming-character overflow-hidden ongoing-values what-we-offer bg-transparent pt-120 pb-120">
        <div className="container">
          <div className="row section-header justify-content-center">
            <div className="col-lg-7 text-center">
              <h4 className="sub-title">
                What We <span>Offer</span>
              </h4>
              <span className="fs-two heading mb-6">
                Why People Love Working at Gamestorm Studio?
              </span>
              <p>
                We have at heart to foster, encourage, and invest in
                professional growth
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
      <section className="job-opens pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-text text-center">
                <h4 className="sub-title">
                  We're Looking for <span>Talented Professionals</span>
                </h4>
                <span className="fs-two heading mb-6 w-75 m-auto">
                  <span>Let's Build the Future</span> of Video Games Together!
                </span>
                <p>
                  Our belief is that being simple, honest, self-driven and
                  motivated combined with the constant pursuit of the ultimate
                  company atmosphere can help grow a creative and robust team.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {dataCareers?.map((data) => {
              const { id, title, area, term, types, location, icon } = data;
              return (
                <div className="col-md-6" key={id}>
                  <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                    <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                      {icon && (
                        <div className="icon-box d-inline-flex d-center">
                          {icon}
                        </div>
                      )}

                      <div className="info-box">
                        <Link to={`${CAREERS}/${id}`} params={{ asd: data }}>
                          <h5>{title}</h5>
                        </Link>
                        <a href="career-details.html"></a>
                        <span className="fs-seven mt-2">{location}</span>
                        <ul className="d-flex gap-6 mt-6">
                          <li className="d-flex align-items-center gap-2">
                            <MdWorkOutline size={24} />
                            <span className="fs-seven">{term}</span>
                          </li>
                          <li className="d-flex align-items-center gap-2">
                            <IoTimeOutline size={24} />
                            <span className="fs-seven">{types}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="end-area">
                      <span className="fs-seven p-1 px-2">{area}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Careers;
