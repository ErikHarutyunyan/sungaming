import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyCareersSingle = lazy(() => import("./CareersSingle"));

const CareersSingle = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyCareersSingle {...props} />
  </Suspense>
);

export default CareersSingle;
