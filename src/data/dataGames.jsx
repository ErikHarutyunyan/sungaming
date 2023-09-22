import {MdSportsSoccer} from "react-icons/md";
import {allGames1, allGamesProfile1, gameSlide} from "../components/Images";
import {v4 as uuidv4} from "uuid";
import {IconsCasino, IconsSlot, IconsTable} from "../components/Icons";

export const dataGames = [
  {
    id: uuidv4(),
    title: "Crazy Casino",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    category: ["Casino", "Sports"],
    features: [],
    platforms: "",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Crazy [Wild]",
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
    title: "Crazy [Wild]",
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
    title: "Crazy Tables",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    category: ["Tables"],
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
    title: "Crazy Casino",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    category: ["Casino", <IconsCasino key="casino" size={38}/>],
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
    title: "Crazy Slots",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    category: ["Slots"],
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
    title: "Crazy Sport",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    category: ["Sports"],
    desc: "",
    about: "Empire of the Stars",
    url: "",
    logo: "",
    features: [],
    platforms: "",
    featured: false,
  },
];

export const categoryIcons =
  {
    sports: <MdSportsSoccer key="sport" size={25}/>,
    slots: <IconsSlot key="slot" size={27}/>,
    casino: <IconsCasino key="casino" size={38}/>,
    tables: <IconsTable key="table" size={35}/>
  }


export const featuredGames = dataGames.filter((game) => game.featured === true);

const uniqueCategories = new Set();

const allCategoriesGames = dataGames.reduce((categories, game) => {
  if (game.category && game.category.length > 0) {
    game.category.forEach((category) => {

      if (typeof category === "string" && !uniqueCategories.has(category)) {
        categories.push(game.category);
        uniqueCategories.add(category);
      }
    });
  }
  return categories;
}, []);

allCategoriesGames.unshift(["All Games"]);
// const allCategoriesGamess = ["all", ...new Set(dataGames.map((item) => item.category).sort(function (a, b) {
//   return a === b ? 0 : a < b ? -1 : 1
// }))];
debugger
const allCategoriesGamess = Array.from(
  new Set(dataGames.map((game, index) => game.category[index]))
)


console.log("qwe", allCategoriesGamess)

console.log('allCategoriesGames :', allCategoriesGamess);
export {allCategoriesGames};
