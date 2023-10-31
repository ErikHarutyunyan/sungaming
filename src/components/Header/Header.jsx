import { useEffect, useRef, useState } from 'react';
// Route
import { Link, NavLink } from 'react-router-dom';
import { HOME } from '../../router/route-path';
// Component
import { Sidebar } from '../Sidebar';
// data
import { menuLinks } from '../../data/dataMenu';
// Image
import { logo } from '../Images';

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [sideBar, setSideBar] = useState(false);
	const refBurger = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const bodyOverflow = () => {
		if (!sideBar) {
			document.body.style.overflow = 'hidden';
			document.querySelector('.main').style.filter = 'blur(10px)';
		} else {
			document.body.style.overflow = 'auto';
			document.querySelector('.main').style.filter = 'unset';
		}
	};

	const showHideSidebar = (e, sidebarLink = false) => {
		setSideBar((sideBar) => !sideBar);
		bodyOverflow();
		if (sidebarLink)
			refBurger.current.checked
				? (refBurger.current.checked = false)
				: (refBurger.current.checked = true);
	};

	return (
		<>
			<header
				className={`header-section header-menu ${isSticky ? 'sticky' : ''}`}>
				<nav
					className={`navbar w-100 flex-nowrap px-2  ps-2 navbar-expand-xl ${
						isSticky ? 'py-4' : 'py-6'
					}`}>
					<Link
						className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-center gap-2"
						to={HOME}>
						<img
							src={logo}
							alt="logo-text"
							loading="lazy"
							width="122"
							height="23"
							className="logo-text"
						/>
					</Link>
					<div
						className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2"
						id="navbar-content">
						<ul className="navbar-nav gap-4 py-4 py-lg-0 align-self-center left-center">
							{menuLinks
								.filter((menuItem) => menuItem.mobile !== true)
								.map((menuItem) => {
									const { id, url, text } = menuItem;
									return (
										<li key={id}>
											<NavLink
												className={({ isActive }) =>
													isActive ? 'active' : 'inactive'
												}
												to={url}>
												{text}
											</NavLink>
										</li>
									);
								})}
						</ul>
					</div>
					<input
						ref={refBurger}
						type="checkbox"
						role="button"
						aria-label="Display the menu"
						className="menu d-xl-none d-block"
						onClick={showHideSidebar}
					/>
				</nav>
				<Sidebar {...{ sideBar, showHideSidebar }} />
			</header>
		</>
	);
};

export default Header;
