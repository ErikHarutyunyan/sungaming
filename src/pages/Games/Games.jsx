// Components
import BannerPages from '../../components/BannerPages';
import CounterActive from '../../components/Counter/CounterActive';
import GamesTab from '../../components/GamesTab';
import LazyImage from '../../components/Images/LazyImage';
import ShapeArea from '../../components/ShapeArea';
import Subscribe from '../../components/Subscribe';
// Images and Icons
import { FaStudiovinari } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { PiLightbulbLight } from 'react-icons/pi';
import { IconResponse } from '../../components/Icons';
import { bannerGameCut, gameShape1, gameShape2 } from '../../components/Images';
// Data and Configuration
import { counterActiveData } from '../../data/dataCounters';

const Games = () => {
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
			<section className="our-games games-thumb overflow-hidden index-two position-relative pt-10 pb-120">
				<ShapeArea>
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
				</ShapeArea>
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
					<GamesTab style="2" viewItems={5} />
				</div>
			</section>
			<CounterActive counterData={counterActiveData} />
			<Subscribe />
		</>
	);
};

export default Games;
