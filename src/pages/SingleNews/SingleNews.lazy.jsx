import React, { lazy, Suspense } from "react";

const LazySingleNews = lazy(() => import("./SingleNews"));

const SingleNews = (props) => (
  <Suspense fallback={null}>
    <LazySingleNews {...props} />
  </Suspense>
);

export default SingleNews;
