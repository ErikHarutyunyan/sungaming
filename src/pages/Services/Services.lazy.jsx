import {lazy, Suspense} from "react";

const LazyServices = lazy(() => import("./Services"));

const Services = (props) => (
  <Suspense fallback={null}>
    <LazyServices {...props} />
  </Suspense>
);

export default Services;
