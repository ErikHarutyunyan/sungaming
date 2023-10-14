import { lazy, Suspense } from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyNews = lazy(() => import("./News"));

const News = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyNews {...props} />
  </Suspense>
);

export default News;
