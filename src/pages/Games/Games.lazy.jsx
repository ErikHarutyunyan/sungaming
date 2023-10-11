import {lazy, Suspense} from "react";

const LazyGames = lazy(() => import("./Games"));

const Games = (props) => (
  <Suspense fallback={null}>
    <LazyGames {...props} />
  </Suspense>
);

export default Games;
