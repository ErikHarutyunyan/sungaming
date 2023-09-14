import React, { lazy, Suspense } from "react";

const LazyIntegration = lazy(() => import("./Integration"));

const Integration = (props) => (
  <Suspense fallback={null}>
    <LazyIntegration {...props} />
  </Suspense>
);

export default Integration;
