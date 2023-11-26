import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyNewsSingle = lazy(() => import("./NewsSingle"));

const NewsSingle = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyNewsSingle {...props} />
  </Suspense>
);

export default NewsSingle;
