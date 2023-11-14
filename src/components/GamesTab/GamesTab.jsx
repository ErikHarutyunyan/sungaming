import { useCallback, useState } from "react";
// Data
import { dataGames } from "../../data/dataGames";
// Component
import GameCard from "./components/GameCard";
import GamesCategory from "./components/GamesCategory";

const gamesPerRow = 5;

const GamesTab = ({ style = "1", viewItems = 6 }) => {
  const [gameItems, setGameItems] = useState(dataGames);
  const [next, setNext] = useState(viewItems);

  const handleMoreGames = useCallback(
    () => setNext((prevCount) => prevCount + gamesPerRow),
    []
  );

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

export default GamesTab;
