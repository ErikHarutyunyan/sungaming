import { useCallback } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './../components/Footer';
import Header from './../components/Header';

const Layout = () => {
	let getKey = useCallback((location, matches) => {
		let match = matches.find((m) => m.handle?.scrollMode);
		if (match?.handle?.scrollMode === 'pathname') {
			return location.pathname;
		}
		return location.key;
	}, []);

	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
			<ScrollRestoration getKey={getKey} />
		</>
	);
};

export default Layout;
