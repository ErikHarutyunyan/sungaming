import {lazy, Suspense} from "react";

const LazyGamesCategory = lazy(() => import('./GamesCategory'));

const GamesCategory = props => (
  <Suspense fallback={null}>
    <LazyGamesCategory {...props} />
  </Suspense>
);

export default GamesCategory;
