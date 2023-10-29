import {
	MdOutlineLocationOn,
	MdOutlineMailOutline,
	MdOutlinePhone,
	MdSchedule,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CAREERS, PRIVACY } from '../../router/route-path';
import './footer.css';
export const Footer = () => {
	return (
		<footer className="footer-section">
			<div className="container">
				<div className="row cus-mar info-office pb-120 pt-120">
					<div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
						<div className="single-box">
							<h4 className="mb-4">Office</h4>
							<div className="contact-location d-grid gap-6">
								<div className="single-area d-flex gap-4">
									<div className="icon-area d-center">
										<MdOutlineLocationOn size={22} className="material-symbols-outlined" />
									</div>
									<div className="text-area">
										<h5 className="mb-2">Yerevan</h5>
										<span>Armenia</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
						<div className="single-box">
							<h4 className="mb-4">Email address</h4>
							<div className="contact-location d-grid gap-6">
								<div className="single-area d-flex gap-4 align-items-center">
									<div className="icon-area d-center">
										<MdOutlineMailOutline size={22} className="material-symbols-outlined" />
									</div>
									<div className="text-area">
										<span>01sungaming33@gmail.com</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
						<div className="single-box">
							<h4 className="mb-4">Phone Number</h4>
							<div className="contact-location d-grid gap-6">
								<div className="single-area d-flex gap-4 align-items-center">
									<div className="icon-area d-center">
										<MdOutlinePhone size={22} className="material-symbols-outlined" />
									</div>
									<div className="text-area">
										<span>(374) 0010033</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-5 col-sm-8 visible-from-bottom">
						<div className="single-box">
							<h4 className="mb-4">Working Hours</h4>
							<div className="contact-location d-grid gap-6">
								<div className="single-area d-flex gap-4 align-items-center">
									<div className="icon-area d-center">
										<MdSchedule size={22} className="material-symbols-outlined" />
									</div>
									<div className="text-area">
										<span>Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom p-5">
					<div className="container">
						<div className="row gap-3 gap-md-0 justify-content-between">
							<div className="col-md-8 order-1 order-md-0">
								<div className="copyright">
									<p className="text-center text-md-start">
										Copyright © 2023 <a href="/">Sun Gaming</a> - All Right
										Reserved
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="copyright d-flex gap-3 align-items-center justify-content-center justify-content-md-end">
									<Link to={PRIVACY}>Privacy</Link>
									<Link to={CAREERS}>Careers</Link>
								</div>
							</div>
						</div>
						<ul className="d-flex pt-5 align-items-center justify-content-center  gap-4 social-area">
							<li>
								<a
									aria-label="Facebook"
									className="d-center"
									href="https://www.facebook.com">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth={0}
										viewBox="0 0 320 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
									</svg>
								</a>
							</li>
							<li>
								<a
									aria-label="Instagram"
									className="d-center"
									href="https://www.instagram.com">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth={0}
										viewBox="0 0 448 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
									</svg>
								</a>
							</li>
							<li>
								<a
									aria-label="Linkedin"
									className="d-center"
									href="https://www.linkedin.com">
									<svg
										stroke="currentColor"
										fill="currentColor"
										strokeWidth={0}
										viewBox="0 0 448 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
