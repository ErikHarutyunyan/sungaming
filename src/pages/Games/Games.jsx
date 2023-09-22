// Styles
import "./Games.css"
import {bubble, ellipse7} from "../../components/Images/index.jsx";
import {FiChevronRight} from "react-icons/fi";
import {GrShieldSecurity} from "react-icons/gr";
import {FaStudiovinari} from "react-icons/fa";
import {PiLightbulbLight} from "react-icons/pi";
import {MdSecurity} from "react-icons/md";
import gameimg6 from "../../assets/img/game-image-6.png"

const Games = () => {
  return (
    <>
      <section className="banner-section inner-banner position-relative about game">
        <div className="shape-area">
          <img src={bubble} className="shape-1" alt="icon"/>
          <img src={ellipse7} className="shape-2" alt="icon"/>
        </div>
        <div className="container position-relative">
          <div className="banner-content row justify-content-between">
            <div className="col-lg-6 col-md-10">
              <div className="main-content">
                <h2 className="visible-slowly-bottom display-four mb-6">Our <span>Games</span></h2>
                <p className="fs-four">Our projects feature unique mechanics, fine-tuned gameplay, and
                  eye-catching visual style.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
              <div className="breadcrumb-area position-absolute end-0 bottom-0">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-center justify-content-center">
                    <li className="breadcrumb-item p-0 m-0"><a href="index.html">Home</a></li>
                    <FiChevronRight size={20} color={"white"}/>
                    <li className="breadcrumb-item active" aria-current="page">Games</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-game-features pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-text text-center">
                <h2 className="visible-slowly-bottom sub-title">The Four Key Components of a <span>Sun Gaming</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-md-6">
              <div
                className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between"
              >
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">

                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width={50} height={50}
                         x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
<g><g><g><path fill="#0ef0ad" d="M44.7,20.6c-6,1.5-11.4,5.9-13.6,11.2L30,34.4l-0.1,46.9l-0.1,46.9h4.8h4.8l0.1-45.5l0.1-45.6l1.4-2.2c1-1.6,2.1-2.6,3.7-3.4l2.3-1.2l89.5-0.1c63.9-0.1,90.1,0,91.9,0.4c3.5,0.7,6.7,3.8,7.4,7.2c0.7,3.4,0.7,146.1,0,149.4c-0.6,2.8-2.4,5.1-5.2,6.6l-1.9,1l-75,0.1l-75,0.1v5.1v5.1h19.8h19.8l-0.1,10.3l-0.1,10.2l-9.8,0.1l-9.8,0.1v5.1v5.1h39.4h39.4V231v-5.1h-9.9h-9.9v-10.4v-10.4h35.4c38.9,0,38.1,0,43.5-2.9c4.7-2.5,8.1-7.1,9.1-12.8c0.6-3.4,0.6-150.6,0-153.9c-1.1-5.7-4.4-10.3-9.1-12.8c-5.7-3,1.1-2.9-98.7-2.8C66.9,20,46.6,20.1,44.7,20.6z"/><path
  fill="#0ef0ad"
  d="M11.6,139.5L10,141l0.1,46.2l0.1,46.2l1.5,1.3l1.5,1.3h26.3h26.3l1.5-1.3l1.5-1.3l0.1-46.2L69,141l-1.6-1.6l-1.6-1.6H39.5H13.1L11.6,139.5z M59.3,181.9v34.3H39.5H19.7v-34.3v-34.3h19.8h19.8V181.9z M41.8,222.1c4.3,2.2,2.5,8.9-2.4,8.9c-2,0-4.3-1.7-4.7-3.5c-0.5-1.8,0.6-4.3,2.2-5.3C38.7,221.1,40,221.1,41.8,222.1z"/><path
  fill="#0ef0ad"
  d="M78.9,154.2c-0.1,0.3-0.1,2.7-0.1,5.2l0.1,4.6l78.5,0.1l78.4,0.1v-5.3v-5.3h-78.3C93,153.6,79,153.7,78.9,154.2z"/><path
  fill="#0ef0ad"
  d="M134.7,175.8c-1.4,1.4-1.6,1.9-1.6,3.7c0,4.5,4.6,6.5,7.9,3.6c1.3-1.2,1.5-1.6,1.5-3.7c0-3-1.4-4.6-4.3-5C136.5,174.2,136.1,174.4,134.7,175.8z"/></g></g></g>
</svg>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Responsive</h5>
                    <p>Welcome to our online gaming site! Enjoy the best games on any device: mobile, tablet, or
                      desktop. Our site is fully responsive, providing a smooth gaming experience. With a wide selection
                      of games, you're sure to find something exhilarating. Get ready to dive into the exciting world of
                      online gaming!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between"
              >
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <MdSecurity size={45} color={"#0ef0ad"}/>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">For Everyone</h5>
                    <p>Sun Gaming guarantees a fair & safe gaming experience with our Provable Fairness System. It uses
                      cryptographic tech to generate a random outcome with a house edge. Every game has a unique seed &
                      customers can verify its fairness. We take fair gaming seriously & offer this system for peace of
                      mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <FaStudiovinari size={45} color={"#0ef0ad"}/>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Fast Gaming</h5>
                    <p>Gambling games are exciting and fast-paced! Get your heart racing with high stakes and
                      lightning-fast gameplay. You'll be sure to get your
                      heart pounding with every spin or roll of the dice! Experience the thrill of fast-paced gambling
                      entertainment today! </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <PiLightbulbLight size={45} color={"#0ef0ad"}/>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Unique Twist</h5>
                    <p>Discover our online gambling site for unique twists on classic games like slots and blackjack!
                      Experience something new every time you play with innovative bonus rounds, unique themes, and
                      bonus features. Visit us today and start playing!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Games
