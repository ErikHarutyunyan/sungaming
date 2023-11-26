import { memo, useCallback, useMemo, useState } from "react";
// Data
import { allCategoriesGames, categoryIcons } from "data/dataGames";

const GamesCategory = memo(
  function GamesCategory({
    dataGames = [],
    setGameItems = () => {},
    setNext = () => {},
  }) {
    const [isActive, setIsActive] = useState("category_0");

    const filterItems = useCallback(
      (category) => {
        if (category[0] === "All Games") return setGameItems(dataGames);
        const newItems = dataGames.filter((item) => {
          if (Array.isArray(category)) {
            return category.some((cat) => item.category.includes(cat));
          }
          return item.category.includes(category);
        });
        setGameItems(newItems);
      },
      [setGameItems, dataGames],
    );

    const handleClick = useCallback(
      (e, category) => {
        const className = e.target.className;
        if (!className.includes("active_category")) {
          filterItems(category === "All Games" ? [category] : category);
          setIsActive(e.target.id);
          setNext(6);
        }
      },
      [setIsActive, setNext, filterItems],
    );

    const categoryButtons = useMemo(
      () =>
        Array.from(allCategoriesGames, (category, index) => (
          <li
            className="nav-item pointer"
            key={index}
            onClick={(e) => handleClick(e, category)}
          >
            <button
              id={`category_${index}`}
              className={
                isActive === `category_${index}`
                  ? `${category}_category nav-link d-center box-style btn-box active_category`
                  : `${category}_category nav-link d-center box-style btn-box`
              }
            >
              {categoryIcons[category.toLowerCase()] !== undefined ? (
                <span className="icon-area pe-none">
                  {categoryIcons[category.toLowerCase()]}
                </span>
              ) : null}
              {category}
            </button>
          </li>
        )),
      [handleClick, isActive],
    );

    return (
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <ul className="nav tablinks flex-wrap d-center mb-10 d-inline-flex gap-4 p-3 tab-area">
            {categoryButtons}
          </ul>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Customize this prop comparison logic based on your actual prop names
    return (
      prevProps.dataGames === nextProps.dataGames &&
      prevProps.setGameItems === nextProps.setGameItems &&
      prevProps.setNext === nextProps.setNext
    );
  },
);
export default GamesCategory;
