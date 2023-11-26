import { lazy, Suspense } from "react";

const LazySuccess = lazy(() => import("./Success"));

const Success = (props) => (
  <Suspense fallback={null}>
    <LazySuccess {...props} />
  </Suspense>
);

export default Success;
