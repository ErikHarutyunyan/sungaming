import { lazy, Suspense } from "react";
import LoadRoute from "../../components/LoadRoute/LoadRoute";

const LazyGameSingle = lazy(() => import("./GameSingle"));

const GameSingle = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyGameSingle {...props} />
  </Suspense>
);

export default GameSingle;
