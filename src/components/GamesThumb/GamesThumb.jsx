import { useState } from 'react';
// Data
import { dataGames } from '../../data/dataGames';
// Component
import GameCard from '../GameCard/';
import GamesCategory from '../GamesCategory';

const gamesPerRow = 5;

const GamesThumb = ({ style = '1', viewItems = 6 }) => {
	const [gameItems, setGameItems] = useState(dataGames);
	const [next, setNext] = useState(viewItems);

	const handleMoreGames = () => {
		setNext((prevCount) => prevCount + gamesPerRow);
	};

	return (
		<>
			<GamesCategory
				dataGames={dataGames}
				setGameItems={setGameItems}
				setNext={setNext}
			/>
			<GameCard
				style={style}
				gameItems={gameItems}
				next={next}
				handleMoreGames={handleMoreGames}
			/>
		</>
	);
};

export default GamesThumb;
