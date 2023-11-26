import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyCareers = lazy(() => import("./Careers"));

const Careers = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyCareers {...props} />
  </Suspense>
);

export default Careers;
