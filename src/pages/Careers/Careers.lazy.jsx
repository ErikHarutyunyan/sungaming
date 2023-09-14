import React, { lazy, Suspense } from "react";

const LazyCareers = lazy(() => import("./Careers"));

const Careers = (props) => (
  <Suspense fallback={null}>
    <LazyCareers {...props} />
  </Suspense>
);

export default Careers;
