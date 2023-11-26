// Components
import Counter from "..";
import ShapeArea from "components/ShapeArea";
// Images
import { lineImg, objectImg } from "../../Images";

const CounterShare = ({ className = "", counterData = [] }) => {
  return (
    <section
      className={`services-area services-page our-focus index-two position-relative pt-120 pb-120 ${className}`}
    >
      <ShapeArea>
        <img src={lineImg} className="shape-1" alt="icon" />
        <img src={objectImg} className="shape-2" alt="icon" />
      </ShapeArea>
      <div className="container">
        <h2 className="d-center my-5">OUR SHARE</h2>
        <div className="row cus-mar d-center">
          <Counter
            counterData={counterData}
            wrapperClassName="single-box d-grid justify-content-center"
            counterClassName="counter"
            symbolClassName="display-one symbol"
            titleClassName="name-area fs-seven"
          />
        </div>
      </div>
    </section>
  );
};
export default CounterShare;
