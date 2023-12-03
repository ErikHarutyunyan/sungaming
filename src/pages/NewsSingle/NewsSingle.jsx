import { useLocation, useNavigate, useParams } from "react-router-dom";
// Components
import BannerPages from "components/BannerPages";
// Data
import { dataNews } from "data/dataNews";
import SEO from "@/components/SEO";

const NewsSingle = () => {
  const location = useLocation();
  const { id: title } = useParams();
  const navigate = useNavigate();
  let data = location.state?.data;
  if (!data) {
    const singleNews = dataNews.find((news) => {
      return news.path === title;
    });
    data = singleNews;
  }
  return (
    <>
      <SEO
        title={`Sun Gaming | ${data.title}`}
        description={data.desc}
        type="article"
        url={`https://sungaming.netlify.app/${location.pathname}`}
        img={data.imgMain}
      />
      <BannerPages
        classNames="store newsDetails"
        gradientImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))"
        bg={data.imgMain}
        resetChild
      >
        <div className="container position-relative">
          <div className="banner-content row justify-content-center">
            <div className="col-lg-8 col-md-10 justify-content-center">
              <div className="main-content">
                <h2 className="visible-slowly-bottom teact-center display-four mb-6">
                  <span className="text-center">{data.title}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </BannerPages>
      <section>
        <div className="container pt-20">
          <div className="row">
            <div className="head">
              <p>{data.data}</p>
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                &#8656; Back
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.desc }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSingle;
