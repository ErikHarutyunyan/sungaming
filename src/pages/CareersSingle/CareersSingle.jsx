// Styles
import { useRef, useState } from 'react';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import { ImAttachment } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { MdWorkOutline } from 'react-icons/md';
import { PiUserFocusLight } from 'react-icons/pi';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { bubble, ellipse7 } from '../../components/Images';
import OnboardModal from '../../components/OnboardModal/OnboardModal';
import Subscribe from '../../components/Subscribe';
import { dataCareers } from '../../data/dataCareers';
import { HOME } from '../../router/route-path';
import './CareersSingle.css';

const CareersSingle = () => {
	const [isOpen, setIsOpen] = useState(false);
	const hiddenFileInput = useRef(null);
	const [fileName, setFileName] = useState('');
	const { id: title } = useParams();
	const location = useLocation();
	let data = location.state?.data;
	if (!data) {
		const singleCareer = dataCareers.find((career) => {
			return career.path === title;
		});
		data = singleCareer;
	}
	// Programatically click the hidden file input element
	// when the Button component is clicked
	const handleClick = () => {
		hiddenFileInput.current.click();
	};
	const reset = () => {
		hiddenFileInput.current.value = null;
		setFileName('');
	};
	// Call a function (passed as a prop from the parent component)
	// to handle the user-selected file
	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];
		setFileName(fileUploaded.name);
	};

	const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => console.log('Form successfully submitted'))
			.catch((error) => alert(error));

		navigate('/success');
	};
	
	return (
		<>
			<section className="banner-section inner-banner position-relative about career">
				<div className="shape-area">
					<img src={bubble} className="shape-1" alt="icon" />
					<img src={ellipse7} className="shape-2" alt="icon" />
				</div>
				<div className="container position-relative">
					<div className="banner-content row justify-content-between">
						<div className="col-lg-6 col-md-10">
							<div className="main-content">
								<h2 className="visible-slowly-bottom display-four mb-6">
									Join a <span className="d-inline">team of passionate</span>{' '}
									people
								</h2>
								<p className="fs-four">
									we are always building towards an efficient and collaborative
									team of the best game developers around.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
							<div className="breadcrumb-area position-absolute end-0 bottom-0">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-end justify-content-end">
										<li className="breadcrumb-item p-0 m-0">
											<Link to={HOME}>Home</Link>
										</li>
										<FiChevronRight size={20} color={'white'} />
										<li className="breadcrumb-item active" aria-current="page">
											Career
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="job-opens details pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-7 col-lg-5 mb-5">
							<div className="content-wrapper d-grid gap-4 gap-sm-8">
								<div className="d-flex gap-6 align-items-center">
									<div className="end-area">
										<span className="fs-seven p-1 px-2">{data.area}</span>
									</div>
									<ul className="d-flex gap-6">
										<li className="d-flex align-items-center gap-2">
											<MdWorkOutline size={24} />
											<span className="fs-seven">{data.term}</span>
										</li>
										<li className="d-flex align-items-center gap-2">
											<IoTimeOutline size={24} />
											<span className="fs-seven">{data.types}</span>
										</li>
									</ul>
								</div>
								<div className="single-content mb-8">
									<h2 className="visible-slowly-bottom display-four mb-2">
										{data.title}
									</h2>
								</div>

								<div className="single-content">
									<h3 className="visible-slowly-bottom mb-3">
										Job responsibilities
									</h3>
									<ul className="ms-4 d-grid gap-1">
										{data.respons.map((item, index) => {
											return <li key={`${item}_${index}`}>{item}</li>;
										})}
									</ul>
								</div>
								<div className="single-content">
									<h3 className="visible-slowly-bottom mb-3">
										Required qualifications
									</h3>
									<ul className="ms-4 d-grid gap-1">
										{data.qual.map((item, index) => {
											return <li key={`${item}-${index}`}>{item}</li>;
										})}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-7 mt-8 mt-lg-0 alt-bg">
							<div className="apply-area cus-scrollbar text-center py-15 px-8">
								<div className="careers-icon icon-box mb-6 mb-sm-10 d-inline-flex d-center">
									{data.icon}
								</div>
								<div className="section-text">
									<h2 className="visible-slowly-bottom mb-3">
										Apply for the position now!
									</h2>
									<span>Join a growing team in a dynamic environment.</span>
								</div>
								<div className="btn-area">
									<div className="btn-area mt-5 mt-sm-8 flex-wrap gap-6 d-center">
										<button
											onClick={() => setIsOpen(true)}
											className="box-style btn-box d-center">
											Apply Now
										</button>
										<OnboardModal
											open={isOpen}
											onClose={() => setIsOpen(false)}>
											<div className="modal-content modal-career">
												<form
													data-netlify="true"
													onSubmit={handleSubmit}
													method="post"
													name="careers"
													action="/success/">
													<input
														type="hidden"
														name="form-name"
														value="careers"
													/>
													<div className="modal-header text-center">
														<h4 className="modal-title w-100 font-weight-bold">
															Apply For The Position Now!
														</h4>
													</div>
													<div className="modal-body d-center row mt-5">
														<div className="md-form mb-3">
															<div className="form-info">
																<AiOutlineUser size={20} color="#09926a" />
															</div>
															<input
																type="text"
																id="modalContactInput1"
																className="form-control validate mt-3"
																placeholder="Full Name"
																name="name"
																required
															/>
														</div>
														<div className="md-form mb-3">
															<div className="form-info">
																<AiOutlineMail size={21} color="#09926a" />
															</div>

															<input
																type="email"
																id="modalContactInput2"
																className="form-control validate mt-3"
																placeholder="Email"
																name="email"
																required
															/>
														</div>
														<div className="md-form mb-3">
															<div className="form-info">
																<PiUserFocusLight size={25} color="#09926a" />
															</div>

															<input
																type="text"
																id="modalContactInput3"
																className="form-control validate mt-3"
																placeholder="Vacancy"
																name="vacancy"
																required
															/>
														</div>
														<div className="md-form mb-3">
															<div className="form-info">
																<FiMessageSquare size={21} color="#09926a" />
															</div>

															<textarea
																type="text"
																id="modalContactTextarea"
																className="md-textarea form-control mt-3"
																rows="4"
																placeholder="Message"
																name="message"
																required></textarea>
														</div>
														<div className="md-form ">
															<ImAttachment size={24} color="#09926a" />
															<label
																className="ms-2 pointer d-inline-flex align-items-center"
																onClick={handleClick}>
																{fileName ? (
																	<>
																		<p className="attachFile text-truncate">
																			File: {fileName}
																		</p>
																		<button
																			type="button"
																			onClick={reset}
																			className="closeFile mx-2 d-inline">
																			<span className="small">x</span>
																		</button>
																	</>
																) : (
																	'Click Attach CV'
																)}
															</label>

															<input
																type="file"
																onChange={handleChange}
																ref={hiddenFileInput}
																accept=".jpg,.jpeg,.png,.doc,.docx,.pdf,.html,.ppt,.pptx,.odp"
																style={{ display: 'none' }}
																name="file"
																required
															/>
														</div>
													</div>
													<div className="modal-footer d-flex justify-content-center">
														<div className="btn-area mt-6 ">
															<button
																type="submit"
																className="w-25 justify-content-center box-style text-nowrap btn-box">
																Apply
															</button>
														</div>
													</div>
												</form>
											</div>
										</OnboardModal>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Subscribe />
		</>
	);
};

export default CareersSingle;
