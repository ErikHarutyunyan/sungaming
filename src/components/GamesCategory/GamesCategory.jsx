import { useState } from 'react';
import { allCategoriesGames, categoryIcons } from '../../data/dataGames';

const GamesCategory = ({ filterItems = (f) => f, setNext = (f) => f, }) => {
	const [isActive, setIsActive] = useState('category_0');

	const handleClick = (e, category) => {
		const className = e.target.className;
		if (!className.includes('active_category')) {
			filterItems(category === 'All Games' ? [category] : category);
			setIsActive(e.target.id);
			setNext(6);
		}
	};
	return (
		<div className="row justify-content-center">
			<div className="col-lg-9 text-center">
				<ul className="nav tablinks flex-wrap d-center mb-10 d-inline-flex gap-4 p-3 tab-area">
					{Array.from(allCategoriesGames, (category, index) => (
						<li
							className="nav-item pointer"
							key={index}
							onClick={(e) => handleClick(e, category)}>
							<button
								id={`category_${index}`}
								className={
									isActive === `category_${index}`
										? `${category}_category nav-link d-center box-style btn-box active_category`
										: `${category}_category nav-link d-center box-style btn-box`
								}>
								{categoryIcons[category.toLowerCase()] !== undefined ? (
									<span className="icon-area pe-none">
										{categoryIcons[category.toLowerCase()]}
									</span>
								) : null}
								{category}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default GamesCategory;
