// Styles
import BannerPages from "../../components/BannerPages/BannerPages";
import { privacyBanner } from "../../components/Images";

import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <BannerPages
        title="Our Privacy"
        titleSecond="Policy"
        desc="We're always looking for new ways to provide privacy for our customers."
        bg={privacyBanner}
        classNames={"about privacy"}
        page={"Privacy"}
      />
      <section className="privacy-content">
        <div className="overlay pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="top-wrapper">
                  <h4>
                    We&apos;re always looking for new ways to provide privacy for our
                    customers.
                  </h4>
                  <p>
                    At sungamecasino, accessible from
                    https://sungamecasino.netlify.app/, one of our main
                    priorities is the privacy of our visitors. This Privacy
                    Policy document contains types of information that is
                    collected and recorded by sungamecasino and how we use it.
                  </p>
                  <p>
                    If you have additional questions or require more information
                    about our Privacy Policy, do not hesitate to contact us.
                  </p>
                  <div className="safe-data">
                    <h4>
                      Your data is safe with us, we will not share any
                      information with external sources.
                    </h4>
                    <p>
                      You may consult this list to find the Privacy Policy for
                      each of the advertising partners of sungamecasino.
                      Third-party ad servers or ad networks uses technologies
                      like cookies, JavaScript, or Web Beacons that are used in
                      their respective advertisements and links that appear on
                      sungamecasino, which are sent directly to users&apos; browser.
                      They automatically receive your IP address when this
                      occurs. These technologies are used to measure the
                      effectiveness of their advertising campaigns and/or to
                      personalize the advertising content that you see on
                      websites that you visit. Note that sungamecasino has no
                      access to or control over these cookies that are used by
                      third-party advertisers.
                    </p>
                  </div>
                  <div className="safe-data">
                    <h4>Third Party Privacy Policies</h4>
                    <p>
                      sungamecasino&apos;s Privacy Policy does not apply to other
                      advertisers or websites. Thus, we are advising you to
                      consult the respective Privacy Policies of these
                      third-party ad servers for more detailed information. It
                      may include their practices and instructions about how to
                      opt-out of certain options. You can choose to disable
                      cookies through your individual browser options. To know
                      more detailed information about cookie management with
                      specific web browsers, it can be found at the browsers&apos;
                      respective websites. What Are Cookies?
                    </p>
                  </div>
                  <div className="cookies">
                    <h4>Cookies, tracking and Log Files</h4>
                    <p>
                      sungamecasino follows a standard procedure of using log
                      files. These files log visitors when they visit websites.
                      All hosting companies do this and a part of hosting
                      services&apos; analytics. The information collected by log
                      files include internet protocol (IP) addresses, browser
                      type, Internet Service Provider (ISP), date and time
                      stamp, referring/exit pages, and possibly the number of
                      clicks. These are not linked to any information that is
                      personally identifiable. The purpose of the information is
                      for analyzing trends, administering the site, tracking
                      users&apos; movement on the website, and gathering demographic
                      information.
                    </p>
                  </div>
                  <div className="safe-data">
                    <h4>HOW WE USE YOUR PERSONAL DATA </h4>
                    <p>We process your personal data for the purposes:</p>

                    <ul>
                      <li>to provide and maintain our Service;</li>
                      <li>to notify you about changes to our Service;</li>
                      <li>
                        to comply with our legal and regulatory obligations;
                      </li>
                      <li>
                        to process your online financial and wagering
                        transactions;
                      </li>
                      <li>to provide customer support;</li>
                      <li>
                        to gather analysis or valuable information so that we
                        can improve our Service;
                      </li>
                      <li>to monitor the usage of our Service;</li>
                      <li>to detect, prevent and address technical issues;</li>
                      <li>
                        to provide you with news, special offers and general
                        information about other goods,
                        <br />
                        services and events which we offer that are similar to
                        those that you have already
                        <br />
                        purchased or enquired about unless you have opted not to
                        receive such information.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us pt-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="section-text">
                <h4 className="sub-title">
                  Have <span>Questions?</span>
                </h4>
                <span className="fs-two heading mb-6">
                  We&apos;d Love To <span>Hear From You</span>
                </span>
                <p>
                  Please fill out the form and let us know about your
                  concerns.We will try our best to provide optimized solutions.
                </p>
              </div>
              <div className="contact-area">
                <div className="btn-area mt-10 d-grid gap-6 align-items-center">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-five">
                        {" "}
                        call{" "}
                      </i>
                    </div>
                    <span>+(2) 578 - 365 - 379</span>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="icon-box d-center">
                      <i className="material-symbols-outlined mat-icon fs-five">
                        {" "}
                        mail{" "}
                      </i>
                    </div>
                    <span>Hello@example.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 me-20 mt-7 mt-lg-0">
              <form action="#" className="p-4">
                <div className="form-inside p-4">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="conname">Name</label>
                        <input
                          type="text"
                          id="conname"
                          placeholder="Enter Your Name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="conemail">Email</label>
                        <input
                          type="text"
                          id="conemail"
                          placeholder="Enter your email"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="consubject">Subject</label>
                        <input
                          type="text"
                          id="consubject"
                          placeholder="Enter Subject"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="single-input text-start">
                        <label htmlFor="conmessage">Leave us a message</label>
                        <textarea
                          cols="4"
                          rows="4"
                          id="conmessage"
                          placeholder="Please type your Message here..."></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-4">
                      <div className="btn-area">
                        <button className="box-style btn-box">
                          Send Massage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
