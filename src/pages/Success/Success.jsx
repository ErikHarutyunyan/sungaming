import { useNavigate } from 'react-router-dom';
// Components
import LazyImage from '../../components/Images/LazyImage';
// Images
import { light } from '../../components/Images';


const Success = () => {
	const navigate = useNavigate();
	return (
		<section className="success">
			<div className="shapes">
				<LazyImage src={light} fetchpriority className={'successImg'} />
			</div>
			<div className="container">
				<div className="success_content">
					<div className="success_info">
						<h2 className="success_subtitle">Thank you!</h2>
						<p className="success_description">
							Your form submission has been successfully
						</p>
						<a
							onClick={(e) => {
								e.preventDefault();
								navigate(-1);
							}}
							className="box-style btn-box d-center go_home theme_button">
							&#10229; Back to our site
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Success;
