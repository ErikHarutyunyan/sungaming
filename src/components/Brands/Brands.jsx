import { dataBrands } from '../../data/dataBrands';
import LazyImage from '../Images/LazyImage';

const Brands = () => {
	return (
		<section className="brands our-partners pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="section-header text-center">
							<h4 className="sub-title">
								<span>Endorsed </span> By
							</h4>
							<span className="fs-two heading mb-6">
								We&apos;re Delighted to Collaborate with the
								<span>World&apos;s Top Brands</span>
							</span>
							<p>We take pride in assisting global industry frontrunners.</p>
							<p>Feel free to explore our accolades!</p>
						</div>
					</div>
				</div>
				<div className="row pt-10 justify-content-center">
					<div className="col-lg-12">
						<div className="all-items brand-wrap mb-7 d-flex gap-4 justify-content-between flex-wrap">
							{dataBrands.map((brand, index) => {
								return (
									<div key={`${index}_${brand}`} className="thumb">
										<LazyImage
											alt="brand-image"
											width="207"
											height="46"
											src={brand}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Brands;
