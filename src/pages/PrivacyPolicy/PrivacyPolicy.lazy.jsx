import {lazy, Suspense} from "react";

const LazyPrivacyPolicy = lazy(() => import("./PrivacyPolicy"));

const PrivacyPolicy = (props) => (
  <Suspense fallback={null}>
    <LazyPrivacyPolicy {...props} />
  </Suspense>
);

export default PrivacyPolicy;
