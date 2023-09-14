import React, { lazy, Suspense } from "react";

const LazyTermsConditions = lazy(() => import("./TermsConditions"));

const TermsConditions = (props) => (
  <Suspense fallback={null}>
    <LazyTermsConditions {...props} />
  </Suspense>
);

export default TermsConditions;
