import ReactVisibilitySensor from "react-visibility-sensor";
import "./CounterShare.css";
import CountUp from "react-countup";
import objectImg from "../../assets/img/object-1.png";
import lineImg from "../../assets/img/line-1.png";
import { useState } from "react";
const CounterShare = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <section className="services-area our-focus index-two position-relative pt-120 pb-120">
      <div className="shape-area">
        <img src={lineImg} className="shape-1" alt="icon" />
        <img src={objectImg} className="shape-2" alt="icon" />
      </div>
      <div className="container">
        <h2 className="d-center my-5">OUR SHARE</h2>

        <div className="row cus-mar d-inline-flex d-center">
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={5052}
                  duration={5}
                  useEasing={true}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">VOLUME</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={600}
                  duration={5}
                  useEasing={true}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">HIGH</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={1000}
                  duration={5}
                  useEasing={true}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">LOW</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="single-box d-grid justify-content-center">
              <div className="counters d-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={1106}
                  duration={5}
                  useEasing={true}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall>
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-seven">OPEN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CounterShare;
