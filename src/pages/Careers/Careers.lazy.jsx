import { lazy, Suspense } from 'react';
import LoadRoute from '../../components/Loading/LoadRoute';

const LazyCareers = lazy(() => import('./Careers'));

const Careers = (props) => (
	<Suspense fallback={<LoadRoute />}>
		<LazyCareers {...props} />
	</Suspense>
);

export default Careers;
