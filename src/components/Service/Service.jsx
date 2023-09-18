import "./Service.css";
import { serviceThumb, star } from "../Images/";
import { MdOutlineNorthEast } from "react-icons/md";
import { Link } from "react-router-dom";
import { SERVICES } from './../../router/route-path';

const Service = () => {
  return (
    <section className="our-services index-two pt-120 pb-120">
      <div className="container position-relative">
        <div className="shape-area d-none d-lg-block position-absolute">
          <img alt="Icon" src={star} loading="lazy" width="109" height="91" />
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="section-header">
              <h4 className="sub-title">
                Bringing Your <span>Gaming Vision</span> to Life
              </h4>
              <span className="fs-two heading mb-6">
                Innovative <span>Gaming Solutions</span>Everywhere: Next Level
                <span>Services</span>
              </span>
              <p>
                Our gaming studio delivers top-notch services in game
                development, art &amp; design, NFT creation, and VR &amp; AR
                solutions. Transforming gaming with cutting-edge and
                platform-independent solutions.
              </p>
            </div>
            <div className="services-thumb d-inline-block position-relative">
              <div className="thumb">
                <img
                  alt="Image"
                  src={serviceThumb}
                  loading="lazy"
                  width="526"
                  height="366"
                />
              </div>
              <div className="link-item">
                <Link
                  className="py-4 px-7 text-decoration-underline position-absolute bottom-0 end-0"
                  to={SERVICES}>
                  See All Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-10 mt-lg-0">
            <div className="cus-mar">
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <a href="our-services-details">
                    <h3 className="visible-slowly-bottom mb-3">
                      Free Bet and Tournament Service
                    </h3>
                  </a>
                  <p>
                    Integrate our REST API to guarantee high player engagement
                    and provide in-game bonuses for existing and new players.
                  </p>
                </div>
                <a className="end-area d-center" href="our-services-details-2">
                  <MdOutlineNorthEast />
                </a>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <a href="our-services-details">
                    <h3 className="visible-slowly-bottom mb-3">
                      Seamless API integration
                    </h3>
                  </a>
                  <p>
                    Get your source account updated in real time, reduce the
                    time and costs of software development service and increase
                    reliability to fit regulated market requirements.
                  </p>
                </div>
                <a className="end-area d-center" href="our-services-details-2">
                  <MdOutlineNorthEast />
                </a>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <a href="our-services-details">
                    <h3 className="visible-slowly-bottom mb-3">
                      24/7 product support
                    </h3>
                  </a>
                  <p>
                    Get complete consultation, receive technical support and
                    account management on a 24/7 basis.
                  </p>
                </div>
                <a className="end-area d-center" href="our-services-details-2">
                  <MdOutlineNorthEast />
                </a>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <a href="our-services-details">
                    <h3 className="visible-slowly-bottom mb-3">
                      Provable fairness system
                    </h3>
                  </a>
                  <p>
                    Sun Gaming platform integration also introduces the
                    “provable fairness” feature to verify fair play ensuring the
                    game outcomes are determined 5 rounds in advance and players
                    receive it in the coded form.
                  </p>
                </div>
                <a className="end-area d-center" href="our-services-details-2">
                  <MdOutlineNorthEast />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;