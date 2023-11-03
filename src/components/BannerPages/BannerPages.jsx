// Route
import { Link } from 'react-router-dom';
import { HOME } from '../../router/route-path.jsx';
// Images and Iconns
import { FiChevronRight } from 'react-icons/fi';
import { bubble, ellipse7 } from '../Images';
import ShapeArea from '../ShapeArea/ShapeArea.jsx';

const BannerPages = ({
	bg,
	page,
	desc,
	title,
	titleSecond,
	classNames,
	rightImg,
	children,
}) => {
	return (
		<section
			className={`banner-section inner-banner position-relative banner-page ${classNames}`}
			style={{ backgroundImage: `url(${bg})` }}>
			<ShapeArea>
				<img src={bubble} className="shape-1" alt="icon" />
				<img src={ellipse7} className="shape-2" alt="icon" />
			</ShapeArea>
			<div className="container position-relative z-2">
				<div className="banner-content row justify-content-between">
					<div className="col-lg-6 col-md-10">
						<div className="main-content">
							<h2 className="visible-slowly-bottom display-four mb-6">
								{title} <span>{titleSecond}</span>
							</h2>
							<p className="fs-four">{desc}</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
						{rightImg && (
							<div className="breadcrumb__img">
								<img
									alt="img"
									loading="lazy"
									width="402"
									height="412"
									src={rightImg}
								/>
							</div>
						)}

						<div className="breadcrumb-area position-absolute end-0 bottom-0">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-center justify-content-center">
									<li className="breadcrumb-item p-0 m-0">
										<Link to={HOME}>Home</Link>
									</li>
									<FiChevronRight size={20} color={'white'} />
									<li className="breadcrumb-item active" aria-current="page">
										{page}
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			{children}
		</section>
	);
};
export default BannerPages;
