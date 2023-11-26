import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Home"));

const Home = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
