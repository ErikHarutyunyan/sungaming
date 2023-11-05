// Packages
import Typewriter from 'typewriter-effect';
// Components
import AboutValues from '../../components/AboutValues';
import BannerPages from '../../components/BannerPages';
import Brands from '../../components/Brands';
import LazyImage from '../../components/Images/LazyImage';
import CustomSlider from '../../components/Slides/CustomSlider';
import Subscribe from '../../components/Subscribe';
// Images and Icons
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import {
	IoAccessibilityOutline,
	IoDiamondOutline,
	IoShareSocialOutline,
} from 'react-icons/io5';
import { LuLayoutPanelLeft } from 'react-icons/lu';
import { MdOutlineDiversity1, MdOutlineGames } from 'react-icons/md';
import {
	ab,
	aboutBanner,
	aboutNftImg1,
	aboutNftImg2,
	cricleNft,
	services_img01,
	services_img02,
	services_img03,
	services_img04,
	team2,
	team3,
	team4,
	team5,
} from '../../components/Images';

const About = () => {
	return (
		<>
			<BannerPages
				page="About"
				bg={aboutBanner}
				title="Our Simple Is Motto Fun For"
				titleSecond="Everyone"
				desc={
					'We continue to open doors to new worlds every day and we are working excitedly for creating new games and unique ideas!'
				}
				rightImg={ab}
			/>
			<AboutValues />
			<section className="our-vision">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 col-md-10">
							<div className="section-heading">
								<h5 className="subtitle fs-five">Take a look</h5>
								<h2 className="fs-one">Our vision & Mission</h2>
								<p className="text fs-four">
									We create long term value for our partners by putting
									innovations, data and sustainability at the very heart of our
									business.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-vision">
								<div className="icon one">
									<IoDiamondOutline size={35} color="white" />
								</div>
								<div className="content">
									<h4 className="title">Uniqueness</h4>
									<p className="text">
										To give back to the people that support our company
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-vision">
								<div className="icon two">
									<MdOutlineDiversity1 size={35} color="white" />
								</div>
								<div className="content">
									<h4 className="title">Diversity</h4>
									<p className="text">
										To give back to the people that support our company
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-vision">
								<div className="icon three">
									<IoAccessibilityOutline size={35} color="white" />
								</div>
								<div className="content">
									<h4 className="title">Accessibility</h4>
									<p className="text">
										To give back to the people that support our company
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about__area-three pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-4">
							<div className="about__title-wrap">
								<h2 className="title">
									<i>WE ARE</i>
									<Typewriter
										options={{
											strings: ['developer', 'NFT', 'Gaming'],
											autoStart: true,
											loop: true,
											wrapperClassName: 'typewriter-wrapper text-white',
										}}
									/>
								</h2>
								<div className="about__content-circle">
									<img
										alt="img"
										loading="lazy"
										width="138"
										height="138"
										src={cricleNft}
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 150 150"
										version="1.1">
										<path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
										<text>
											<textPath href="#textPath">
												super nft Gaming sits
											</textPath>
										</text>
									</svg>
								</div>
							</div>
						</div>
						<div className="col-xl-8">
							<div className="about__three-images">
								<LazyImage
									src={aboutNftImg1}
									alt="aboutNftImg1"
									width="363"
									height="487"
									className="left"
								/>
								<LazyImage
									src={aboutNftImg2}
									alt="aboutNftImg2"
									width="519"
									height="382"
									className="right"
								/>
								<div className="about__dots">
									<svg
										width="109"
										height="35"
										viewBox="0 0 109 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M9 0H0V7H9V0Z" fill="currentcolor"></path>
										<path d="M24 0H15V7H24V0Z" fill="currentcolor"></path>
										<path d="M38 0H29V7H38V0Z" fill="currentcolor"></path>
										<path d="M53 0H44V7H53V0Z" fill="currentcolor"></path>
										<path d="M67 0H58V7H67V0Z" fill="currentcolor"></path>
										<path d="M80 0H71V7H80V0Z" fill="currentcolor"></path>
										<path d="M9 14H0V21H9V14Z" fill="currentcolor"></path>
										<path d="M24 14H15V21H24V14Z" fill="currentcolor"></path>
										<path d="M38 14H29V21H38V14Z" fill="currentcolor"></path>
										<path d="M53 14H44V21H53V14Z" fill="currentcolor"></path>
										<path d="M67 14H58V21H67V14Z" fill="currentcolor"></path>
										<path d="M80 14H71V21H80V14Z" fill="currentcolor"></path>
										<path d="M95 14H86V21H95V14Z" fill="currentcolor"></path>
										<path d="M109 14H100V21H109V14Z" fill="currentcolor"></path>
										<path d="M9 28H0V35H9V28Z" fill="currentcolor"></path>
										<path d="M24 28H15V35H24V28Z" fill="currentcolor"></path>
										<path d="M38 28H29V35H38V28Z" fill="currentcolor"></path>
										<path d="M53 28H44V35H53V28Z" fill="currentcolor"></path>
										<path d="M67 28H58V35H67V28Z" fill="currentcolor"></path>
										<path d="M80 28H71V35H80V28Z" fill="currentcolor"></path>
										<path d="M95 28H86V35H95V28Z" fill="currentcolor"></path>
										<path d="M109 28H100V35H109V28Z" fill="currentcolor"></path>
									</svg>
								</div>
							</div>
							<div className="about__three-paragraph"></div>
						</div>
					</div>
				</div>
			</section>
			<section className="team__area team-bg pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-7 col-md-10">
							<div className="section__title text-center mb-15">
								<span className="sub-title tg__animate-text ready">
									<span>O</span>
									<span>U</span>
									<span>R</span>
									<span> </span>
									<span>T</span>
									<span>E</span>
									<span>A</span>
									<span>M</span>
									<span> </span>
									<span>M</span>
									<span>E</span>
									<span>M</span>
									<span>B</span>
									<span>E</span>
									<span>R</span>
								</span>
								<h3 className="title">ACTIVE TEAM MEMBERS</h3>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="team__item">
								<div className="team__thumb">
									<a href="/team-details">
										<LazyImage alt="killer master" width="224" src={team5} />
									</a>
								</div>
								<div className="team__content">
									<h4 className="name">
										<a href="/team-details">killer master</a>
									</h4>
									<span className="designation">Blockchain Expert</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="team__item">
								<div className="team__thumb">
									<a href="/team-details">
										<LazyImage alt="code expert" width="224" src={team2} />
									</a>
								</div>
								<div className="team__content">
									<h4 className="name">
										<a href="/team-details">code expert</a>
									</h4>
									<span className="designation">Developer</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="team__item">
								<div className="team__thumb">
									<a href="/team-details">
										<LazyImage alt="Diamond" width="224" src={team3} />
									</a>
								</div>
								<div className="team__content">
									<h4 className="name">
										<a href="/team-details">Diamond</a>
									</h4>
									<span className="designation">Art Director</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-sm-6">
							<div className="team__item">
								<div className="team__thumb">
									<a href="/team-details">
										<LazyImage alt="Coin" width="224" src={team4} />
									</a>
								</div>
								<div className="team__content">
									<h4 className="name">
										<a href="/team-details">Coin</a>
									</h4>
									<span className="designation">Crypto Advisor</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="services-area services__bg-color pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end align-items-xl-start">
						<div className="col-lg-6">
							<div className="section__title text-start mb-20">
								<span className="sub-title tg__animate-text ready">
									<span>P</span>
									<span>O</span>
									<span>W</span>
									<span>E</span>
									<span>R</span>
									<span>F</span>
									<span>U</span>
									<span>S</span>
									<span>L</span>
									<span> </span>
									<span>E</span>
									<span>R</span>
									<span>V</span>
									<span>I</span>
									<span>C</span>
									<span>E</span>
									<span>S</span>
								</span>
								<h3 className="title">Our Powerful Services Done on time</h3>
							</div>
							<div className="services__wrapper">
								<div className="services__item">
									<div className="services__icon">
										<IoShareSocialOutline size={45} color="#0ef0ad" />
									</div>
									<div className="services__content">
										<h4 className="title">
											<a href="/service-details">Social Responsibility</a>
										</h4>
										<p>
											Embracing a Better Tomorrow: Our Commitment to Social
											Responsibility
										</p>
									</div>
								</div>
								<div className="services__item">
									<div className="services__icon">
										<MdOutlineGames size={45} color="#0ef0ad" />
									</div>
									<div className="services__content">
										<h4 className="title">
											<a href="/service-details">Gambling Aware</a>
										</h4>
										<p>
											Promoting Responsible Play: Our Commitment to Gambling
											Awareness
										</p>
									</div>
								</div>
								<div className="services__item">
									<div className="services__icon">
										<AiOutlineSafetyCertificate size={45} color="#0ef0ad" />
									</div>
									<div className="services__content">
										<h4 className="title">
											<a href="/service-details">Licences & Certifications</a>
										</h4>
										<p>
											Ensuring Compliance and Trust: Our Licences &
											Certifications
										</p>
									</div>
								</div>
								<div className="services__item">
									<div className="services__icon">
										<LuLayoutPanelLeft size={45} color="#0ef0ad" />
									</div>
									<div className="services__content">
										<h4 className="title">
											<a href="/service-details">Comprehensive Backoffice</a>
										</h4>
										<p>
											Efficiency Unleashed: The Backbone of Our Comprehensive
											Backoffice
										</p>
									</div>
								</div>
							</div>
						</div>
						<CustomSlider
							parentClassName="services__images"
							itemClassName="services__images-item"
							images={[
								services_img01,
								services_img02,
								services_img03,
								services_img04,
							]}
						/>
					</div>
				</div>
			</section>
			<Brands />
			<Subscribe />
		</>
	);
};

export default About;
