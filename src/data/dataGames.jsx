import { MdSportsSoccer } from "react-icons/md";
import { allGamesProfile1, gameSlide } from "../components/Images";
import { v4 as uuidv4 } from "uuid";
import { IconsCasino, IconsSlot, IconsTable } from "../components/Icons";
export const dataGames = [
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    category: [],
    features: [],
    platforms: "",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    category: [],
    features: [],
    platforms: "",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    category: [],
    features: [],
    platforms: "",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    category: ["Tables", <IconsTable size={35} />],
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    features: [],
    platforms: "",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    category: ["Casino", <IconsCasino size={38} />],
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    features: [],
    platforms: "",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    category: ["Slots", <IconsSlot size={27} />],
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    features: [],
    platforms: "",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Crazy Wild",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    category: ["Sports", <MdSportsSoccer size={25} />],
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    features: [],
    platforms: "",
    featured: false,
  },
];

export const featuredGames = dataGames.filter((game) => game.featured === true);

const allCategoriesGames = Array.from(
  new Set(dataGames.map((game) => [game.category, game.id]))
)
  .filter((item) => {
    return item[0] && item[0].length > 0;
  }) // Filter out empty categories
  .sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

allCategoriesGames.unshift(["All Games"]);
console.log("allCategoriesGames :", allCategoriesGames);
export { allCategoriesGames };
