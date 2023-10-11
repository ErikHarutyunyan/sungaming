// Styles
import "./News.css";
import BannerPages from "../../components/BannerPages/BannerPages";
import newsBg from "../../assets/img/bg2.jpg";
import {Link} from "react-router-dom";
import {CONTACT, NEWS} from "../../router/route-path";
import {allCategoriesNews, dataNews} from "../../data/dataNews";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {AiOutlinePhone, AiOutlineRight, AiOutlineSearch,} from "react-icons/ai";
import {motion} from "framer-motion";
import {useState} from "react";
import Subscribe from "../../components/Subscribe";

const News = () => {
  const newsCount = dataNews.length;
  const [searchResults, setSearchResults] = useState(dataNews);

  // Function to handle category selection
  const handleCategorySelect = (categoryName) => {
    const filteredNews =
      categoryName === "All"
        ? dataNews
        : dataNews.filter((news) => news.category.includes(categoryName));
    setSearchResults(filteredNews);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    // Filter dataNews based on the search query
    const filteredResults = dataNews.filter((news) => {
      const titleMatches = news.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const categoryMatches = news.category.some(
        (category) => category.toLowerCase().includes(query) // Convert category name to lowercase
      );
      const pathMatches = news.path.toLowerCase().includes(query.toLowerCase());

      return titleMatches || categoryMatches || pathMatches;
    });
    setSearchResults(
      filteredResults.length === 0 && query.length === 0
        ? dataNews
        : filteredResults
    );
  };
  return (
    <>
      <BannerPages
        page={"News"}
        bg={newsBg}
        titleSecond={"News"}
        classNames="newsBanner"
        desc={"Your Premier Destination for Online Entertainment!"}
      />
      <section className="recently-completed blogs blog-section pb-120">
        <div className="container pt-120">
          <h1 className="pb-10">News</h1>

          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="news-section">
                {searchResults?.length > 0 ? (
                  searchResults?.map((news) => {
                    const {id, imgMain, title, shortInfo, data, path} = news;
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
                        className="newsItem"
                        key={id}>
                        <div className="newsImg-a">
                          <Link to={`${NEWS}/${path}`} state={{data: news}}>
                            <img alt="Image" loading="lazy" src={imgMain}/>
                          </Link>
                        </div>
                        <i>{data}</i>
                        <h6>{title}</h6>
                        <p>{shortInfo}</p>
                        <Link to={`${NEWS}/${path}`} state={{data: news}}>
                          Read More
                        </Link>
                      </motion.div>
                    );
                  })
                ) : (
                  <p>No search results found</p>
                )}
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
              <div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
                <div className="d-flex flex-column gap-6">
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Search</h3>
                    <div className="input-area mt-6 p-1 d-flex search align-items-center">
                      <input
                        type="text"
                        className="ps-3"
                        placeholder="Search"
                        onChange={handleSearchInputChange}
                      />
                      <div className="btn-area search">
                        <button className="box-style btn-box border-re p-2">
                          <AiOutlineSearch size={20}/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Category</h3>
                    <ul className="underwriters d-grid gap-3">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="d-center justify-content-between"
                          onClick={() => handleCategorySelect("All")}>
                          <div className="d-flex gap-1">
                            <div className="icon-wrap">
                              <MdKeyboardDoubleArrowRight/>
                            </div>
                            <span>All</span>
                          </div>
                          <div className="right-area">
                            <span>({newsCount})</span>
                          </div>
                        </a>
                      </li>

                      {allCategoriesNews?.map((category, index) => {
                        return (
                          <li key={index}>
                            <a
                              href="javascript:void(0)"
                              className="d-center justify-content-between"
                              onClick={() => handleCategorySelect(category[0])}>
                              <div className="d-flex gap-1">
                                <div className="icon-wrap">
                                  <MdKeyboardDoubleArrowRight/>
                                </div>
                                <span>{category[0]}</span>
                              </div>
                              <div className="right-area">
                                <span>({category[1]})</span>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="sidebar-area p-5">
                    <h3 className="visible-slowly-bottom mb-6">Follow Us</h3>
                    <ul className="d-flex gap-4 social-area">
                      <li>
                        <a
                          href="https://www.facebook.com"
                          aria-label="Facebook"
                          className="d-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 320 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com"
                          aria-label="Instagram"
                          className="d-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com"
                          aria-label="Linkedin"
                          className="d-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-area py-8 py-sm-15 text-center p-5">
                    <h5 className="mb-4">
                      <span>Let’s Work Together</span>
                    </h5>
                    <h3 className="visible-slowly-bottom mb-8">
                      Game Studio Services Agency
                    </h3>
                    <div className="btn-area alt-bg">
                      <Link
                        to={CONTACT}
                        className="box-style btn-box newsContact"
                        style={{width: "auto", height: "auto"}}>
                        Contact us
                        <AiOutlineRight/>
                      </Link>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="d-center mt-8 call-number gap-2">
                      <AiOutlinePhone size={20}/>
                      +000 (123) 456 88
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
    </>
  );
};

export default News;
