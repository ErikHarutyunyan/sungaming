import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../../components/GamesThumb/GamesThumb.css';
import './Games.css';
// Route
import { motion } from 'framer-motion';
import { GAMES } from '../../router/route-path';
// Components
import BannerPages from '../../components/BannerPages';
import CounterActive from '../../components/CounterActive';
import LazyImage from '../../components/LazyImage';
import PlayButton from '../../components/PlayButton';
import Subscribe from '../../components/Subscribe';
// Images and Icons
import { FaStudiovinari } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { PiLightbulbLight } from 'react-icons/pi';
import { IconResponse } from '../../components/Icons/Icons';
import { bannerGameCut, gameShape1, gameShape2 } from '../../components/Images';
// Data and Configuration
import {
	allCategoriesGames,
	categoryIcons,
	dataGames,
} from '../../data/dataGames';

const gamesPerRow = 4;

const Games = () => {
	console.log("Games");
	const [next, setNext] = useState(gamesPerRow);
	const [menuItems, setMenuItems] = useState(dataGames);
	const [isActive, setIsActive] = useState('category_0');

	const handleMoreGames = () => {
		setNext(next + gamesPerRow);
	};

	const handleClick = (e) => {
		setIsActive(e.target.id);
	};

	const filterItems = (category) => {
		if (category[0] === 'All Games') {
			return setMenuItems(dataGames);
		}
		const newItems = dataGames.filter((item) => {
			if (item.category.length > 1 && item.category.includes(category)) {
				return item.category.filter(
					(categoryItem) => categoryItem === category,
				);
			}
			return item.category[0] == category;
		});
		setMenuItems(newItems);
	};

	return (
		<>
			<BannerPages
				classNames={'game'}
				page={'Games'}
				title={'Our'}
				titleSecond={'Games'}
				desc={
					'Our projects feature unique mechanics, fine-tuned gameplay, and eye-catching visual style.'
				}>
				<div className="gameBannerWrapImg">
					<img src={bannerGameCut} alt="bannerGame" />
				</div>
			</BannerPages>
			<section className="our-game-features pt-120 pb-120 game-utils">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="section-text text-center">
								<h2 className="visible-slowly-bottom sub-title">
									The Four Key Components of a <span>Sun Gaming</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row cus-mar ">
						<div className="col-md-6">
							<div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
								<div className="content-box d-flex gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<IconResponse size={50} color={'#0ef0ad'} />
									</div>
									<div className="info-box">
										<h5 className="mb-2">Responsive</h5>
										<p>
											Welcome to our online gaming site! Enjoy the best games on
											any device: mobile, tablet, or desktop. Our site is fully
											responsive, providing a smooth gaming experience. With a
											wide selection of games, you&apos;re sure to find
											something exhilarating. Get ready to dive into the
											exciting world of online gaming!
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
								<div className="content-box d-flex gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<MdSecurity size={45} color={'#0ef0ad'} />
									</div>
									<div className="info-box">
										<h5 className="mb-2">For Everyone</h5>
										<p>
											Sun Gaming guarantees a fair & safe gaming experience with
											our Provable Fairness System. It uses cryptographic tech
											to generate a random outcome with a house edge. Every game
											has a unique seed & customers can verify its fairness. We
											take fair gaming seriously & offer this system for peace
											of mind.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
								<div className="content-box d-flex gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<FaStudiovinari size={45} color={'#0ef0ad'} />
									</div>
									<div className="info-box">
										<h5 className="mb-2">Fast Gaming</h5>
										<p>
											Gambling games are exciting and fast-paced! Get your heart
											racing with high stakes and lightning-fast gameplay.
											You&apos;ll be sure to get your heart pounding with every
											spin or roll of the dice! Experience the thrill of
											fast-paced gambling entertainment today!{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="single-box flex-wrap box-style box-second px-5 py-5 py-10 px-9 d-center justify-content-between">
								<div className="content-box d-flex gap-4 gap-md-6">
									<div className="icon-box d-inline-flex d-center">
										<PiLightbulbLight size={45} color={'#0ef0ad'} />
									</div>
									<div className="info-box">
										<h5 className="mb-2">Unique Twist</h5>
										<p>
											Discover our online gambling site for unique twists on
											classic games like slots and blackjack! Experience
											something new every time you play with innovative bonus
											rounds, unique themes, and bonus features. Visit us today
											and start playing!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="our-games games-thumb overflow-hidden index-two position-relative pt-120 pb-120">
				<div className="shape-area">
					<LazyImage
						alt="gameShape1"
						className="shape-1 gameShape gameShape1"
						src={gameShape1}
					/>
					<img
						src={gameShape2}
						alt="gameShape3"
						className="shape-3 gameShape gameShape1"
					/>
				</div>
				<div className="container singletab position-relative cus-z1">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-7">
							<div className="section-text text-center">
								<h4 className="sub-title">
									Unlock a World of <span>Gaming Possibilities,</span> Full
									Immersion
								</h4>
								<span className="fs-two heading mb-6">
									Join <span>Gaming Community,</span> Explore Virtual World
									Boundaries
								</span>
								<p>
									Join the revolution in gaming and experience the thrill of the
									game like never before, with our advanced technology and
									dynamic gameplay.
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-9 text-center">
							<ul className="nav tablinks flex-wrap d-center mb-6 mb-sm-10 d-inline-flex gap-4 p-3 tab-area">
								{allCategoriesGames.map((category, index) => {
									return (
										<li
											className="nav-item pointer"
											key={index}
											onClick={(e) => {
												const className = e.target.className;
												if (!className.includes('active_category')) {
													filterItems(
														category === 'All Games' ? [category] : category,
													);
													handleClick(e);
												}
											}}>
											<button
												id={`category_${index}`}
												className={
													isActive === `category_${index}`
														? `${category}_category nav-link d-center box-style btn-box active_category`
														: `${category}_category nav-link d-center box-style btn-box`
												}>
												{categoryIcons[category.toLowerCase()] !== undefined ? (
													<span className="icon-area pe-none">
														{categoryIcons[category.toLowerCase()]}
													</span>
												) : null}
												{category}
											</button>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-12">
							<div className="tabcontents visible-from-bottom">
								<div className="tabitem active">
									<div className="col-12 cus-mar game-section-block-wrp">
										{menuItems.slice(0, next).map((item) => {
											const { id, title, imgMain, path, url } = item;
											return (
												<motion.div
													animate={{
														opacity: 1,
														y: 0,
														transition: {
															ease: 'easeInOut',
															delay: 0.2,
															stiffness: 10,
															duration: 0.5,
														},
													}}
													initial={{
														opacity: 0,
														y: 50,
														transition: {
															ease: 'easeInOut',
															delay: 0.2,
															stiffness: 10,
															duration: 0.5,
														},
													}}
													transition={{
														stiffness: 400,
														damping: 10,
														transition: {
															ease: 'easeInOut',
															delay: 0.2,
															stiffness: 10,
															duration: 0.5,
														},
													}}
													exit={{
														y: -50,
														opacity: 0,
														transition: {
															ease: 'easeInOut',
															delay: 0.2,
															stiffness: 10,
															duration: 0.5,
														},
													}}
													key={id}
													className={` game-section-block`}>
													<div className="single-box">
														<div className="position-relative d-center head">
															<LazyImage
																alt={title}
																src={imgMain}
																className="w-100 thumb-img"
															/>
															<h3 className="gameTitle">{title}</h3>
														</div>
														<div className="link-item py-3">
															<Link
																className=" px-5 text-decoration-underline"
																to={`${GAMES}/${path}`}
																state={{ data: item }}>
																More Details
															</Link>
														</div>
													</div>
													<PlayButton url={url} single />
												</motion.div>
											);
										})}
									</div>
									{next < menuItems?.length && (
										<div className="text-center mt-10 mt-sm-15">
											<div
												className="loading gamesBtn py-3 px-8 d-inline-flex align-items-center gap-2"
												onClick={handleMoreGames}>
												<div className="icon-box d-center">
													<button className="">Load more</button>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<CounterActive />
			<Subscribe />
		</>
	);
};

export default Games;
