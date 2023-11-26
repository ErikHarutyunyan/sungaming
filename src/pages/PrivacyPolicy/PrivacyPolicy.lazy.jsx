import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyPrivacyPolicy = lazy(() => import("./PrivacyPolicy"));

const PrivacyPolicy = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyPrivacyPolicy {...props} />
  </Suspense>
);

export default PrivacyPolicy;
