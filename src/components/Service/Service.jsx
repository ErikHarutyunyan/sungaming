import "./Service.css";
import { serviceThumb, star } from "../Images/";
import { Link } from "react-router-dom";
import { SERVICES } from "./../../router/route-path";

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
                  <button>
                    <h3 className="visible-slowly-bottom mb-3">
                      Free Bet and Tournament Service
                    </h3>
                  </button>
                  <p>
                    Integrate our REST API to guarantee high player engagement
                    and provide in-game bonuses for existing and new players.
                  </p>
                </div>
                <button className="end-area d-center">
                  <svg
                    viewBox="0 0 90.32267761230469 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}>
                    <g transform="scale(1.1123482605979957)">
                      <g>
                        <path
                          fill="#fff"
                          d="M9.4,77v4.4c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8v-4.3   c-3.7,3.9-11.3,8.6-26.6,8.6C21.8,86.3,13.4,80.9,9.4,77z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M64.8,64.9c-3.7,3.9-11.3,8.6-26.6,8.6c-16.4,0-24.8-5.4-28.8-9.3v5.1c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3   c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8V64.9z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M64.5,34.3c14.3-0.5,26-7,26-14.6C90.6,11.7,77.9,5,62.9,5s-27.7,6.7-27.7,14.7c0,1.8,0.7,3.6,1.9,5.2   C49.1,24.9,59.3,28.6,64.5,34.3z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M37.1,28.4c-15,0-27.7,6.7-27.7,14.7c0,7.9,12.7,14.7,27.7,14.7S64.8,51,64.8,43C64.8,35.1,52.1,28.4,37.1,28.4z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M68.3,50v7c0,0.3,0,0.6,0,0.9h0v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-4.9C87.2,45,80.7,49.2,68.3,50z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M64.8,51.5c-5.1,5.8-15.5,9.7-27.7,9.7s-22.5-3.9-27.7-9.7v5c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3   c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8V51.5z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M66.9,37.6c0.9,1.7,1.3,3.5,1.3,5.4c0,0.7-0.1,1.4-0.2,2.1h0.2v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-5.5   C86,33.3,77.3,36.9,66.9,37.6z"
                          transform="translate(-9.39999771118164,-5)"></path>
                        <path
                          fill="#fff"
                          d="M68.3,62.8v7c0,0.1,0,0.2,0,0.2h0v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-4.3C87.2,57.9,80.7,62,68.3,62.8   z"
                          transform="translate(-9.39999771118164,-5)"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <button>
                    <h3 className="visible-slowly-bottom mb-3">
                      Seamless API integration
                    </h3>
                  </button>
                  <p>
                    Get your source account updated in real time, reduce the
                    time and costs of software development service and increase
                    reliability to fit regulated market requirements.
                  </p>
                </div>
                <button className="end-area d-center">
                  <svg
                    viewBox="0 0 92.85713958740234 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}>
                    <g transform="scale(3.5714285714285716)">
                      <title>Icons / create-new-version-icon</title>
                      <desc>Created with Sketch.</desc>
                      <g
                        transform="translate(-350.000000, -289.000000)"
                        fill="#fff">
                        <g transform="translate(350.000000, 289.000000)">
                          <path
                            d="M11.5115978,6.04221752 C11.5038678,6.1933243 11.5,6.34592278 11.5,6.5 C11.5,8.69824711 12.2872927,10.5954934 13.8458996,12.1541004 C14.7267425,13.0349432 15.715744,13.6694347 16.8061102,14.0546906 L11.9166667,16.4270833 C11.6874989,16.5416672 11.3819464,16.5989583 11,16.5989583 C10.6180536,16.5989583 10.3125011,16.5416672 10.0833333,16.4270833 L0.401041667,11.7291667 C0.133679219,11.6145828 0,11.471355 0,11.2994792 C0,11.1276033 0.133679219,10.9843756 0.401041667,10.8697917 L10.0833333,6.171875 C10.3125011,6.05729109 10.6180536,6 11,6 C11.1892969,6 11.3598291,6.01407244 11.5115978,6.04221752 Z M21.5989583,16.5416667 C21.8663208,16.6562506 22,16.8090268 22,17 C22,17.1909732 21.8663208,17.3437494 21.5989583,17.4583333 L11.9166667,22.0989583 C11.6111096,22.2517369 11.3055571,22.328125 11,22.328125 C10.6944429,22.328125 10.3888904,22.2517369 10.0833333,22.0989583 L0.401041667,17.4583333 C0.133679219,17.3437494 0,17.1909732 0,17 C0,16.8090268 0.133679219,16.6562506 0.401041667,16.5416667 C1.43229682,16.0451364 2.06249885,15.7395839 2.29166667,15.625 C2.52083448,15.4722215 2.76909589,15.4722215 3.03645833,15.625 L10.0833333,19.0625 C10.3125011,19.1770839 10.6180536,19.234375 11,19.234375 C11.3819464,19.234375 11.6874989,19.1770839 11.9166667,19.0625 C16.5382176,16.8090165 18.9253465,15.6440976 19.078125,15.5677083 C19.2690982,15.4913191 19.4409715,15.4913191 19.59375,15.5677083 L21.5989583,16.5416667 Z M21.5989583,22.2708333 C21.8663208,22.3854172 22,22.528645 22,22.7005208 C22,22.8723967 21.8663208,23.0156244 21.5989583,23.1302083 L11.9166667,27.828125 C11.6874989,27.9427089 11.3819464,28 11,28 C10.6180536,28 10.3125011,27.9427089 10.0833333,27.828125 L0.401041667,23.1302083 C0.133679219,23.0156244 0,22.8723967 0,22.7005208 C0,22.528645 0.133679219,22.3854172 0.401041667,22.2708333 C1.43229682,21.7361084 2.06249885,21.4114589 2.29166667,21.296875 C2.48263984,21.1822911 2.73090125,21.2013881 3.03645833,21.3541667 L10.0833333,24.734375 C10.3125011,24.8489589 10.6180536,24.90625 11,24.90625 C11.3819464,24.90625 11.6874989,24.8489589 11.9166667,24.734375 C16.5382176,22.5190861 18.9253465,21.3732643 19.078125,21.296875 C19.2690982,21.2204857 19.4409715,21.2204857 19.59375,21.296875 L21.5989583,22.2708333 Z M14.90625,1.90625 C16.1770897,0.635410312 17.7083244,0 19.5,0 C21.2916756,0 22.8229103,0.635410312 24.09375,1.90625 C25.3645897,3.17708969 26,4.70832438 26,6.5 C26,8.29167562 25.3645897,9.82291031 24.09375,11.09375 C22.8229103,12.3645897 21.2916756,13 19.5,13 C17.7083244,13 16.1770897,12.3645897 14.90625,11.09375 C13.6354103,9.82291031 13,8.29167562 13,6.5 C13,4.70832438 13.6354103,3.17708969 14.90625,1.90625 Z M22.84375,7.15625 L22.84375,5.84375 L20.15625,5.84375 L20.15625,3.15625 L18.84375,3.15625 L18.84375,5.84375 L16.15625,5.84375 L16.15625,7.15625 L18.84375,7.15625 L18.84375,9.84375 L20.15625,9.84375 L20.15625,7.15625 L22.84375,7.15625 Z"
                            transform="translate(0,0)"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <button>
                    <h3 className="visible-slowly-bottom mb-3">
                      24/7 product support
                    </h3>
                  </button>
                  <p>
                    Get complete consultation, receive technical support and
                    account management on a 24/7 basis.
                  </p>
                </div>
                <button className="end-area d-center">
                  <svg
                    width={23}
                    height={23}
                    viewBox="0 0 99.87355041503906 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1.2706488188487848)">
                      <g>
                        <path
                          fill="#fff"
                          d="M39.5,0.5C17.8,0.5,0.2,18.2,0.2,39.9s17.6,39.3,39.3,39.3s39.3-17.6,39.3-39.3   C78.9,18.2,61.3,0.5,39.5,0.5z M57.3,56.5c-0.8,1.1-2,1.7-3.2,1.7c-0.8,0-1.6-0.2-2.3-0.7L37.3,47.3c-0.1-0.1-0.1-0.2-0.2-0.2   c-0.2-0.2-0.4-0.4-0.6-0.6c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.1-0.1-0.2-0.1-0.3v-25   c0-2.2,1.8-4,4-4s4,1.8,4,4v23l12.9,9C58.2,52.3,58.6,54.7,57.3,56.5z"
                          transform="translate(-0.20000000298023224,-0.5)"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <button>
                    <h3 className="visible-slowly-bottom mb-3">
                      Provable fairness system
                    </h3>
                  </button>
                  <p>
                    Sun Gaming platform integration also introduces the
                    “provable fairness” feature to verify fair play ensuring the
                    game outcomes are determined 5 rounds in advance and players
                    receive it in the coded form.
                  </p>
                </div>
                <button className="end-area d-center">
                  <svg
                    width={23}
                    height={23}
                    viewBox="0 0 78.56375885009766 100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="scale(1.1216662878487065)">
                      <path
                        fill="#fff"
                        d="M49.75,86.562V12.035c0,0,16.451,1.083,28.933,5.355c0,0-0.149,13.336-0.147,26.567  c0.004,18.437-14.132,38.17-28.785,41.837 M84.771,12.555C69.664,7.38,50.728,5.925,49.75,5.925c-1.088,0-19.915,1.455-35.021,6.63  c0,0,0.108,16.142,0.104,32.159C14.83,67.034,32.011,90.641,49.75,95.078c17.738-4.438,34.895-28.044,34.891-50.364  C84.639,28.697,84.771,12.555,84.771,12.555"
                        transform="translate(-14.729000091552734,-5.925000190734863)"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
