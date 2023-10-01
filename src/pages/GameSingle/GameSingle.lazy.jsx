import React, { lazy, Suspense } from "react";

const LazyGameSingle = lazy(() => import("./GameSingle"));

const GameSingle = (props) => (
  <Suspense fallback={null}>
    <LazyGameSingle {...props} />
  </Suspense>
);

export default GameSingle;
