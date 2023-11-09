import { useEffect, useRef, useState } from 'react';

const CustomSlider = ({
	parentClassName = '',
	itemClassName = '',
	images = [],
}) => {
	const imagesParent = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const updateActiveSlide = () => {
		if (imagesParent.current) {
			imagesParent.current.childNodes.forEach((child, index) => {
				if (child.classList.contains('active')) {
					child.classList.remove('active');
				}
				if (index === activeSlide) {
					child.classList.add('active');
				}
			});
		}
	};

	const nextSlide = () => {
		setActiveSlide(
			(prevSlide) => (prevSlide + 1) % imagesParent.current.childNodes.length,
		);
	};

	useEffect(() => {
		updateActiveSlide();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeSlide]);

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000); // Change slide every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="col-lg-6">
			<div className={parentClassName} ref={imagesParent}>
				{images.map((img, index) => {
					return (
						<div key={`${img}_${index}`} className={itemClassName}>
							<img alt={img} src={img} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default CustomSlider;
