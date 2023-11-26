import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("./About"));

const About = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyAbout {...props} />
  </Suspense>
);

export default About;
