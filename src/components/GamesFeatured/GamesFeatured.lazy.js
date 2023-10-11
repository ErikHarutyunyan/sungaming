import {lazy, Suspense} from "react";

const LazyGamesFeatured = lazy(() => import('./GamesFeatured'));

const GamesFeatured = props => (
  <Suspense fallback={null}>
    <LazyGamesFeatured {...props} />
  </Suspense>
);

export default GamesFeatured;
