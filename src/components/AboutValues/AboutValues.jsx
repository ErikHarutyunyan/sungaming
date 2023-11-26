// Components
import SimpleSlider from "components/Slides/SimpleSlider";
// Icons
import {
  FaBalanceScale,
  FaCertificate,
  FaGavel,
  FaLightbulb,
  FaMagic,
  FaSmile,
  FaUsers,
} from "react-icons/fa";
// Configs
import { settingsAbout } from "@/features/SliderConfig";

const AboutValues = () => {
  return (
    <section className="gaming-character ongoing-values pt-120 pb-120">
      <div className="container">
        <div className="row header justify-content-center">
          <div className="col-lg-7 text-center">
            <h4 className="sub-title">
              Our Ongoing <span>Values</span>
            </h4>
            <span className="fs-two heading mb-6">
              Our Values Inspire And <span>Drive Our Every Move</span>
            </span>
            <p>
              Our values are a reflection of our inner selves, shaped by our
              unique experiences, beliefs, aspirations, and cannot be simply
              adopted from others or chosen arbitrarily.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-lg-12">
            <div className="ongoing-values-carousel about-values slick-initialized slick-slider slick-dotted">
              <SimpleSlider setting={settingsAbout}>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaBalanceScale size={35} color="white" />
                  </div>
                  <h3 className="mt-6 pb-2">Integrity</h3>
                  <p>
                    We uphold the highest ethical standards, ensuring fairness
                    and transparency in all our operations.
                  </p>
                </div>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaLightbulb size={35} color="white" />
                  </div>
                  <h3 className="mt-6 pb-2">Innovation</h3>
                  <p>
                    We constantly strive to innovate, delivering cutting-edge
                    solutions and experiences to our users.
                  </p>
                </div>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaCertificate size={35} color="white" />
                  </div>
                  <h3 className="mt-6 pb-2">Excellence</h3>
                  <p>
                    We pursue excellence in everything we do, from game
                    development to customer support.
                  </p>
                </div>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaUsers size={35} color="white" />
                  </div>
                  <h3 className="mt-6 pb-2">Teamwork</h3>
                  <p>
                    We believe in the power of collaboration, working together
                    to achieve our goals.
                  </p>
                </div>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaSmile size={35} color="white" />
                  </div>
                  <h3 className="mt-6 pb-2">Fun and Entertainment</h3>
                  <p>
                    We aim to provide fun and entertaining experiences for our
                    players while maintaining a responsible gaming environment.
                  </p>
                </div>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaGavel size={35} color="white" />
                  </div>
                  <h3 className="mt-6 pb-2">Fair Play</h3>
                  <p>
                    Commitment to fair play, transparency, and integrity in all
                    aspects of our gambling offerings.
                  </p>
                </div>
                <div className="single-box p-5 py-sm-10 px-sm-8 box-style box-first">
                  <div className="icon-box d-center">
                    <FaMagic size={35} color="white" />
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
  );
};
export default AboutValues;
