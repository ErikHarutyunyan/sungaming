// Styles
import { bubble, ellipse7 } from "../../components/Images";
import { dataNews } from "../../data/dataNews";
import "./NewsSingle.css";

const NewsSingle = () => {
  return (
    <>
      <section
        className="banner-section inner-banner position-relative store newsDetails "
        style={{
          backgroundImage: `url(${dataNews[0].imgMain}), linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))`,
        }}>
        <div className="shape-area">
          <img src={bubble} className="shape-1" alt="icon" />
          <img src={ellipse7} className="shape-2" alt="icon" />
        </div>
        <div className="container position-relative">
          <div className="banner-content row justify-content-center">
            <div className="col-lg-8 col-md-10 justify-content-center">
              <div className="main-content">
                <h2 className="visible-slowly-bottom teact-center display-four mb-6">
                  <span className="text-center">{dataNews[0].title}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-20">
          <div className="row">
            <div dangerouslySetInnerHTML={{ __html: dataNews[0].desc }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSingle;
