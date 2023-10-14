import { lazy, Suspense } from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyPrivacyPolicy = lazy(() => import("./PrivacyPolicy"));

const PrivacyPolicy = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyPrivacyPolicy {...props} />
  </Suspense>
);

export default PrivacyPolicy;
