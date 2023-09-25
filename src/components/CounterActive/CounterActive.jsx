import "./CounterActive.css"

const CounterActive = () => {
  return (
    <section className="counter-section pt-120 pb-120">
      <div className="container">
        <div className="row cus-mar ">
          <div className="col-sm-6 col-xl-4">
            <div className="single-box py-6 box-style box-first d-center position-relative">
              <div className="counters d-flex align-items-center">
                <span className="display-one">500</span>
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
                <span className="display-one">200</span>
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
                <span className="display-one">30</span>
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
  )
}
export default CounterActive
