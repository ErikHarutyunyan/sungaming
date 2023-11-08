// Route
import { Link, useNavigate } from 'react-router-dom';
import { ABOUT } from '../../router/route-path.jsx';
// import { useForm } from 'react-hook-form';
// Components
import AccordionBox from '../../components/Accordion';
import BannerPages from '../../components/BannerPages';
import Brands from '../../components/Brands';
import LoadingStep from '../../components/Loading/LoadingStep';
import ShapeArea from '../../components/ShapeArea';
// Images and Icons
import { contactUs, faqFramer, faqIcon } from '../../components/Images';
// hooks
import { dataOffice } from '../../data/dataProduct.jsx';
import useFetch from '../../hooks/useFetch.js';

const Contact = () => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggleAccordion = () => {
	//   setIsOpen(!isOpen);
	// };
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm({
	// 	mode: 'onChange',
	// });
	// const onSubmit = (data) => {
	// 	console.log(data);
	// };

	const navigate = useNavigate();

	const { loading, error, submitForm } = useFetch();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		submitForm('/', formData, () => {
			console.log('Form successfully submitted');
			navigate('/success');
		});
	};

	return (
		<>
			<BannerPages
				page={'Contact'}
				bg={contactUs}
				title={'Contact'}
				titleSecond={'Us'}
				desc={
					'We’d love to talk about how we can work together.Send us a message below and we’ll respond as soon as possible.'
				}
			/>
			<section className="contact-us bg-transparen pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="section-header text-center">
								<h4 className="sub-title">
									Have <span>Questions?</span>
								</h4>
								<span className="fs-two heading mb-6">
									Can’t find what are <span>you Looking for</span> ? Get in
									Touch
								</span>
								<p>
									Please fill out the form and let us know about your
									concerns.We will try our best to provide optimized solutions.
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-7 position-relative contact-form">
							<form
								// onSubmit={handleSubmit(onSubmit)}
								data-netlify="true"
								onSubmit={handleSubmit}
								method="post"
								name="contact"
								action="/success/"
								className={`p-4 p-sm-8 ${loading ? 'h-100' : ''}`}>
								<input type="hidden" name="form-name" value="contact" />
								<h3>Write A Message</h3>
								{error ? (
									<span className="err">Error: {error.message}</span>
								) : null}
								{loading ? (
									<LoadingStep />
								) : (
									<div className="form-inside mt-6 p-4">
										<div className="row">
											<div className="col-sm-12">
												<div className="single-input text-start">
													<label htmlFor="name">Name</label>
													<input
														type="text"
														id="name"
														placeholder="Enter Your Name"
														autoComplete="off"
														name="contact-name"
														required
														// {...register("Name", {
														//   required: true,
														//   pattern: /^[A-Za-z\s\-']{2,50}$/,
														// })}
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="single-input text-start">
													<label htmlFor="email">Email</label>
													<input
														type="email"
														id="email"
														placeholder="Enter your email"
														autoComplete="off"
														name="contact-email"
														required
														// {...register("Email", {
														//   required: true,
														//   pattern: /^\S+@\S+$/i,
														// })}
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="single-input text-start">
													<label htmlFor="subject">Subject</label>
													<input
														type="text"
														id="subject"
														placeholder="Enter Subject"
														autoComplete="off"
														name="contact-subject"
														required
														// {...register("Subject", {
														//   required: true,
														//   pattern: /^[A-Za-z\s\-']{2,50}$/,
														// })}
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="single-input text-start">
													<label htmlFor="message">Leave us a message</label>
													<textarea
														cols="4"
														rows="4"
														id="message"
														name="contact-message"
														placeholder="Please type your Message here..."
														required
														// {...register("Message", {
														//   required: true,
														//   pattern: /^[A-Za-z\s\-']{2,50}$/,
														// })}
													></textarea>
												</div>
											</div>
											<div className="col-sm-12 mt-4">
												<div className="btn-area">
													<button className="box-style btn-box" type="submit">
														Send Massage
													</button>
												</div>
											</div>
										</div>
									</div>
								)}
							</form>
						</div>
						<div className="col-lg-5 mt-7 mt-lg-0">
							<div className="py-8 py-sm-15 px-6 get-in-touch">
								<h3>Get in Touch</h3>
								<h4>Have any Questions</h4>
								<div className="single-content d-grid mt-5 mt-sm-10">
									{dataOffice.map((data) => {
										const { id, text, mainText, subText, icon } = data;
										return (
											<div
												key={id}
												className="single-content d-grid py-5 py-sm-5 gap-3 ">
												<div className="check d-center justify-content-start gap-3">
													{icon}
													<h4>{text}</h4>
												</div>
												<p className="d-flex gap-2">
													{subText
														? subText.map((item, i) => {
																return <span key={`${id}_${i}`}>{item}</span>;
																// eslint-disable-next-line no-mixed-spaces-and-tabs
														  })
														: null}

													{mainText && `- ${mainText}`}
												</p>
											</div>
										);
									})}
								</div>
								<ul className="d-flex justify-content-center gap-4 social-area py-4 py-sm-8 mt-5 mt-sm-10">
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
				</div>
			</section>
			<div className="contact-map">
				<iframe
					src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/"
					loading="lazy"></iframe>
			</div>
			<section className="faqs-section position-relative">
				<ShapeArea>
					<img src={faqFramer} className="shape-1" alt="icon" />
					<img src={faqFramer} className="shape-2" alt="icon" />
				</ShapeArea>
				<div className="overlay pt-120 pb-120">
					<div className="container position-relative cus-z1">
						<div className="row d-flex justify-content-center">
							<div className="col-lg-7">
								<div className="section-header text-center">
									<h4 className="sub-title">
										Answers to Common Questions about <span>Our Company</span>
									</h4>
									<span className="fs-two heading mb-6">
										Frequently Asked Questions About{' '}
										<span>Our Gaming Studio</span>
									</span>
									<p>
										Our gaming company develops games for multiple platforms and
										is always looking for talented individuals to join our team.
										Quality and player satisfaction is our top priority.
									</p>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-between">
							<div className="col-xl-7 col-lg-7">
								<div className="accordion" id="accordionFaqs">
									<AccordionBox
										title={
											'What is Sun Gaming, and what services do you offer?'
										}>
										Sun Gaming is a premier casino provider and development
										company. We specialize in creating and delivering a wide
										range of casino solutions. Our services include game
										development, software solutions, and consulting services to
										enhance your gaming business.
									</AccordionBox>
									<AccordionBox
										title={
											'What types of casino games can I expect from Sun Gaming?'
										}>
										At Sun Gaming, we develop a diverse portfolio of casino
										games, including slots, table games, poker, and specialty
										games. Our experienced team ensures that our games are
										designed to be engaging, innovative, and equipped with the
										latest technology for an exceptional gaming experience.
									</AccordionBox>
									<AccordionBox
										title={
											'Can you tailor your casino software to suit our specific needs and branding?'
										}>
										Yes, we provide customizable casino software solutions to
										match your unique requirements. Whether you need specific
										features, branding, or a personalized user experience, we
										collaborate closely with our clients to create a tailored
										solution aligned with your business goals.
									</AccordionBox>
									<AccordionBox
										title={
											'Is Sun Gaming a licensed and compliant casino provider?'
										}>
										Yes, Sun Gaming is fully committed to legal compliance in
										the gaming industry. We are licensed and operate in
										accordance with the regulatory standards of various
										jurisdictions. Our products are designed to be secure, fair,
										and compliant with industry regulations.
									</AccordionBox>
									<AccordionBox
										title={
											'What distinguishes Sun Gaming from other casino development companies?'
										}>
										Sun Gaming stands out due to our dedication to innovation,
										quality, and customer satisfaction. We continuously strive
										to push the boundaries of technology and design to deliver
										outstanding gaming experiences. Our experienced team and
										unwavering commitment to excellence make us a preferred
										choice for casino development.
									</AccordionBox>
									<AccordionBox
										title={
											'Can I explore your portfolio of casino games before making a decision?'
										}>
										Absolutely! You can browse our portfolio of casino games on
										our website to get a sense of the quality and variety of our
										offerings. Feel free to reach out if you have specific
										questions about any of our games or if you would like to
										request a demo.
									</AccordionBox>
									<AccordionBox
										title={
											'How can I get in touch with Sun Gaming to discuss my casino development needs?'
										}>
										You can contact Sun Gaming by visiting our
										&quot;Contact&quot; page on our website. Fill out the
										contact form with your details and inquiry, and our team
										will respond promptly. Alternatively, you can reach out to
										us via the provided email or phone contact details for more
										immediate assistance. We look forward to assisting you with
										your casino development projects.
									</AccordionBox>
								</div>
							</div>
							<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0">
								<div className="faq-bg py-15 px-8 text-center">
									<div className="icon-area">
										<img src={faqIcon} alt="Image" />
									</div>
									<h3 className="visible-slowly-bottom py-5">
										Check More Information
									</h3>
									<p>
										GameStorm is a full-service gaming studio company
										specializing in game development, art, design, and project
										management
									</p>
									<div className="btn-area">
										<div className="btn-area mt-8 alt-bg">
											<Link to={ABOUT} className="box-style btn-box d-center">
												Learn More
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Brands />
		</>
	);
};

export default Contact;
