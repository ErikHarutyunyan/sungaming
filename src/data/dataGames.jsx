import { MdSportsSoccer } from "react-icons/md";
import {
  allGames1,
  allGamesProfile1,
  gameSlide,
  pokerBig,
  pokerSmall,
} from "../components/Images";
import { v4 as uuidv4 } from "uuid";
import { IconsCasino, IconsSlot, IconsTable } from "../components/Icons";

export const dataGames = [
  {
    id: uuidv4(),
    title: "Poker",
    subTitle: "Enjoy this stylish 3 Card Poker game!",
    imgMain: pokerBig,
    imgSmall: pokerSmall,
    desc: "Experience the thrill of poker with a twist in our 3 Card Poker game! This fast-paced and exciting casino classic combines elements of traditional poker with a simplified three-card hand format, making it easy to learn and play for both beginners and seasoned card sharks. Test your luck and skill as you aim to beat the dealer's hand and win big. With the chance to place bonus bets and enjoy the excitement of pair-plus payouts, 3 Card Poker offers endless entertainment and the potential for significant winnings. Whether you're a poker pro or just looking for a fun and accessible card game, 3 Card Poker is the perfect choice for a memorable casino experience.",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/3card_poker/",
    logo: "",
    category: ["Casino"],
    features: [
      "Multiple Betting Options",
      "Realistic Graphics and Animations",
      "Strategy Guides and Tips",
      "Multiplayer Mode",
      "Progressive Jackpot",
    ],
    platforms: "PC, iOS, Android",
    featured: true,
    video: "https://www.youtube.com/watch?v=isiQJ4XIyqw&ab_channel=AdamKontor",
  },
  {
    id: uuidv4(),
    title: "Soccer Slot",
    subTitle:
      "Bonus game with Penalty Kicks, Freespins, Auto-Spin, Exciting 3D Animations",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    desc: "Kick off the excitement with our Soccer Slot game! Step onto the virtual pitch and score big in this thrilling slot machine inspired by the beautiful game. Feel the adrenaline rush as you spin the reels filled with soccer balls, jerseys, and cheering fans. With each spin, you have a chance to win incredible prizes, including jackpots that can rival a World Cup victory! Whether you're a soccer fan or just seeking fast-paced casino action, Soccer Slot promises heart-pounding fun and the opportunity to net some impressive winnings. So, lace up your virtual cleats and take a shot at the goal in this action-packed casino slot game.",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/3d_soccer_slot/",
    logo: "",
    category: ["Slots"],
    features: [
      "Soccer-Themed Symbols",
      "Bonus Mini-Games",
      "Player Customization",
      "Progressive Jackpot",
      "Soccer Commentator Audio",
    ],
    platforms: "PC, iOS, Android",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Outerspace Slot",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    subTitle: "Autoplay, 13 Winlines, Jackpot ",
    desc: "Blast off on an intergalactic adventure with our Outerspace Slot game! Explore the cosmos and unearth cosmic treasures in this captivating slot machine set amidst the stars. Spin the reels filled with futuristic spacecraft, alien planets, and mesmerizing galaxies as you embark on a journey that's truly out of this world. With every spin, you'll have the chance to win astronomical prizes, including otherworldly jackpots that are truly beyond your imagination. Whether you're a space enthusiast or simply seeking cosmic thrills, Outerspace Slot offers an unforgettable cosmic casino experience that's bound to take your winnings to the next dimension.",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/Outerspace/",
    logo: "",
    category: ["Slots"],
    features: [
      "Galactic Symbols",
      "Bonus Space Adventures",
      "Unique Reel Mechanics",
      "Cosmic Soundtrack",
      "Space Exploration Progression",
    ],
    platforms: "PC, iOS, Android",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Aladdin",
    subTitle: "Aladin Slot",
    imgMain: gameSlide,
    imgSmall: allGamesProfile1,
    desc: "Embark on a magical carpet ride with our Aladdin Slot game! Dive into the enchanting world of Arabian Nights, where genies grant wishes and treasures await around every corner. Spin the reels adorned with magic lamps, flying carpets, and exotic jewels as you journey through the mystical desert city of Agrabah. With each spin, you have the chance to uncover incredible riches, including jackpots that rival the riches of a sultan's palace. Whether you're a fan of the classic tale or simply seeking a thrilling adventure, Aladdin Slot promises an unforgettable casino experience filled with Arabian mystique and the potential for dazzling wins.",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/aladdin/",
    logo: "",
    category: ["Slots"],
    features: [
      "Magical Symbols",
      "Wish-Granting Bonus Rounds",
      "Mystical Genie Jackpot",
      "Agrabah Adventure Mode",
      "Arabian Nights Soundtrack",
    ],
    platforms: "PC, iOS, Android",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Baccarat",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    subTitle: "Baccarat Gambling Game",
    desc: "Step into the world of elegance and sophistication with Baccarat, the timeless casino classic. Known as the 'game of kings,' Baccarat is the epitome of refined gambling. Whether you're a seasoned pro or new to the world of card games, Baccarat offers simple rules and fast-paced action. Bet on the banker, player, or a tie, and watch as the cards are dealt with suspense and excitement. Will you be the one to correctly predict the winning hand and reap the rewards? With its aura of prestige and potential for substantial payouts, Baccarat is the game of choice for those seeking a taste of high-stakes gambling in an atmosphere of luxury",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/baccarat/",
    logo: "",
    category: ["Casino"],
    features: [
      "Realistic Gameplay",
      "Multiple Baccarat Variations",
      "Live Dealer Option",
      "Statistics and Scorecards",
      "Betting Strategies and Tips",
    ],
    platforms: "PC, iOS, Android",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Bingo",
    subTitle: "The game can be played both in Portrait and in Landscape mode!",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    category: ["Tables"],
    desc: "Get ready for a classic game of luck and excitement with Bingo! Join the throngs of enthusiastic players as you mark off numbers on your cards, eagerly anticipating that magical call of 'Bingo!' Will your numbers align, and fortune favor you tonight? Whether you're a beginner or a seasoned dauber, Bingo offers thrilling moments of anticipation and camaraderie. With its social atmosphere and the chance to win fantastic prizes, it's no wonder that Bingo has remained a beloved casino game for generations. So grab your cards, cross your fingers, and let the Bingo balls roll – your lucky streak might be just around the corner!",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/bingo_75/",
    logo: "",
    features: [
      "Variety of Bingo Games",
      "Multiplayer Mode",
      "Progressive Jackpots",
      "Auto-Daubing and Sorting",
      "Bingo Mini-Games",
    ],
    platforms: "PC, iOS, Android",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Black Jack",
    subTitle: "Blackjack game 3D graphic!",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    category: ["Casino"],
    desc: "Experience the excitement of 21 in our thrilling Blackjack game! Also known as 21, Blackjack is the ultimate test of strategy and skill as you aim to beat the dealer's hand without going over. Challenge yourself to make the perfect decisions and hit that magical Blackjack with an Ace and a 10-value card. With the option to double down, split pairs, and employ various betting strategies, Blackjack offers endless opportunities for strategy and suspense. Whether you're a seasoned card counter or a casual player, our Blackjack game promises heart-pounding moments and the potential for big wins. So, take a seat at the table, and let the cards decide your fate in this timeless and exhilarating casino classic.",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/blackjack/",
    logo: "",
    features: [
      "Realistic Gameplay",
      "Variety of Blackjack Variations",
      "Multiplayer Mode",
      "Strategy Guides and Tips",
      "Tournament Mode",
    ],
    platforms: "PC, iOS, Android",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Caribbean Stud Poker",
    subTitle: "Caribbean Stud Poker Casino Game.",
    category: ["Casino"],
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    desc: "Set sail for Caribbean adventure in our Caribbean Stud Poker game! This tropical twist on traditional poker offers players the chance to go head-to-head against the dealer for massive payouts. Place your bets and receive five cards, aiming to create a winning hand, all while enjoying the laid-back atmosphere of a beachfront casino. Will you hold a Royal Flush and claim the ultimate Caribbean fortune? With the added excitement of a progressive jackpot, Caribbean Stud Poker brings the allure of the islands to your casino experience. So, grab a cocktail, soak in the sunshine, and try your luck in this thrilling poker variant with a Caribbean flair",
    url: "https://sgaming.netlify.app/caribbean_stud_poker/",
    features: [
      "Realistic Caribbean Setting",
      "Progressive Jackpot",
      "Multiplayer Mode",
      "Strategy Guides and Tips",
      "Side Bets and Bonus Features",
    ],
    platforms: "PC, iOS, Android",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Craps",
    subTitle: "3D version of Craps Casino Game!",
    imgMain: allGames1,
    imgSmall: allGamesProfile1,
    url: "https://sgaming.netlify.app/craps/",
    category: ["Casino"],
    desc: "Roll the dice and feel the adrenaline surge in our Craps Casino Game! This high-energy and iconic casino classic brings the excitement of the casino floor right to your screen. Place your bets on the outcome of the dice roll and watch as the action unfolds. Will you be cheering for a come-out roll or hoping for a lucky number on the point phase? With a wide range of betting options and the potential for big wins, Craps offers a thrilling and dynamic gaming experience that keeps you on the edge of your seat. Whether you're a seasoned shooter or new to the game, Craps promises endless entertainment and the chance to ride the waves of fortune!",
    features: [
      "Realistic 3D Graphics",
      "Comprehensive Betting Options",
      "Multiplayer Mode",
      "Strategy Guides and Tips",
      "Tutorial and Strategy Guides",
    ],
    platforms: "PC, iOS, Android",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Crazy Monkey",
    img: "img/ks-crazy-monkey.jpg",
    subTitle: "Crazy Monkey Casino Game",
    url: "https://sgaming.netlify.app/crazyMonkey/",
    category: ["Slots"],
    features: [
      "Jungle-Themed Symbols",
      "Monkey Bonus Game",
      "Progressive Jackpot",
      "Wild Monkey Feature",
      "Crazy Monkey Scatter",
    ],
    desc: "Get ready for some wild jungle action in Crazy Monkey Scatter, a thrilling casino game that's full of adventure! Venture deep into the heart of the tropical rainforest and join our playful primate friend on a quest for treasures. Spin the reels and encounter bananas, coconuts, and cheeky monkeys on your journey. But watch out for the Crazy Monkey Scatter symbol – when it appears, it triggers a frenzy of excitement with free spins and bonus features that can lead to incredible payouts. Whether you're a seasoned slot enthusiast or just looking for a fun and vibrant game, Crazy Monkey Scatter offers non-stop entertainment and the chance to swing from the trees with a bundle of winnings!",
    platforms: "PC, iOS, Android",
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Harness Racing",
    img: "img/vg-sports.jpg",
    subTitle:
      "Only your intuition is missing! Take a look at the odds and make your wager!",
    url: "https://sgaming.netlify.app/harness_racing/",
    category: ["Sports"],
  },
  {
    id: uuidv4(),
    title: "Keno",
    img: "img/p0-keno.jpg",
    subTitle: "Keno Casino Game",
    url: "https://sgaming.netlify.app/keno/",
  },
  {
    id: uuidv4(),
    title: "Mummy",
    img: "img/ha-mummy-money.jpg",
    subTitle: "Try to win as much cash",
    url: "https://sgaming.netlify.app/mummy/",
  },
  {
    id: uuidv4(),
    title: "Olympus Keno",
    img: "img/pg-keno.jpg",
    subTitle: "Pick your lucky numbers and hope in the goodwill of Zeus!",
    url: "https://sgaming.netlify.app/olympus_keno/",
  },
  {
    id: uuidv4(),
    title: "Roulette Royale",
    img: "img/nv-lux-roulette.jpg",
    subTitle: "Roulette Royale Casino Game",
    url: "https://sgaming.netlify.app/roulette_royale/",
  },
  {
    id: uuidv4(),
    title: "Royal Slot",
    img: "img/codecanyon.png",
    subTitle: "Royal Slot Casino Game",
    url: "https://sgaming.netlify.app/royalSlot/",
  },
  {
    id: uuidv4(),
    title: "Katana Fruits",
    img: "img/katana.jpg",
    subTitle: "Are you ready for a new slot experience?",
    url: "https://sgaming.netlify.app/slot_katana_fruits/",
  },
  {
    id: uuidv4(),
    title: "Space Adventure",
    img: "img/ha-space-fortune.jpg",
    subTitle: "Space Adventure Casino Game",
    url: "https://sgaming.netlify.app/slot_space_adventure/",
  },
  {
    id: uuidv4(),
    title: "The Fruits",
    img: "img/no-fruits.jpg",
    subTitle: "Slot Machine – The Fruits",
    url: "https://sgaming.netlify.app/slot_the_fruits/",
  },
  {
    id: uuidv4(),
    title: "The Gold Pot",
    img: "img/pot.jpg",
    subTitle: "This lucky leprechaun has in store many surprises for you!",
    url: "https://sgaming.netlify.app/slot_the_gold_pot/",
  },
  {
    id: uuidv4(),
    title: "Ultimate Football",
    img: "img/ult.jpg",
    subTitle: "Slot Machine",
    url: "https://sgaming.netlify.app/slot_ultimate_football/",
  },
  {
    id: uuidv4(),
    title: "Wheel of Fortune",
    img: "img/fort.jpg",
    subTitle: "Wheel of Fortune Gambling Game",
    url: "https://sgaming.netlify.app/wheel_of_fortune/",
  },
];

dataGames.forEach((game) => {
  game.path = game.title.toLowerCase().replace(/\s+/g, "-");
});

export const categoryIcons = {
  sports: <MdSportsSoccer key="sport" size={25} />,
  slots: <IconsSlot key="slot" size={27} />,
  casino: <IconsCasino key="casino" size={38} />,
  tables: <IconsTable key="table" size={35} />,
};

export const featuredGames = dataGames.filter((game) => game.featured === true);

const allCategoriesGames = Array.from(
  dataGames.reduce((categories, game) => {
    game.category.forEach((category) => {
      categories.add(category);
    });
    return categories;
  }, new Set())
);

allCategoriesGames.unshift("All Games");

export { allCategoriesGames };
