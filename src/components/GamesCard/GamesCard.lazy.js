import {lazy, Suspense} from "react";

const LazyGamesCard = lazy(() => import('./GamesCard'));

const GamesCard = props => (
  <Suspense fallback={null}>
    <LazyGamesCard {...props} />
  </Suspense>
);

export default GamesCard;
