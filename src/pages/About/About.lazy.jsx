import { lazy, Suspense } from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyAbout = lazy(() => import("./About"));

const About = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyAbout {...props} />
  </Suspense>
);

export default About;
