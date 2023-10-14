import {lazy, Suspense} from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyNewsSingle = lazy(() => import("./NewsSingle"));

const NewsSingle = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyNewsSingle {...props} />
  </Suspense>
);

export default NewsSingle;
