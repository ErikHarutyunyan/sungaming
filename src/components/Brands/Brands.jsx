import { brandLogo } from "../Images";
import "./Brands.css"

const Brands = () => {
  return (
    <section className="our-partners pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                <span>Trusted</span> By
              </h4>
              <span className="fs-two heading mb-6">
                We are happy to work with <span>global largest brands</span>
              </span>
              <p>We are proud to support industry leaders around the world.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="all-items mb-7 d-flex gap-3 justify-content-between flex-wrap">
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
            </div>
            <div className="all-items d-flex gap-3 justify-content-between flex-wrap">
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brandLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Brands
