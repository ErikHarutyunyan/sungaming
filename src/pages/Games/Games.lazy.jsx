import { lazy, Suspense } from 'react';
import LoadRoute from '../../components/Loading/LoadRoute';

const LazyGames = lazy(() => import('./Games'));

const Games = (props) => (
	<Suspense fallback={<LoadRoute />}>
		<LazyGames {...props} />
	</Suspense>
);

export default Games;
