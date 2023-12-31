// Route
import { useNavigate } from "react-router-dom";
import { CAREERS, HOME } from "router/route-path";
// Components
import AboutValues from "components/AboutValues";
import NewsPresent from "components/NewsPresent";
import SEO from "components/SEO";
import ShapeArea from "components/ShapeArea";
import Subscribe from "components/Subscribe";
// Images and Icons
import { bubble, ellipse7 } from "images";
import { FiChevronRight } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
// Data
import { dataCareers } from "data/dataCareers";
const Careers = () => {
  const navigate = useNavigate();

  const handleClick = (e, path, item) => {
    e.preventDefault();
    let careerData = JSON.stringify(item);
    navigate(`${CAREERS}/${path}`, { state: { data: careerData } });
  };
  return (
    <>
      <SEO
        title="Sun Gaming | Careers"
        description="Join A Team Of Passionate People
        we are always building towards an efficient and collaborative team of the best game developers around."
        url="https://sungaming.netlify.app/careers"
      />
      <section className="banner-section inner-banner position-relative career">
        <ShapeArea>
          <img src={bubble} className="shape-1" alt="icon" />
          <img src={ellipse7} className="shape-2" alt="icon" />
        </ShapeArea>
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
      <AboutValues />
      <section className="job-opens pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-text text-center">
                <h4 className="sub-title">
                  We&apos;re Looking for <span>Talented Professionals</span>
                </h4>
                <span className="fs-two heading mb-6 w-75 m-auto">
                  <span>Let&apos;s Build the Future</span> of Video Games
                  Together!
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
            {dataCareers?.map((item) => {
              const { id, path, title, area, term, types, location, icon } =
                item;
              return (
                <div className="col-md-6" key={id}>
                  <Link onClick={(e) => handleClick(e, path, item)}>
                    <div className="single-box flex-wrap box-style box-second p-3 p-md-6 d-flex gap-4 gap-md-6 justify-content-between">
                      <div className="content-box d-flex flex-wrap gap-4 gap-md-6">
                        {icon ? (
                          <div className="icon-box d-inline-flex d-center">
                            {icon}
                          </div>
                        ) : null}

                        <div className="info-box">
                          <h5>{title}</h5>
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
                        <span className="fs-six p-1 px-2 fw-medium">
                          {area}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <NewsPresent />
      <Subscribe />
    </>
  );
};

export default Careers;
