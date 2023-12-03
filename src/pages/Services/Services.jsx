// Components
import SEO from "components/SEO";
import BannerPages from "components/BannerPages";
import Brands from "components/Brands";
import CounterShare from "components/Counter/CounterShare";
import Subscribe from "components/Subscribe";
// Images and Icons
import {
  serviceBanner,
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
} from "images";
import { BsCodeSlash } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
// Data
import { counterShareData } from "data/dataCounters";


const Services = () => {
  return (
    <>
      <SEO
        title="Sun Gaming | Services"
        description="Our systematic approach to art development ensures high delivery standards for games and game-based solutions, from look development to engine integration."
        url="https://sungaming.netlify.app/services"
      />
      <BannerPages
        classNames={"services"}
        page={"Services"}
        bg={serviceBanner}
        title={"Our"}
        titleSecond={"Services"}
        desc={
          "Our systematic approach to art development ensures high delivery standards for games and game-based solutions, from look development to engine integration."
        }
      />
      <section className="services services-solutions pt-120 pb-120">
        <div className="container">
          <div className="row section-header justify-content-center">
            <div className="col-lg-7 text-center">
              <h4 className="sub-title">
                Game <span>Design &amp; Development</span> Solutions
              </h4>
              <span className="fs-two heading mb-6">
                Our Extensive <span>Game Development Solutions</span>
              </span>
              <p>
                Complete game development, rejuvenation, and outsourcing
                solutions. Profound proficiency in immersive technology for
                delivering exceptional gaming experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row cus-mar services-solution">
            <div className="col-xl-4 col-sm-6 col-xs-12">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={services3} alt={"Website Development"} />
                <p className="position-absolute">
                  Professional web development companies specialize in creating
                  custom websites for online casinos, sports betting platforms,
                  poker rooms, and other iGaming ventures. These services
                  encompass front-end design, back-end development, payment
                  gateway integration, and responsive design to ensure a
                  seamless user experience.
                </p>
                <h3 className="visible-slowly-bottom position-absolute">
                  Website Development:
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={services1} alt="Content Creation" />
                <p className="visible-slowly-bottom position-absolute">
                  High-quality content is essential for iGaming websites.
                  Content creators can produce engaging articles, blog posts,
                  and multimedia content tailored to the iGaming niche. Graphic
                  design and video production services can also enhance the
                  visual appeal of the site.
                </p>
                <h3 className="visible-slowly-bottom position-absolute">
                  Content Creation
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={services2} alt="Payment Processing" />
                <p className="visible-slowly-bottom position-absolute">
                  Reliable payment processing services are critical for iGaming
                  websites. Service providers assist in integrating secure
                  payment gateways and offer solutions for handling deposits and
                  withdrawals smoothly, ensuring the safety of financial
                  transactions.
                </p>
                <h3 className="visible-slowly-bottom position-absolute">
                  Payment Processing
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={services4} alt="Licensing and Compliance" />
                <p className="visible-slowly-bottom position-absolute">
                  Navigating the complex regulatory landscape is a crucial
                  aspect of iGaming. Service providers specialize in obtaining
                  the necessary licenses and ensuring compliance with legal and
                  regulatory requirements specific to the jurisdiction in which
                  you operate.
                </p>
                <h3 className="visible-slowly-bottom position-absolute">
                  Licensing and Compliance
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={services5} alt="Marketing and SEO" />
                <p className="visible-slowly-bottom position-absolute">
                  Effective marketing is vital to attract players to iGaming
                  websites. Digital marketing agencies can provide services like
                  search engine optimization (SEO), pay-per-click advertising,
                  social media marketing, and affiliate marketing to increase
                  visibility and drive traffic.
                </p>
                <h3 className="visible-slowly-bottom position-absolute">
                  Marketing and SEO
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single-box d-inline-flex d-center text-center position-relative pointer">
                <img src={services6} alt="Customer Support Solutions" />
                <h3 className="visible-slowly-bottom position-absolute">
                  Customer Support Solutions
                </h3>
                <p className="visible-slowly-bottom position-absolute">
                  Excellent customer support is a cornerstone of iGaming
                  success. Service providers offer customer support solutions,
                  including live chat support, email support, and phone support,
                  to ensure that players have a positive experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterShare counterData={counterShareData} />
      <section className="how-it-works pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center section-text">
            <div className="col-lg-6 text-center">
              <h4 className="sub-title">
                Streamlined and Effective Game Development
                <span>Workflow</span>
              </h4>
              <span className="fs-two heading mb-4">
                Our Game <span> Development Procedure</span>
              </span>
              <p className="mb-4">
                Elevate your game development to the next level with a
                straightforward process. All work is carried out following this
                method:
              </p>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <MdKeyboardDoubleArrowRight size={28} color="#0ef0ad" />
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <FaRegLightbulb size={28} color="#0ef0ad" />
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Conceptualization and Ideation</h4>
                  <p>
                    This initial stage involves brainstorming and
                    conceptualizing innovative game ideas. We explore various
                    concepts, themes, and gameplay elements to lay the
                    foundation for your game&apos;s unique identity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <MdKeyboardDoubleArrowRight size={28} color="#0ef0ad" />
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <SiBlueprint size={28} color="#0ef0ad" />
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Design and Planning</h4>
                  <p>
                    In this phase, we delve into the meticulous planning of your
                    game. We define the game&apos;s mechanics, characters,
                    storylines, and visual aesthetics. Detailed blueprints and
                    design documents are created to guide the development
                    process.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <MdKeyboardDoubleArrowRight size={28} color="#0ef0ad" />
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <BsCodeSlash size={28} color="#0ef0ad" />
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Development and Prototyping</h4>
                  <p>
                    With the design in place, our skilled developers bring your
                    game to life. They work on coding, graphics, animations, and
                    sound elements, crafting a functional prototype that
                    provides a glimpse into the final product.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 position-relative d-center">
              <div className="abs-area d-center position-absolute">
                <MdKeyboardDoubleArrowRight size={28} color="#0ef0ad" />
              </div>
              <div className="single-box box-style box-first d-grid align-items-center text-center p-5 px-xl-8 py-xl-10">
                <div className="icon-box d-center m-auto">
                  <HiMagnifyingGlassPlus size={28} color="#0ef0ad" />
                </div>
                <div className="title-area">
                  <h4 className="mt-6 mb-3">Testing and Quality Assurance</h4>
                  <p>
                    For a seamless gaming experience, we conduct rigorous
                    testing and quality assurance. Our team thoroughly examines
                    the game, making adjustments until it meets our high-quality
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-game-features benefits pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center section-text">
            <div className="col-lg-6 text-center">
              <h4 className="sub-title">
                Client-Focused <span>Innovation</span>
              </h4>
              <span className="fs-two heading mb-4">
                Our Key Advantages in
                <span>Game ART and Development</span>
              </span>
              <p className="mb-4">
                Our dedication to putting clients first, combined with artistic
                liberty, expert experimentation, and a readiness to push
                boundaries, positions us as an ideal partner for enterprises
                seeking to deliver a standout product. In alignment with this
                ethos, our Platform Specifications encompass:
                <br />
                Comprehensive gaming services designed to cover every aspect of
                the integration process, ensuring the utmost quality in the
                gaming experience.
              </p>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box key d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <svg
                      viewBox="0 0 90.32267761230469 100"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="scale(1.1123482605979957)">
                        <g>
                          <path
                            d="M9.4,77v4.4c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8v-4.3   c-3.7,3.9-11.3,8.6-26.6,8.6C21.8,86.3,13.4,80.9,9.4,77z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M64.8,64.9c-3.7,3.9-11.3,8.6-26.6,8.6c-16.4,0-24.8-5.4-28.8-9.3v5.1c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3   c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8V64.9z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M64.5,34.3c14.3-0.5,26-7,26-14.6C90.6,11.7,77.9,5,62.9,5s-27.7,6.7-27.7,14.7c0,1.8,0.7,3.6,1.9,5.2   C49.1,24.9,59.3,28.6,64.5,34.3z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M37.1,28.4c-15,0-27.7,6.7-27.7,14.7c0,7.9,12.7,14.7,27.7,14.7S64.8,51,64.8,43C64.8,35.1,52.1,28.4,37.1,28.4z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M68.3,50v7c0,0.3,0,0.6,0,0.9h0v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-4.9C87.2,45,80.7,49.2,68.3,50z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M64.8,51.5c-5.1,5.8-15.5,9.7-27.7,9.7s-22.5-3.9-27.7-9.7v5c0,1.6,0.5,3.1,1.5,4.2c3,3.5,10.5,9.3,27.3,9.3   c16.7,0,23.1-5.8,25.5-9.2c0.7-1.1,1.1-2.4,1.1-3.8V51.5z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M66.9,37.6c0.9,1.7,1.3,3.5,1.3,5.4c0,0.7-0.1,1.4-0.2,2.1h0.2v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-5.5   C86,33.3,77.3,36.9,66.9,37.6z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                          <path
                            d="M68.3,62.8v7c0,0.1,0,0.2,0,0.2h0v1.4c13.5-0.9,19.1-6,21.2-9.1c0.7-1.1,1.1-2.4,1.1-3.8v-4.3C87.2,57.9,80.7,62,68.3,62.8   z"
                            transform="translate(-9.39999771118164,-5)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Free Bet And Tournament Service</h5>
                    <p>
                      Integrate our REST API to guarantee high player engagement
                      and provide in-game bonuses for existing and new players.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box key  d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <svg
                      viewBox="0 0 92.85713958740234 100"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="scale(3.5714285714285716)">
                        <title>Icons / create-new-version-icon</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          transform="translate(-350.000000, -289.000000)"
                          fill="#000000"
                        >
                          <g transform="translate(350.000000, 289.000000)">
                            <path
                              d="M11.5115978,6.04221752 C11.5038678,6.1933243 11.5,6.34592278 11.5,6.5 C11.5,8.69824711 12.2872927,10.5954934 13.8458996,12.1541004 C14.7267425,13.0349432 15.715744,13.6694347 16.8061102,14.0546906 L11.9166667,16.4270833 C11.6874989,16.5416672 11.3819464,16.5989583 11,16.5989583 C10.6180536,16.5989583 10.3125011,16.5416672 10.0833333,16.4270833 L0.401041667,11.7291667 C0.133679219,11.6145828 0,11.471355 0,11.2994792 C0,11.1276033 0.133679219,10.9843756 0.401041667,10.8697917 L10.0833333,6.171875 C10.3125011,6.05729109 10.6180536,6 11,6 C11.1892969,6 11.3598291,6.01407244 11.5115978,6.04221752 Z M21.5989583,16.5416667 C21.8663208,16.6562506 22,16.8090268 22,17 C22,17.1909732 21.8663208,17.3437494 21.5989583,17.4583333 L11.9166667,22.0989583 C11.6111096,22.2517369 11.3055571,22.328125 11,22.328125 C10.6944429,22.328125 10.3888904,22.2517369 10.0833333,22.0989583 L0.401041667,17.4583333 C0.133679219,17.3437494 0,17.1909732 0,17 C0,16.8090268 0.133679219,16.6562506 0.401041667,16.5416667 C1.43229682,16.0451364 2.06249885,15.7395839 2.29166667,15.625 C2.52083448,15.4722215 2.76909589,15.4722215 3.03645833,15.625 L10.0833333,19.0625 C10.3125011,19.1770839 10.6180536,19.234375 11,19.234375 C11.3819464,19.234375 11.6874989,19.1770839 11.9166667,19.0625 C16.5382176,16.8090165 18.9253465,15.6440976 19.078125,15.5677083 C19.2690982,15.4913191 19.4409715,15.4913191 19.59375,15.5677083 L21.5989583,16.5416667 Z M21.5989583,22.2708333 C21.8663208,22.3854172 22,22.528645 22,22.7005208 C22,22.8723967 21.8663208,23.0156244 21.5989583,23.1302083 L11.9166667,27.828125 C11.6874989,27.9427089 11.3819464,28 11,28 C10.6180536,28 10.3125011,27.9427089 10.0833333,27.828125 L0.401041667,23.1302083 C0.133679219,23.0156244 0,22.8723967 0,22.7005208 C0,22.528645 0.133679219,22.3854172 0.401041667,22.2708333 C1.43229682,21.7361084 2.06249885,21.4114589 2.29166667,21.296875 C2.48263984,21.1822911 2.73090125,21.2013881 3.03645833,21.3541667 L10.0833333,24.734375 C10.3125011,24.8489589 10.6180536,24.90625 11,24.90625 C11.3819464,24.90625 11.6874989,24.8489589 11.9166667,24.734375 C16.5382176,22.5190861 18.9253465,21.3732643 19.078125,21.296875 C19.2690982,21.2204857 19.4409715,21.2204857 19.59375,21.296875 L21.5989583,22.2708333 Z M14.90625,1.90625 C16.1770897,0.635410312 17.7083244,0 19.5,0 C21.2916756,0 22.8229103,0.635410312 24.09375,1.90625 C25.3645897,3.17708969 26,4.70832438 26,6.5 C26,8.29167562 25.3645897,9.82291031 24.09375,11.09375 C22.8229103,12.3645897 21.2916756,13 19.5,13 C17.7083244,13 16.1770897,12.3645897 14.90625,11.09375 C13.6354103,9.82291031 13,8.29167562 13,6.5 C13,4.70832438 13.6354103,3.17708969 14.90625,1.90625 Z M22.84375,7.15625 L22.84375,5.84375 L20.15625,5.84375 L20.15625,3.15625 L18.84375,3.15625 L18.84375,5.84375 L16.15625,5.84375 L16.15625,7.15625 L18.84375,7.15625 L18.84375,9.84375 L20.15625,9.84375 L20.15625,7.15625 L22.84375,7.15625 Z"
                              transform="translate(0,0)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Seamless API Integration</h5>
                    <p>
                      Get your source account updated in real time, reduce the
                      time and costs of software development service and
                      increase reliability to fit regulated market requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box key  d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <svg
                      viewBox="0 0 99.87355041503906 100"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="scale(1.2706488188487848)">
                        <g>
                          <path
                            fill="#000000"
                            d="M39.5,0.5C17.8,0.5,0.2,18.2,0.2,39.9s17.6,39.3,39.3,39.3s39.3-17.6,39.3-39.3   C78.9,18.2,61.3,0.5,39.5,0.5z M57.3,56.5c-0.8,1.1-2,1.7-3.2,1.7c-0.8,0-1.6-0.2-2.3-0.7L37.3,47.3c-0.1-0.1-0.1-0.2-0.2-0.2   c-0.2-0.2-0.4-0.4-0.6-0.6c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.1-0.1-0.2-0.1-0.3v-25   c0-2.2,1.8-4,4-4s4,1.8,4,4v23l12.9,9C58.2,52.3,58.6,54.7,57.3,56.5z"
                            transform="translate(-0.20000000298023224,-0.5)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">24/7 Product Support</h5>
                    <p>
                      Get complete consultation, receive technical support and
                      account management on a 24/7 basis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second py-5 px-4 py-sm-10 px-sm-9 d-center justify-content-between">
                <div className="content-box key  d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <svg
                      viewBox="0 0 78.56375885009766 100"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g transform="scale(1.1216662878487065)">
                        <path
                          d="M49.75,86.562V12.035c0,0,16.451,1.083,28.933,5.355c0,0-0.149,13.336-0.147,26.567  c0.004,18.437-14.132,38.17-28.785,41.837 M84.771,12.555C69.664,7.38,50.728,5.925,49.75,5.925c-1.088,0-19.915,1.455-35.021,6.63  c0,0,0.108,16.142,0.104,32.159C14.83,67.034,32.011,90.641,49.75,95.078c17.738-4.438,34.895-28.044,34.891-50.364  C84.639,28.697,84.771,12.555,84.771,12.555"
                          transform="translate(-14.729000091552734,-5.925000190734863)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Provable Fairness System</h5>
                    <p>
                      Sun Gaming integrates &quot;provable fairness&quot; for
                      pre-determined game outcomes delivered in coded form to
                      players.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <Subscribe />
    </>
  );
};

export default Services;
