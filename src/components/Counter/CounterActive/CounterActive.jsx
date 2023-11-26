import Counter from "..";

const CounterActive = ({ className = "", counterData = [] }) => {
  return (
    <section
      className={`counter-section counter-head pt-120 pb-120 ${className}`}
    >
      <div className="container">
        <div className="row cus-mar  d-center">
          <Counter
            counterData={counterData}
            wrapperClassName="single-box py-6 box-style box-first d-center position-relative"
            counterClassName="counter"
            symbolClassName="display-one symbol"
            titleClassName=" name-area fs-five position-absolute"
          />
        </div>
      </div>
    </section>
  );
};
export default CounterActive;
