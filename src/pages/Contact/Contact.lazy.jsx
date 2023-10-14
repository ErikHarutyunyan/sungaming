import { lazy, Suspense } from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyContact = lazy(() => import("./Contact"));

const Contact = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyContact {...props} />
  </Suspense>
);

export default Contact;
