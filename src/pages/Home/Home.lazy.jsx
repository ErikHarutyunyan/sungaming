import { lazy, Suspense } from 'react';
import LoadRoute from '../../components/Loading/LoadRoute';

const LazyHome = lazy(() => import('./Home'));

const Home = (props) => (
	<Suspense fallback={<LoadRoute />}>
		<LazyHome {...props} />
	</Suspense>
);

export default Home;
