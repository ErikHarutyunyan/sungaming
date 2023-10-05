import {
  allGameBg,
  ourGamesShape1,
  ourGamesShape2,
  ourGamesShape3,
} from "../Images";
import {
  allCategoriesGames,
  dataGames,
  categoryIcons,
} from "../../data/dataGames";
import { useReducer, useState } from "react";

import "./GamesThumb.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GAMES } from "../../router/route-path.jsx";

const GamesThumb = () => {
  const [menuItems, setMenuItems] = useState(dataGames);
  const [isActive, setIsActive] = useState("category_0");

  const handleClick = (e) => {
    setIsActive(e.target.id);
  };

  const filterItems = (category) => {
    if (category[0] === "All Games") {
      setMenuItems(dataGames);
      return;
    }
    console.log("category", category);
    const newItems = dataGames.filter((item) => {
      if (item.category.length > 1)
        return item.category.filter(
          (categoryItem) => categoryItem === category
        );
      else return item.category[0] == category;
    });
    setMenuItems(newItems);
  };

  const [toggled, toggle] = useReducer((state) => !state, true);

  return (
    <section
      className="our-games all-games overflow-hidden pt-120 pb-120"
      style={{ backgroundImage: `url(${allGameBg})` }}>
      <div className="shape-area">
        <img
          src={ourGamesShape1}
          alt="icon"
          loading="lazy"
          width="204"
          height="177"
          className="shape-1"
        />
        <img
          src={ourGamesShape2}
          alt="icon"
          loading="lazy"
          width="151"
          height="151"
          className="shape-4"
        />
        <img
          src={ourGamesShape3}
          alt="icon"
          loading="lazy"
          width="172"
          height="170"
          className="shape-3"
        />
      </div>
      <div className="container singletab">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-text text-center">
              <h4 className="sub-title">
                Crafting Unforgettable <span>Gaming Experiences</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our Games are <span>Vibrant</span> Worlds With
                <span>Charming</span> Characters
              </span>
              <p>
                Our projects feature unique mechanics, fine-tuned game play, and
                eye-catching visual style.Over 100 million people play our games
                every month
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 text-center">
            <ul className="nav tablinks flex-wrap d-center mb-10 d-inline-flex gap-4 p-3 tab-area">
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
                      {categoryIcons[category.toLowerCase()] !== undefined && (
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
          <div className="col-lg-10">
            <div className="tabcontents tab-content">
              <div className={`tabitem active`}>
                <div className="row cus-mar justify-content-center">
                  {menuItems?.map((item) => {
                    const { id, title, imgMain, imgSmall, desc, path } = item;
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
                        className={`col-xl-4 col-sm-6 col-8`}>
                        <div className="single-box">
                          <div className="img-area">
                            <img alt="img" loading="lazy" src={imgMain} />
                          </div>
                          <div className="footer-area mb-5 text-center">
                            <div className="logo-area logoGame">
                              <img
                                alt="img"
                                loading="lazy"
                                width="80"
                                height="80"
                                src={imgSmall}
                              />
                            </div>
                            <h3 className="visible-slowly-bottom my-3">
                              {title}
                            </h3>
                            <p className="text-truncate ps-10 pe-10 ">{desc}</p>
                            <div className="btn-area alt-bg">
                              <Link
                                className="box-style btn-box mt-4 d-center"
                                to={`${GAMES}\\${path}`}>
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GamesThumb;
