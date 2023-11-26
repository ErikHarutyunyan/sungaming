import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyContact = lazy(() => import("./Contact"));

const Contact = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyContact {...props} />
  </Suspense>
);

export default Contact;
