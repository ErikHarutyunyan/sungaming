import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";
const LazyGameSingle = lazy(() => import("./GameSingle"));

const GameSingle = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyGameSingle {...props} />
  </Suspense>
);

export default GameSingle;
