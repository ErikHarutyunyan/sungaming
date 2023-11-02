import { lazy, Suspense } from "react";
import LoadRoute from "../../components/Loading/LoadRoute";

const LazyAbout = lazy(() => import("./About"));

const About = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyAbout {...props} />
  </Suspense>
);

export default About;
