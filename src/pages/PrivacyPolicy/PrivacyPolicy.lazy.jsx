import { lazy, Suspense } from 'react';
import LoadRoute from '../../components/Loading/LoadRoute';

const LazyPrivacyPolicy = lazy(() => import('./PrivacyPolicy'));

const PrivacyPolicy = (props) => (
	<Suspense fallback={<LoadRoute />}>
		<LazyPrivacyPolicy {...props} />
	</Suspense>
);

export default PrivacyPolicy;
