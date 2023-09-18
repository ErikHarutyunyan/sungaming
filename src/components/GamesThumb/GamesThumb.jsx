import { MdSportsSoccer } from "react-icons/md";

import {
  allGameBg,
  allGames1,
  allGamesProfile1,
  ourGamesShape1,
  ourGamesShape2,
  ourGamesShape3,
} from "../Images";
import { allCategoriesGames, dataGames } from "../../data/dataGames";
import { useState } from "react";

// import "./GamesThumb.css";

const GamesThumb = () => {
  const [menuItems, setMenuItems] = useState(dataGames);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(e.target.id);
  };

  const filterItems = (category) => {
    console.log("category :", category);
    if (category[0] === "All Games") {
      setMenuItems(dataGames);
      return;
    }

    const newItems = dataGames.filter((item) => {
      console.log(item.category[0]);
      return item.category[0] == category;
    });
    setMenuItems(newItems);
  };

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
          <div className="col-lg-6 text-center">
            <ul className="nav tablinks flex-wrap d-center mb-10 d-inline-flex gap-4 p-3 tab-area">
              {allCategoriesGames.map((item, index) => {
                const category =
                  Array.isArray(item[0]) == true ? item[0] : [item[0]];
                // const ids = item[1];
                return (
                  <li className="nav-item pointer" key={index}>
                    <button
                      id={`category_${index}`}
                      className={
                        isActive === `category_${index}`
                          ? `${category[0]}_category nav-link d-center box-style btn-box active_category`
                          : `${category[0]}_category nav-link d-center box-style btn-box`
                      }
                      onClick={(e) => {
                        const className = e.target.className;
                        if (!className.includes("active_category")) {
                          filterItems(category[0]);
                          handleClick(e);
                        }
                      }}>
                      {category[1] !== undefined && (
                        <span className="icon-area">{category[1]}</span>
                      )}
                      {category[0]}
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
              {menuItems.map((item) => {
                const { category } = item;
                console.log("category :", category);

                <div className="tabitem active">
                  <div className="row cus-mar justify-content-center">
                    <div className="col-xl-4 col-sm-6 col-8">
                      <div className="single-box">
                        <div className="img-area">
                          <img
                            alt="img"
                            loading="lazy"
                            width="416"
                            height="290"
                            src={allGames1}
                          />
                        </div>
                        <div className="footer-area mb-7 text-center">
                          <div className="logo-area">
                            <img
                              alt="img"
                              loading="lazy"
                              width="80"
                              height="80"
                              src={allGamesProfile1}
                            />
                          </div>
                          <h3 className="visible-slowly-bottom my-4">
                            Crazy Wild
                          </h3>
                          <p>Empire of the Stars</p>
                          <div className="btn-area alt-bg">
                            <a
                              className="box-style btn-box mt-7 d-center"
                              href="game">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-8">
                      <div className="single-box">
                        <div className="img-area">
                          <img
                            alt="img"
                            loading="lazy"
                            width="416"
                            height="290"
                            src={allGames1}
                          />
                        </div>
                        <div className="footer-area mb-7 text-center">
                          <div className="logo-area">
                            <img
                              alt="img"
                              loading="lazy"
                              width="80"
                              height="80"
                              src={allGamesProfile1}
                            />
                          </div>
                          <h3 className="visible-slowly-bottom my-4">
                            Crazy Wild
                          </h3>
                          <p>Empire of the Stars</p>
                          <div className="btn-area alt-bg">
                            <a
                              className="box-style btn-box mt-7 d-center"
                              href="game">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-8">
                      <div className="single-box">
                        <div className="img-area">
                          <img
                            alt="img"
                            loading="lazy"
                            width="416"
                            height="290"
                            src={allGames1}
                          />
                        </div>
                        <div className="footer-area mb-7 text-center">
                          <div className="logo-area">
                            <img
                              alt="img"
                              loading="lazy"
                              width="80"
                              height="80"
                              src={allGamesProfile1}
                            />
                          </div>
                          <h3 className="visible-slowly-bottom my-4">
                            Crazy Wild
                          </h3>
                          <p>Empire of the Stars</p>
                          <div className="btn-area alt-bg">
                            <a
                              className="box-style btn-box mt-7 d-center"
                              href="game">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
              <div className="tabitem active">
                <div className="row cus-mar justify-content-center">
                  <div className="col-xl-4 col-sm-6 col-8">
                    <div className="single-box">
                      <div className="img-area">
                        <img
                          alt="img"
                          loading="lazy"
                          width="416"
                          height="290"
                          src={allGames1}
                        />
                      </div>
                      <div className="footer-area mb-7 text-center">
                        <div className="logo-area">
                          <img
                            alt="img"
                            loading="lazy"
                            width="80"
                            height="80"
                            src={allGamesProfile1}
                          />
                        </div>
                        <h3 className="visible-slowly-bottom my-4">
                          Crazy Wild
                        </h3>
                        <p>Empire of the Stars</p>
                        <div className="btn-area alt-bg">
                          <a
                            className="box-style btn-box mt-7 d-center"
                            href="game">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 col-8">
                    <div className="single-box">
                      <div className="img-area">
                        <img
                          alt="img"
                          loading="lazy"
                          width="416"
                          height="290"
                          src={allGames1}
                        />
                      </div>
                      <div className="footer-area mb-7 text-center">
                        <div className="logo-area">
                          <img
                            alt="img"
                            loading="lazy"
                            width="80"
                            height="80"
                            src={allGamesProfile1}
                          />
                        </div>
                        <h3 className="visible-slowly-bottom my-4">
                          Crazy Wild
                        </h3>
                        <p>Empire of the Stars</p>
                        <div className="btn-area alt-bg">
                          <a
                            className="box-style btn-box mt-7 d-center"
                            href="game">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 col-8">
                    <div className="single-box">
                      <div className="img-area">
                        <img
                          alt="img"
                          loading="lazy"
                          width="416"
                          height="290"
                          src={allGames1}
                        />
                      </div>
                      <div className="footer-area mb-7 text-center">
                        <div className="logo-area">
                          <img
                            alt="img"
                            loading="lazy"
                            width="80"
                            height="80"
                            src={allGamesProfile1}
                          />
                        </div>
                        <h3 className="visible-slowly-bottom my-4">
                          Crazy Wild
                        </h3>
                        <p>Empire of the Stars</p>
                        <div className="btn-area alt-bg">
                          <a
                            className="box-style btn-box mt-7 d-center"
                            href="game">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
