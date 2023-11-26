import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyServices = lazy(() => import("./Services"));

const Services = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyServices {...props} />
  </Suspense>
);

export default Services;
