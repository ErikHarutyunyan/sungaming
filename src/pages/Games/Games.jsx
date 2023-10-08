// Styles
import "./Games.css";
import { bubble, ellipse7 } from "../../components/Images/index.jsx";
import { FiChevronRight } from "react-icons/fi";
import { GrShieldSecurity } from "react-icons/gr";
import { FaStudiovinari } from "react-icons/fa";
import { PiLightbulbLight } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import gameimg6 from "../../assets/img/game-image-6.png";
import money from "../../assets/img/money-drive.jpg";
import gameShape1 from "../../assets/img/gameShape5.gif";
import gameShape2 from "../../assets/img/gameShape3.gif";
import { Suspense, useReducer, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "../../components/Shapes/Shapes.jsx";
import { transition } from "../../settings/gameButtonSetings.js";
import useMeasure from "react-use-measure";
import bannerGameCut from "../../assets/img/bannerGameCut.gif";
import {
  allCategoriesGames,
  categoryIcons,
  dataGames,
} from "../../data/dataGames";
import { GAMES } from "../../router/route-path";
import { Link } from "react-router-dom";
import Subscribe from "../../components/Subscribe/index.jsx";
import CounterActive from "../../components/CounterActive/CounterActive.jsx";
import BannerPages from "../../components/BannerPages/BannerPages.jsx";

const gamesPerRow = 4;

const Games = () => {
  const [next, setNext] = useState(gamesPerRow);

  const [menuItems, setMenuItems] = useState(dataGames);
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMoreGames = () => {
    setNext(next + gamesPerRow);
  };

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [isActive, setIsActive] = useState("category_0");

  const handleClick = (e) => {
    setIsActive(e.target.id);
  };

  const filterItems = (category) => {
    if (category[0] === "All Games") {
      setMenuItems(dataGames);
      return;
    }
    console.log("<category></category> :", category);
    const newItems = dataGames.filter((item) => {
      if (item.category.length > 1 && item.category.includes(category))
        return item.category.filter(
          (categoryItem) => categoryItem === category
        );
      else return item.category[0] == category;
    });
    setMenuItems(newItems);
  };

  const [toggled, toggle] = useReducer((state) => !state, true);

  return (
    <>
      <BannerPages
        classNames={"game"}
        bg={bannerGameCut}
        page={"Games"}
        title={"Our"}
        titleSecond={"Games"}
        desc={
          "Our projects feature unique mechanics, fine-tuned gameplay, and eye-catching visual style."
        }
      />

      <section className="our-game-features pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-text text-center">
                <h2 className="visible-slowly-bottom sub-title">
                  The Four Key Components of a <span>Sun Gaming</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="50px"
                      height="50px"
                      x="0px"
                      y="0px"
                      viewBox="0 0 256 256"
                      enableBackground="new 0 0 256 256"
                      xmlSpace="preserve">
                      <g>
                        <g>
                          <g>
                            <path
                              fill="#0ef0ad"
                              d="M44.7,20.6c-6,1.5-11.4,5.9-13.6,11.2L30,34.4l-0.1,46.9l-0.1,46.9h4.8h4.8l0.1-45.5l0.1-45.6l1.4-2.2c1-1.6,2.1-2.6,3.7-3.4l2.3-1.2l89.5-0.1c63.9-0.1,90.1,0,91.9,0.4c3.5,0.7,6.7,3.8,7.4,7.2c0.7,3.4,0.7,146.1,0,149.4c-0.6,2.8-2.4,5.1-5.2,6.6l-1.9,1l-75,0.1l-75,0.1v5.1v5.1h19.8h19.8l-0.1,10.3l-0.1,10.2l-9.8,0.1l-9.8,0.1v5.1v5.1h39.4h39.4V231v-5.1h-9.9h-9.9v-10.4v-10.4h35.4c38.9,0,38.1,0,43.5-2.9c4.7-2.5,8.1-7.1,9.1-12.8c0.6-3.4,0.6-150.6,0-153.9c-1.1-5.7-4.4-10.3-9.1-12.8c-5.7-3,1.1-2.9-98.7-2.8C66.9,20,46.6,20.1,44.7,20.6z"
                            />
                            <path
                              fill="#0ef0ad"
                              d="M11.6,139.5L10,141l0.1,46.2l0.1,46.2l1.5,1.3l1.5,1.3h26.3h26.3l1.5-1.3l1.5-1.3l0.1-46.2L69,141l-1.6-1.6l-1.6-1.6H39.5H13.1L11.6,139.5z M59.3,181.9v34.3H39.5H19.7v-34.3v-34.3h19.8h19.8V181.9z M41.8,222.1c4.3,2.2,2.5,8.9-2.4,8.9c-2,0-4.3-1.7-4.7-3.5c-0.5-1.8,0.6-4.3,2.2-5.3C38.7,221.1,40,221.1,41.8,222.1z"
                            />
                            <path
                              fill="#0ef0ad"
                              d="M78.9,154.2c-0.1,0.3-0.1,2.7-0.1,5.2l0.1,4.6l78.5,0.1l78.4,0.1v-5.3v-5.3h-78.3C93,153.6,79,153.7,78.9,154.2z"
                            />
                            <path
                              fill="#0ef0ad"
                              d="M134.7,175.8c-1.4,1.4-1.6,1.9-1.6,3.7c0,4.5,4.6,6.5,7.9,3.6c1.3-1.2,1.5-1.6,1.5-3.7c0-3-1.4-4.6-4.3-5C136.5,174.2,136.1,174.4,134.7,175.8z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Responsive</h5>
                    <p>
                      Welcome to our online gaming site! Enjoy the best games on
                      any device: mobile, tablet, or desktop. Our site is fully
                      responsive, providing a smooth gaming experience. With a
                      wide selection of games, you're sure to find something
                      exhilarating. Get ready to dive into the exciting world of
                      online gaming!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <MdSecurity size={45} color={"#0ef0ad"} />
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">For Everyone</h5>
                    <p>
                      Sun Gaming guarantees a fair & safe gaming experience with
                      our Provable Fairness System. It uses cryptographic tech
                      to generate a random outcome with a house edge. Every game
                      has a unique seed & customers can verify its fairness. We
                      take fair gaming seriously & offer this system for peace
                      of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <FaStudiovinari size={45} color={"#0ef0ad"} />
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Fast Gaming</h5>
                    <p>
                      Gambling games are exciting and fast-paced! Get your heart
                      racing with high stakes and lightning-fast gameplay.
                      You'll be sure to get your heart pounding with every spin
                      or roll of the dice! Experience the thrill of fast-paced
                      gambling entertainment today!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
                <div className="content-box d-flex gap-4 gap-md-6">
                  <div className="icon-box d-inline-flex d-center">
                    <PiLightbulbLight size={45} color={"#0ef0ad"} />
                  </div>
                  <div className="info-box">
                    <h5 className="mb-2">Unique Twist</h5>
                    <p>
                      Discover our online gambling site for unique twists on
                      classic games like slots and blackjack! Experience
                      something new every time you play with innovative bonus
                      rounds, unique themes, and bonus features. Visit us today
                      and start playing!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-games overflow-hidden index-two position-relative pt-120 pb-120">
        <div className="shape-area">
          <img
            src={gameShape1}
            alt="gameShape1"
            className="shape-1 gameShape gameShape1"
          />
          <img
            src={gameShape2}
            alt="gameShape1"
            className="shape-3 gameShape gameShape1"
          />
        </div>
        <div className="container singletab position-relative cus-z1">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-text text-center">
                <h4 className="sub-title">
                  Unlock a World of <span>Gaming Possibilities,</span> Full
                  Immersion
                </h4>
                <span className="fs-two heading mb-6">
                  Join <span>Gaming Community,</span> Explore Virtual World
                  Boundaries
                </span>
                <p>
                  Join the revolution in gaming and experience the thrill of the
                  game like never before, with our advanced technology and
                  dynamic gameplay.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <ul className="nav tablinks flex-wrap d-center mb-6 mb-sm-10 d-inline-flex gap-4 p-3 tab-area">
                {allCategoriesGames.map((category, index) => {
                  return (
                    <li
                      className="nav-item pointer"
                      key={index}
                      onClick={(e) => {
                        toggle();
                        const className = e.target.className;
                        if (!className.includes("active_category")) {
                          filterItems(
                            category === "All Games" ? [category] : category
                          );
                          handleClick(e);
                        }
                      }}>
                      <button
                        id={`category_${index}`}
                        className={
                          isActive === `category_${index}`
                            ? `${category}_category nav-link d-center box-style btn-box active_category`
                            : `${category}_category nav-link d-center box-style btn-box`
                        }>
                        {categoryIcons[category.toLowerCase()] !==
                          undefined && (
                          <span className="icon-area pe-none">
                            {categoryIcons[category.toLowerCase()]}
                          </span>
                        )}
                        {category}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="tabcontents visible-from-bottom">
                <div className="tabitem active">
                  <div className="row cus-mar game-section-block-wrp">
                    {/* <div className=" game-section-block ">
                      <div className="single-box">
                        <div className="position-relative d-center">
                          <img
                            src={money}
                            className="w-100 thumb-img"
                            alt="sec-img"
                          />
                          <MotionConfig transition={transition}>
                            <motion.a
                              href="/google.com"
                              style={{ position: "absolute" }}
                              className="buttonPlay"
                              ref={ref}
                              initial={false}
                              animate={isHover ? "hover" : "rest"}
                              whileTap="press"
                              variants={{
                                rest: { scale: 0.7 },
                                hover: { scale: 0.85 },
                                press: { scale: 0.7 },
                              }}
                              onHoverStart={() => {
                                resetMousePosition();
                                setIsHover(true);
                              }}
                              onHoverEnd={() => {
                                resetMousePosition();
                                setIsHover(false);
                              }}
                              onTapStart={() => setIsPress(true)}
                              onTap={() => setIsPress(false)}
                              onTapCancel={() => setIsPress(false)}
                              onPointerMove={(e) => {
                                mouseX.set(
                                  e.clientX - bounds.x - bounds.width / 2
                                );
                                mouseY.set(
                                  e.clientY - bounds.y - bounds.height / 2
                                );
                              }}>
                              <motion.div
                                className="shapesPlay"
                                variants={{
                                  rest: { opacity: 0 },
                                  hover: { opacity: 1 },
                                }}>
                                <div className="pink blush" />
                                <div className="blue blush" />
                                <div className="containerr">
                                  <Suspense fallback={null}>
                                    <Shapes
                                      isHover={isHover}
                                      isPress={isPress}
                                      mouseX={mouseX}
                                      mouseY={mouseY}
                                    />
                                  </Suspense>
                                </div>
                              </motion.div>
                              <motion.div
                                variants={{
                                  hover: { scale: 0.85 },
                                  press: { scale: 1.1 },
                                }}
                                className="labelPlay">
                                Play Demo
                              </motion.div>
                            </motion.a>
                          </MotionConfig>
                          <h3 className="gameTitle">Title</h3>
                        </div>
                        <div className="link-item">
                          <a
                            className="py-2 px-5 text-decoration-underline position-absolute bottom-0"
                            href="/services">
                            More Details
                          </a>
                        </div>
                      </div>
                    </div> */}
                    {menuItems?.slice(0, next)?.map((item) => {
                      const { id, title, imgMain, path, } =
                        item;
                      return (
                        <motion.div
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              ease: "easeInOut",
                              delay: 0.2,
                              stiffness: 10,
                              duration: 0.5,
                            },
                          }}
                          initial={{
                            opacity: 0,
                            y: 50,
                            transition: {
                              ease: "easeInOut",
                              delay: 0.2,
                              stiffness: 10,
                              duration: 0.5,
                            },
                          }}
                          transition={{
                            stiffness: 400,
                            damping: 10,
                            transition: {
                              ease: "easeInOut",
                              delay: 0.2,
                              stiffness: 10,
                              duration: 0.5,
                            },
                          }}
                          exit={{
                            y: -50,
                            opacity: 0,
                            transition: {
                              ease: "easeInOut",
                              delay: 0.2,
                              stiffness: 10,
                              duration: 0.5,
                            },
                          }}
                          key={id}
                          className={` game-section-block`}>
                          <div className="single-box">
                            <div className="position-relative d-center head">
                              <img
                                src={imgMain}
                                className="w-100 thumb-img"
                                alt="sec-img"
                              />

                              <h3 className="gameTitle">{title}</h3>
                            </div>

                            <div className="link-item py-3">
                              <Link
                                className=" px-5 text-decoration-underline"
                                to={`${GAMES}/${path}`}
                                state={{ data: item }}>
                                More Details
                              </Link>
                            </div>
                          </div>
                          <MotionConfig transition={transition}>
                            <motion.a
                              href="/google.com"
                              className="buttonPlay"
                              style={{ position: "absolute" }}
                              ref={ref}
                              initial={false}
                              animate={isHover ? "hover" : "rest"}
                              whileTap="press"
                              variants={{
                                rest: {
                                  scale: 1,
                                },
                                hover: {
                                  scale: 1.1,
                                },
                                press: {
                                  scale: 0.95,
                                },
                              }}
                              onHoverStart={() => {
                                resetMousePosition();
                                setIsHover(true);
                              }}
                              onHoverEnd={() => {
                                resetMousePosition();
                                setIsHover(false);
                              }}
                              onTapStart={() => setIsPress(true)}
                              onTap={() => setIsPress(false)}
                              onTapCancel={() => setIsPress(false)}
                              onPointerMove={(e) => {
                                mouseX.set(
                                  e.clientX - bounds.x - bounds.width / 2
                                );
                                mouseY.set(
                                  e.clientY - bounds.y - bounds.height / 2
                                );
                              }}>
                              <motion.div
                                className="shapesPlay"
                                variants={{
                                  rest: { opacity: 0 },
                                  hover: { opacity: 1 },
                                }}>
                                <div className="pink blush" />
                                <div className="blue blush" />
                                <div className="containerr">
                                  <Suspense fallback={null}>
                                    <Shapes
                                      isHover={isHover}
                                      isPress={isPress}
                                      mouseX={mouseX}
                                      mouseY={mouseY}
                                    />
                                  </Suspense>
                                </div>
                              </motion.div>
                              <motion.div
                                variants={{
                                  hover: { scale: 1.1 },
                                  press: { scale: 0.85 },
                                }}
                                className="labelPlay">
                                Play Demo
                              </motion.div>
                            </motion.a>
                          </MotionConfig>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="text-center mt-10 mt-sm-15">
                    <div className="loading py-3 px-8 d-inline-flex align-items-center gap-2">
                      <div className="icon-box d-center">
                        {next < menuItems?.length && (
                          <button className="" onClick={handleMoreGames}>
                            Load more
                          </button>
                        )}
                      </div>
                      {/*<span>Loading</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterActive />
      <Subscribe />
    </>
  );
};

export default Games;
