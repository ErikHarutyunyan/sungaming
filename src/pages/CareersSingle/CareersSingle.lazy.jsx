import { lazy, Suspense } from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyCareersSingle = lazy(() => import("./CareersSingle"));

const CareersSingle = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyCareersSingle {...props} />
  </Suspense>
);

export default CareersSingle;
