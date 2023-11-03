// Styles
import { useLocation, useParams } from 'react-router-dom';
import { bubble, ellipse7 } from '../../components/Images';
import ShapeArea from '../../components/ShapeArea';
import { dataNews } from '../../data/dataNews';
import './NewsSingle.css';

const NewsSingle = () => {
	const location = useLocation();
	const { id: title } = useParams();
	let data = location.state?.data;
	if (!data) {
		const singleNews = dataNews.find((news) => {
			return news.path === title;
		});
		data = singleNews;
	}
	return (
		<>
			<section
				className="banner-section inner-banner position-relative store newsDetails "
				style={{
					backgroundImage: `url(${data.imgMain}), linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))`,
				}}>
				<ShapeArea>
					<img src={bubble} className="shape-1" alt="icon" />
					<img src={ellipse7} className="shape-2" alt="icon" />
				</ShapeArea>
				<div className="container position-relative">
					<div className="banner-content row justify-content-center">
						<div className="col-lg-8 col-md-10 justify-content-center">
							<div className="main-content">
								<h2 className="visible-slowly-bottom teact-center display-four mb-6">
									<span className="text-center">{data.title}</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container pt-20">
					<div className="row">
						<p>{data.data}</p>
						<div dangerouslySetInnerHTML={{ __html: data.desc }} />
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsSingle;
