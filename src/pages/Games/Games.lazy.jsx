import LoadRoute from "components/Loading/LoadRoute";
import { lazy, Suspense } from "react";

const LazyGames = lazy(() => import("./Games"));

const Games = (props) => (
  <Suspense fallback={<LoadRoute />}>
    <LazyGames {...props} />
  </Suspense>
);

export default Games;
