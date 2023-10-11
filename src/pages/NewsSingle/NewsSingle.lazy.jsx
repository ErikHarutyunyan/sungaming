import {lazy, Suspense} from "react";

const LazyNewsSingle = lazy(() => import("./NewsSingle"));

const NewsSingle = (props) => (
  <Suspense fallback={null}>
    <LazyNewsSingle {...props} />
  </Suspense>
);

export default NewsSingle;
