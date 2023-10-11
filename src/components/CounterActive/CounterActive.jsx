import CountUp from "react-countup";
import "./CounterActive.css";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const CounterActive = ({ className }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <section className={`counter-section counter-head my-20 ${className}`}>
      <div className="container">
        <div className="row cus-mar ">
          <div className="col-sm-6 col-xl-4">
            <div className="single-box py-6 box-style box-first d-center position-relative">
              <div className="counters d-flex align-items-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={500}
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
                        <span className="display-one" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one symbol">+</span>
              </div>
              <p className="name-area fs-five position-absolute">
                Active Partners
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single-box py-6 box-style box-first d-center position-relative false">
              <div className="counters d-flex align-items-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={200}
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
                        <span className="display-one" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one">K+</span>
              </div>
              <p className="name-area fs-five position-absolute">
                Active Players/Monthly
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="single-box py-6 box-style box-first d-center position-relative false">
              <div className="counters d-flex align-items-center">
                <CountUp
                  className="counter"
                  start={viewPortEntered ? null : 0}
                  end={30}
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
                        <span className="display-one" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
                <span className="display-one symbol">M+</span>
              </div>
              <p className="name-area fs-five position-absolute">
                Transactions/Monthly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CounterActive;
