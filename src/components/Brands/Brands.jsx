import {brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9,} from "../Images";
import "./Brands.css";

const Brands = () => {
  return (
    <section className="brands our-partners pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                <span>Endorsed </span> By
              </h4>
              <span className="fs-two heading mb-6">
                We&apos;re Delighted to Collaborate with the{" "}
                <span>World&apos;s Top Brands</span>
              </span>
              <p>We take pride in assisting global industry frontrunners.</p>
              <p>Feel free to explore our accolades!</p>
            </div>
          </div>
        </div>
        <div className="row pt-10 justify-content-center">
          <div className="col-lg-12">
            <div className="all-items brand-wrap mb-7 d-flex gap-4 justify-content-between flex-wrap">
              <div className="thumb">
                {" "}
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand9}
                />
              </div>
              <div className="thumb">
                {" "}
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand2}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand3}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand4}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand5}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand6}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand7}
                />
              </div>
              <div className="thumb">
                <img
                  alt="Image"
                  loading="lazy"
                  width="207"
                  height="46"
                  src={brand8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Brands;
