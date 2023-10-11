import {lazy, Suspense} from "react";

const LazyCareersSingle = lazy(() => import("./CareersSingle"));

const CareersSingle = (props) => (
  <Suspense fallback={null}>
    <LazyCareersSingle {...props} />
  </Suspense>
);

export default CareersSingle;
