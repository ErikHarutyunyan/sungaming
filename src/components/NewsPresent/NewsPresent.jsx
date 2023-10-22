import { MdOutlineNorthEast } from "react-icons/md";
import SimpleSlider from "../SimpleSlider";
import { settingsBlog } from "../../features/SliderConfig";
import { dataNews } from "../../data/dataNews";
import { ellipse7, ellipse8 } from "../Images";
import LazyImage from "../LazyImage";
import "./NewsPresent.css";
import { NEWS } from "../../router/route-path";
import { Link } from "react-router-dom";
const NewsPresent = () => {
  return (
    <section className=" about-block  recently-completed blogs gaming-character">
      <div className="shape-area">
        <img
          src={ellipse7}
          alt="ellipse7"
          className="shape-1"
          loading="lazy"
          width="173"
          height="206"
        />
        <img
          src={ellipse8}
          alt="ellipse8"
          className="shape-2"
          loading="lazy"
          width="128"
          height="152"
        />
      </div>
      <div className="container pt-120 pb-120">
        <div className="row section-header justify-content-center">
          <div className="col-lg-6 text-center">
            <h4 className="sub-title">
              The Latest <span>Trends and Technologies</span>
            </h4>
            <span className="fs-two heading mb-6">
              Tips and Tricks from Our <span>Game Development Experts</span>
            </span>
            <p>
              Behind the scenes, we share our game development process, research
              and development efforts, and reflections on our growth in the
              gaming industry
            </p>
          </div>
        </div>
        <div className="row cus-mar present-wrap">
          <SimpleSlider setting={settingsBlog}>
            {dataNews?.slice(1, 5).map((newsItem) => {
              const { id, title, data, imgMain, path } = newsItem;
              return (
                <div
                  key={id}
                  className="slide-area"
                  style="width:100%;display:inline-block">
                  <div className="single-box">
                    <div className="position-relative d-grid align-items-center">
                      <div className="img-box">
                        <Link to={`${NEWS}/${path}`} state={{ data: newsItem }}>
                          <LazyImage
                            alt={title}
                            width="636"
                            height="400"
                            src={imgMain}
                          />
                        </Link>
                      </div>
                      <div className="position-absolute cus-position bottom-0 start-0">
                        <div className="content-box p-3 p-sm-6">
                          <div className="top-bar d-flex align-items-center gap-3">
                            <h5>News</h5>
                            <span>{data}</span>
                          </div>
                          <Link
                            to={`${NEWS}/${path}`}
                            state={{ data: newsItem }}>
                            <h4 className="mt-3">{title}</h4>
                          </Link>

                          <a
                            className="end-area mt-8 d-center"
                            href="/blog-single">
                            <MdOutlineNorthEast />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </SimpleSlider>
        </div>
      </div>
    </section>
  );
};
export default NewsPresent;
