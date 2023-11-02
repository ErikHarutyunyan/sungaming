import { lazy, Suspense } from 'react';
import LoadRoute from '../../components/Loading/LoadRoute';

const LazyNews = lazy(() => import('./News'));

const News = (props) => (
	<Suspense fallback={<LoadRoute />}>
		<LazyNews {...props} />
	</Suspense>
);

export default News;
