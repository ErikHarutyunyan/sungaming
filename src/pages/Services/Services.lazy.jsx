import { lazy, Suspense } from 'react';
import LoadRoute from '../../components/Loading/LoadRoute';

const LazyServices = lazy(() => import('./Services'));

const Services = (props) => (
	<Suspense fallback={<LoadRoute />}>
		<LazyServices {...props} />
	</Suspense>
);

export default Services;
