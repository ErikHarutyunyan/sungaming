import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyNews = lazy(() => import("./News"));

const News = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyNews {...props} />
  </Suspense>
);

export default News;
