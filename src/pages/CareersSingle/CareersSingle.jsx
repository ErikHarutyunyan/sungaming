// Styles
import { MdWorkOutline } from "react-icons/md";
import { dataCareers } from "../../data/dataCareers";
import "./CareersSingle.css";
import { Link, useParams } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import Subscribe from "../../components/Subscribe";
import { bubble, ellipse7 } from "../../components/Images";
import { HOME } from "../../router/route-path";
import { FiChevronRight } from "react-icons/fi";
const CareersSingle = () => {
  const { id: idCareers } = useParams();
  const filteredCareer = dataCareers.find((career) => career.id === idCareers);

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
      <section className="job-opens details pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-7">
              <div className="content-wrapper d-grid gap-4 gap-sm-8">
                <div className="d-flex gap-6 align-items-center">
                  <div className="end-area">
                    <span className="fs-seven p-1 px-2">
                      {filteredCareer.area}
                    </span>
                  </div>
                  <ul className="d-flex gap-6">
                    <li className="d-flex align-items-center gap-2">
                      <li className="d-flex align-items-center gap-2">
                        <MdWorkOutline size={24} />
                        <span className="fs-seven">{filteredCareer.term}</span>
                      </li>
                      <span className="fs-seven">Full Time</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <IoTimeOutline size={24} />
                      <span className="fs-seven">{filteredCareer.types}</span>
                    </li>
                  </ul>
                </div>
                <div className="single-content mb-8">
                  <h2 className="visible-slowly-bottom display-four mb-2">
                    {filteredCareer.title}
                  </h2>
                </div>

                <div className="single-content">
                  <h3 className="visible-slowly-bottom mb-3">
                    Job responsibilities
                  </h3>
                  <ul className="ms-4 d-grid gap-1">
                    {filteredCareer.respons.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
                <div className="single-content">
                  <h3 className="visible-slowly-bottom mb-3">
                    Required qualifications
                  </h3>
                  <ul className="ms-4 d-grid gap-1">
                    {filteredCareer.qual.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-7 mt-8 mt-lg-0 alt-bg">
              <div className="apply-area cus-scrollbar text-center py-15 px-8">
                <div className="careers-icon icon-box mb-6 mb-sm-10 d-inline-flex d-center">
                  {filteredCareer.icon}
                </div>
                <div className="section-text">
                  <h2 className="visible-slowly-bottom mb-3">
                    Apply for the position now!
                  </h2>
                  <span>Join a growing team in a dynamic environment.</span>
                </div>
                <div className="btn-area">
                  <div className="btn-area mt-5 mt-sm-8 flex-wrap gap-6 d-center">
                    <a href="index.html" className="box-style btn-box d-center">
                      Apply Now
                    </a>
                  </div>
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

export default CareersSingle;
