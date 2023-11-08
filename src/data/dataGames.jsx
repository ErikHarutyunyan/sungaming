import { v4 as uuidv4 } from "uuid";
import { MdSportsSoccer } from "react-icons/md";
import { RiNftLine } from "react-icons/ri";
import { IconsCasino, IconsSlot, IconsTable } from "../components/Icons";
import {
  aladdinBig,
  aladdinImg1,
  aladdinImg2,
  aladdinImg3,
  aladdinSmall,
  baccaratBig,
  baccaratImg1,
  baccaratImg2,
  baccaratImg3,
  baccaratImg4,
  baccaratSmall,
  bingoBig,
  bingoImg1,
  bingoImg2,
  bingoImg3,
  bingoSmall,
  blackJackBig,
  blackJackImg1,
  blackJackImg3,
  blackJackSmall,
  caripokerBig,
  caripokerImg1,
  caripokerImg2,
  caripokerImg3,
  caripokerImg4,
  caripokerSmall,
  crapsBig,
  crapsImg1,
  crapsImg2,
  crapsImg3,
  crapsSmall,
  crazyMonkeyBig,
  crazyMonkeyImg1,
  crazyMonkeyImg2,
  crazyMonkeyImg3,
  crazyMonkeyImg4,
  crazyMonkeySmall,
  fruitsBg,
  fruitsImg1,
  fruitsImg2,
  fruitsSmall,
  harnessBig,
  harnessImg1,
  harnessImg2,
  harnessSmall,
  kenoBig,
  kenoImg1,
  kenoImg2,
  kenoSmall,
  mummyBig,
  mummyImg1,
  mummyImg2,
  mummyImg3,
  mummyImg4,
  mummyImg5,
  mummyImg6,
  mummySmall,
  njGambitBg2,
  njGambitImg1,
  njGambitImg2,
  njGambitImg3,
  njGambitImg4,
  njGambitImg5,
  njGambitImg6,
  njGambitImg7,
  njGambitSmall,
  okenoBig,
  okenoImg,
  okenoImg1,
  olympusKenoSmall,
  outherspaceBig,
  outherspaceImg1,
  outherspaceImg2,
  outherspaceImg3,
  outherspaceImg4,
  outherspaceSmall,
  pokerBig3,
  pokerImg1,
  pokerImg2,
  pokerImg3,
  pokerImg4,
  pokerImg5,
  pokerSmall3,
  potBig,
  potImg1,
  potImg2,
  potImg3,
  potImg4,
  potImg5,
  potImg6,
  potImg7,
  potSmall,
  rouletteRoyaleSmall,
  royalSlotSmall,
  rrBig,
  rrImg,
  rrImg2,
  rsBig,
  rsImg,
  saBg,
  saImg1,
  saImg2,
  saImg3,
  saImg4,
  soccerBig,
  soccerImg1,
  soccerImg2,
  soccerImg3,
  soccerImg4,
  soccerImg5,
  soccerSmall,
  spaceSmall,
  ufBig,
  ufImg1,
  ufImg2,
  ufImg3,
  ufImg4,
  ufImg5,
  ufImg6,
  ufImg7,
  ufImg8,
  ufSmall,
  wfBig,
  wfImg1,
  wfImg2,
  wfSmall,
} from "../components/Images";

export const dataGames = [
  {
    id: uuidv4(),
    title: "Ninja Gambit",
    subTitle:
      "Welcome to NinjaGambit, the ultimate NFT-based card battle game!",
    imgMain: njGambitBg2,
    imgSmall: njGambitSmall,
    imgMore: [
      njGambitImg4,
      njGambitBg2,
      njGambitImg1,
      njGambitImg2,
      njGambitImg3,
      njGambitImg5,
      njGambitImg6,
      njGambitImg7,
    ],
    desc: `NinjaGambit is an innovative NFT card battle game that combines strategy, luck, and the power of blockchain technology. In this battle NFT cards, each representing a formidable ninja character with its unique abilities and attributes. Join us in this exciting adventure and prove yourself as the ultimate ninja warrior.

NinjaGambit promises an immersive gameplay experience. Challenge other players, complete quests, and strive to climb the global leaderboards. Each decision you make, every ability you employ, and every battle you win brings you closer to becoming the ultimate ninja warrior.`,
    url: "https://ninjagambit.netlify.app/",
    logo: "",
    category: ["Crypto"],
    info: [
      {
        RTP: "98.8%",
      },
      {
        Volatility: "High",
      },
    ],
    features: [
      "Multiple Betting Options",
      "Realistic Graphics and Animations",
      "Strategy Guides and Tips",
      "Multiplayer Mode",
      "Progressive Jackpot",
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: true,
    video: "/src/assets/video/njVideo.mp4",
  },
  {
    id: uuidv4(),
    title: "Poker",
    subTitle: "Enjoy this stylish 3 Card Poker game!",
    imgMain: pokerBig3,
    imgSmall: pokerSmall3,
    imgMore: [pokerImg1, pokerImg2, pokerImg3, pokerImg4, pokerImg5],
    desc: `Step into the thrilling world of 3 Card Poker, where simplicity meets excitement! This popular casino game combines the best of poker and simplicity, making it a perfect choice for both beginners and seasoned players.
In 3 Card Poker, your goal is to create the best three-card hand possible, aiming to beat the dealer's hand. With just three cards to work with, the action is fast-paced and every decision counts. Will you have a Straight, Flush, or even a Three of a Kind in your hand? The suspense is palpable as the cards are revealed.

But the excitement doesn't stop there. 3 Card Poker offers optional bonus bets, like the Pair Plus, where you can win big for landing pairs or better. This adds an extra layer of anticipation and the potential for significant payouts.

Whether you're a poker pro or just looking for a quick and thrilling card game, 3 Card Poker has it all. It's the perfect combination of strategy, luck, and adrenaline, making it a favorite in the world of casino gaming. So, take your seat at the table, place your bets, and see if you can outplay the dealer for a chance to win big!`,
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/3card_poker/",
    logo: "",
    category: ["Casino"],
    info: [
      {
        RTP: "98.34%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "1/300",
      },
      {
        Multiplier: "2000x",
      },
    ],
    features: [
      "Multiple Betting Options",
      "Realistic Graphics and Animations",
      "Strategy Guides and Tips",
      "Multiplayer Mode",
      "Progressive Jackpot",
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/FAajXAuUcVA?modestbranding=1&;showinfo=0&;autohide=1&;rel=0;",
  },
  {
    id: uuidv4(),
    title: "Soccer Slot",
    subTitle:
      "Bonus game with Penalty Kicks, Freespins, Auto-Spin, Exciting 3D Animations",
    imgMain: soccerBig,
    imgSmall: soccerSmall,
    imgMore: [soccerImg1, soccerImg2, soccerImg3, soccerImg4, soccerImg5],
    desc: "Kick off the excitement with our Soccer Slot game! Step onto the virtual pitch and score big in this thrilling slot machine inspired by the beautiful game. Feel the adrenaline rush as you spin the reels filled with soccer balls, jerseys, and cheering fans. With each spin, you have a chance to win incredible prizes, including jackpots that can rival a World Cup victory! Whether you're a soccer fan or just seeking fast-paced casino action, Soccer Slot promises heart-pounding fun and the opportunity to net some impressive winnings. So, lace up your virtual cleats and take a shot at the goal in this action-packed casino slot game.",
    about: "Empire of the Stars",
    url: "https://sgaming.netlify.app/3d_soccer_slot/",
    logo: "",
    category: ["Slots", "Sports"],
    info: [
      {
        RTP: "97%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.50/10",
      },
    ],
    features: [
      "Soccer-Themed Symbols",
      "Bonus Mini-Games",
      "Player Customization",
      "Progressive Jackpot",
      "Soccer Commentator Audio",
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/w8noQPqSBX8?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Outerspace Slot",
    subTitle: "Autoplay, 13 Winlines, Jackpot ",
    imgMain: outherspaceBig,
    imgSmall: outherspaceSmall,
    imgMore: [
      outherspaceImg2,
      outherspaceImg1,
      outherspaceImg4,
      outherspaceImg3,
    ],
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
    info: [
      {
        RTP: "98%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "10/100",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/eU5yb7GrRUM?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Aladdin",
    subTitle: "Aladin Slot",
    imgMain: aladdinBig,
    imgSmall: aladdinSmall,
    imgMore: [aladdinBig, aladdinImg1, aladdinImg2, aladdinImg3],
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
    info: [
      {
        RTP: "96.07%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "1/500",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: true,
    video:
      "https://www.youtube.com/embed/tstYZwMMocE?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Baccarat",
    imgMain: baccaratBig,
    imgSmall: baccaratSmall,
    imgMore: [
      baccaratBig,
      baccaratImg2,
      baccaratImg3,
      baccaratImg1,
      baccaratImg4,
    ],
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
    info: [
      {
        RTP: "98.94%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "0.1/100",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/FAajXAuUcVA?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Bingo",
    subTitle: "The game can be played both in Portrait and in Landscape mode!",
    imgMain: bingoBig,
    imgSmall: bingoSmall,
    imgMore: [bingoImg1, bingoImg2, baccaratImg3, bingoImg3],
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
    info: [
      {
        RTP: "94.5%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.25/1",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/EmNS0TsMUZM?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Black Jack",
    subTitle: "Blackjack game 3D graphic!",
    imgMain: blackJackBig,
    imgSmall: blackJackSmall,
    imgMore: [blackJackBig, blackJackImg1, blackJackImg3],
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
    info: [
      {
        RTP: "99.92%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.1/300",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Caribbean Stud Poker",
    subTitle: "Caribbean Stud Poker Casino Game.",
    category: ["Casino"],
    imgMain: caripokerBig,
    imgSmall: caripokerSmall,
    imgMore: [
      caripokerBig,
      caripokerImg1,
      caripokerImg3,
      caripokerImg2,
      caripokerImg4,
    ],
    desc: "Set sail for Caribbean adventure in our Caribbean Stud Poker game! This tropical twist on traditional poker offers players the chance to go head-to-head against the dealer for massive payouts. Place your bets and receive five cards, aiming to create a winning hand, all while enjoying the laid-back atmosphere of a beachfront casino. Will you hold a Royal Flush and claim the ultimate Caribbean fortune? With the added excitement of a progressive jackpot, Caribbean Stud Poker brings the allure of the islands to your casino experience. So, grab a cocktail, soak in the sunshine, and try your luck in this thrilling poker variant with a Caribbean flair",
    url: "https://sgaming.netlify.app/caribbean_stud_poker/",
    features: [
      "Realistic Caribbean Setting",
      "Progressive Jackpot",
      "Multiplayer Mode",
      "Strategy Guides and Tips",
      "Side Bets and Bonus Features",
    ],
    info: [
      {
        RTP: "94.78%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.1/300",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/ch53RK7IcsQ?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Craps",
    subTitle: "3D version of Craps Casino Game!",
    imgMain: crapsBig,
    imgSmall: crapsSmall,
    imgMore: [crapsBig, crapsImg1, crapsImg3, crapsImg2],
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
    info: [
      {
        RTP: "98.64%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "1/100",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: true,
    video:
      "https://www.youtube.com/embed/FAajXAuUcVA?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Crazy Monkey",
    imgMain: crazyMonkeyBig,
    imgSmall: crazyMonkeySmall,
    imgMore: [
      crazyMonkeyImg1,
      crazyMonkeyImg2,
      crazyMonkeyImg3,
      crazyMonkeyImg4,
    ],
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
    info: [
      {
        RTP: "97%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "1/Max",
      },
    ],
    desc: "Get ready for some wild jungle action in Crazy Monkey Scatter, a thrilling casino game that's full of adventure! Venture deep into the heart of the tropical rainforest and join our playful primate friend on a quest for treasures. Spin the reels and encounter bananas, coconuts, and cheeky monkeys on your journey. But watch out for the Crazy Monkey Scatter symbol – when it appears, it triggers a frenzy of excitement with free spins and bonus features that can lead to incredible payouts. Whether you're a seasoned slot enthusiast or just looking for a fun and vibrant game, Crazy Monkey Scatter offers non-stop entertainment and the chance to swing from the trees with a bundle of winnings!",
    platforms: ["PC", "iOS", "Android"],
    featured: true,
    video:
      "https://www.youtube.com/embed/7IW3lbJMymI?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Harness Racing",
    imgMain: harnessBig,
    imgSmall: harnessSmall,
    imgMore: [harnessBig, harnessImg1, harnessImg2],
    subTitle:
      "Only your intuition is missing! Take a look at the odds and make your wager!",
    url: "https://sgaming.netlify.app/harness_racing/",
    category: ["Sports"],
    features: [
      "Realistic Graphics and Animation",
      "Variety of Betting Options",
      "Detailed Track and Weather Conditions",
      "Multiplayer Tournaments",
      "Progressive Jackpot",
    ],
    info: [
      {
        RTP: "98%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "1/100",
      },
    ],
    desc: "Experience the thrill of the racetrack in our Harness Racing game! Step into the world of high-speed, high-stakes horse racing where finely tuned trotters and pacers compete for victory. Place your bets and watch as these remarkable equine athletes speed around the track, guided by skilled drivers in their sulkies. Will your chosen horse outpace the competition and cross the finish line first? With the excitement of live commentary and the potential for impressive payouts, Harness Racing delivers the excitement of the racetrack right to your casino experience. Whether you're a racing aficionado or simply seeking heart-pounding action, Harness Racing promises an exhilarating ride for both newcomers and seasoned bettors.",
    platforms: ["PC", "iOS", "Android"],
    featured: true,
    video:
      "https://www.youtube.com/embed/QKOp_e93Eaw?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Keno",
    imgMain: kenoBig,
    imgSmall: kenoSmall,
    imgMore: [kenoBig, kenoImg1, kenoImg2],
    subTitle: "Keno Casino Game",
    url: "https://sgaming.netlify.app/keno/",
    category: ["Tables"],
    desc: "Try your luck and test your intuition with our Keno game! This fast-paced and easy-to-play casino classic offers a unique blend of lottery-style excitement and strategic betting. Select your lucky numbers from the grid, place your bets, and watch as the numbers are drawn. Will your chosen numbers match the winning ones? With the potential for substantial payouts, Keno is all about anticipation and the thrill of seeing your picks come up lucky. Whether you're a seasoned Keno enthusiast or a newcomer to the game, the simple rules and the chance to win big make Keno a fantastic choice for those seeking a fun and suspenseful casino experience.",
    features: [
      "User-Friendly Interface",
      "Quick Pick Option",
      "Auto-Play Feature",
      "Multi-platform Compatibility",
      "Real-time Draw Simulation",
    ],
    info: [
      {
        RTP: "94%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "1/5",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/3w-RTO4P8LQ?si=VQFFuFyHEk22kY8U?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Mummy",
    imgMain: mummyBig,
    imgSmall: mummySmall,
    imgMore: [
      mummyBig,
      mummyImg1,
      mummyImg2,
      mummyImg3,
      mummyImg4,
      mummyImg5,
      mummyImg6,
    ],
    subTitle: "Try to win as much cash",
    url: "https://sgaming.netlify.app/mummy/",
    category: ["Slots"],
    features: [
      "Egyptian Theme",
      "Wild Mummy Symbol",
      "Autoplay Option",
      "Mummy Bonus Rounds",
      "Achievements and Rewards",
    ],
    info: [
      {
        RTP: "97%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "20/400",
      },
    ],
    desc: "Embark on an ancient adventure with our Mummy Slot game! Journey back in time to the mystical world of pharaohs, pyramids, and hidden treasures. Spin the reels adorned with hieroglyphics, scarab beetles, and mysterious mummies as you uncover the secrets of the past. With each spin, you have the chance to unearth incredible riches, including jackpots that rival the treasures of the Egyptian tombs. Whether you're an archaeology enthusiast or simply seeking spine-tingling thrills, Mummy Slot offers an unforgettable casino experience filled with ancient mystique and the potential for dazzling wins. So, grab your torch, explore the ancient chambers, and let the Mummy Slot take you on an adventure of a lifetime!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/RpvUsbTOnq8?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Olympus Keno",
    imgMain: okenoBig,
    imgSmall: olympusKenoSmall,
    imgMore: [okenoBig, okenoImg, okenoImg1],
    subTitle: "Pick your lucky numbers and hope in the goodwill of Zeus!",
    url: "https://sgaming.netlify.app/olympus_keno/",
    category: ["Tables"],
    desc: "Ascend to the realm of the gods and try your luck in Olympus Keno! This divine twist on the classic Keno game transports you to the majestic world of Greek mythology, where gods and heroes reside. Select your lucky numbers from the divine grid, make your wagers, and watch as the heavenly numbers are revealed. Will the gods favor you with winning combinations? With the chance for epic payouts and a touch of mythical magic, Olympus Keno offers a gaming experience that's both thrilling and enchanting. Whether you're a fan of ancient legends or simply seeking celestial entertainment, Olympus Keno promises an extraordinary casino adventure that will have you feeling like a true Olympian!",
    features: [
      "Mythical Theme",
      "Variety of Betting Options",
      "Olympian Bonus Rounds",
      "Achievements and Rewards",
      "Mythical Symbols",
    ],
    info: [
      {
        RTP: "95%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.1/5",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: false,
  },
  {
    id: uuidv4(),
    title: "Roulette Royale",
    imgMain: rrBig,
    imgSmall: rouletteRoyaleSmall,
    imgMore: [rrBig, rrImg, rrImg2],
    subTitle: "Roulette Royale Casino Game",
    url: "https://sgaming.netlify.app/roulette_royale/",
    category: ["Casino"],
    desc: "Step into the opulent world of Roulette Royale, where elegance meets excitement! This sophisticated casino game puts a regal twist on the classic game of roulette. Place your bets on the iconic red and black wheel, and watch as the glittering ball determines your fate. What sets Roulette Royale apart is the chance to win a massive progressive jackpot that keeps growing with each spin, adding an extra layer of thrill and anticipation to your gameplay. Whether you're a seasoned roulette enthusiast or a newcomer to the wheel, Roulette Royale offers the allure of high-class gaming and the potential for a life-changing win. Join us at the table, and let the wheel of fortune spin in your favor!",
    features: [
      "Progressive Jackpot",
      "Realistic Graphics and Animations",
      "Multiple Roulette Variations",
      "Special Bets and Call Bets",
      "Responsible Gaming Features",
    ],
    info: [
      {
        RTP: "98.5%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.1/1000",
      },
    ],
    platforms: ["PC", "iOS", "Android"],
    featured: true,
    video:
      "https://www.youtube.com/embed/TT7Lzppritw?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "Royal Slot",
    imgMain: rsBig,
    imgSmall: royalSlotSmall,
    imgMore: [rsBig, rsImg],
    subTitle: "Royal Slot Casino Game",
    url: "https://sgaming.netlify.app/royalSlot/",
    category: ["Slots"],
    features: [
      "Regal Theme",
      "Progressive Jackpot",
      "Auto-Spin and Turbo Mode",
      "Royal Reel Respins",
      "Responsible Gaming Features",
    ],
    info: [
      {
        RTP: "97.5%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "1/20",
      },
    ],
    desc: "Enter a world of regal elegance and opulent riches with our Royal Slot game! This majestic slot machine transports you to a palace of wealth and luxury, where crowns, jewels, and treasures await. Spin the royal reels adorned with symbols of grandeur as you chase the dream of hitting that coveted royal combination. With each spin, you have the chance to experience the thrill of a royal win, fit for a king or queen. Whether you're a slot enthusiast or simply seeking a taste of the high life, Royal Slot promises a gaming experience that's both grand and rewarding. So, prepare to be treated like royalty and try your luck in this exquisite and regal casino adventure!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
  },
  // {
  //   id: uuidv4(),
  //   title: "Katana Fruits",
  //   img: "img/katana.jpg",
  //   category: ["Slots"],
  //   subTitle: "Are you ready for a new slot experience?",
  //   url: "https://sgaming.netlify.app/slot_katana_fruits/",
  //   features: [
  //     "Samurai Fruit Theme",
  //     "Fruit Slot Mechanics",
  //     "Samurai Bonus Rounds",
  //     "Progressive Jackpot",
  //     "Achievements and Rewards",
  //   ],
  //   desc: "Unleash your inner ninja and master the art of slicing in Katana Fruits! This action-packed casino game combines the thrill of slots with the precision of a martial artist. Swipe your way through a whirlwind of juicy fruits with your virtual katana, aiming to slice and dice your way to fantastic prizes. Watch out for special power-ups and bonus rounds that can multiply your winnings. Whether you're a fruit ninja pro or just seeking fast-paced casino fun, Katana Fruits offers a slicing good time and the chance to enjoy the fruits of your labor with impressive payouts. So, sharpen your skills, grab your katana, and prepare for a fruit-slashing adventure like no other!",
  //   platforms: ["PC", "iOS", "Android"],
  //   featured: false,
  // },
  {
    id: uuidv4(),
    title: "Space Adventure",
    imgMain: saBg,
    imgSmall: spaceSmall,
    imgMore: [saBg, saImg1, saImg2, saImg3, saImg4],
    subTitle: "Space Adventure Casino Game",
    category: ["Slots"],
    url: "https://sgaming.netlify.app/slot_space_adventure/",
    features: [
      "Galactic Theme",
      "Space Explorer Bonus Rounds",
      "Progressive Jackpot",
      "Alien Wild Symbols",
      "Scatter Spaceships",
    ],
    info: [
      {
        RTP: "98.5%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.50/2.50",
      },
    ],
    desc: "Embark on an epic Space Adventure in this out-of-this-world casino game! Launch into the cosmos and explore the vastness of the universe as you spin the reels adorned with futuristic spaceships, mysterious planets, and cosmic treasures. Navigate through asteroid fields and wormholes to uncover incredible bonuses and extraterrestrial rewards. With every spin, you're one step closer to discovering the secrets of the galaxy and winning cosmic-sized prizes. Whether you're an interstellar explorer or just seeking thrilling casino action, Space Adventure promises an astronomical gaming experience that's truly stellar. So, suit up, strap in, and prepare to take your casino journey to new frontiers!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/DlutWt72X90?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
  {
    id: uuidv4(),
    title: "The Fruits",
    imgMain: fruitsBg,
    imgSmall: fruitsSmall,
    imgMore: [fruitsBg, fruitsImg1, fruitsImg2],
    subTitle: "Slot Machine – The Fruits",
    category: ["Slots"],
    url: "https://sgaming.netlify.app/slot_the_fruits/",
    features: [
      "Classic Fruit Theme",
      "Fruit Slot Mechanics",
      "Progressive Jackpot",
      "Wild Fruit Symbol",
      "Scatter Fruit Basket",
    ],
    info: [
      {
        RTP: "96.31%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.50/10",
      },
    ],
    desc: "Experience a burst of fruity fun with The Fruits Slots! This colorful and vibrant slot machine game takes you to an orchard of excitement, where juicy fruits spin across the reels in a whirlwind of flavor. Match fruits like cherries, oranges, and watermelons to create winning combinations and enjoy delicious payouts. With each spin, you're in for a fruity surprise, as you chase the ultimate fruit salad of prizes. Whether you're a slot aficionado or just looking for a taste of fruity fortune, The Fruits Slots offers a refreshing and delightful casino experience that will have you craving more. So, grab a virtual fruit basket and spin the reels for a sweet and juicy adventure!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video: "/src/assets/video/the_fruits.mp4",
  },
  {
    id: uuidv4(),
    title: "The Gold Pot",
    imgMain: potBig,
    imgSmall: potSmall,
    imgMore: [
      potBig,
      potImg1,
      potImg2,
      potImg3,
      potImg4,
      potImg5,
      potImg6,
      potImg7,
    ],
    subTitle: "This lucky leprechaun has in store many surprises for you!",
    url: "https://sgaming.netlify.app/slot_the_gold_pot/",
    category: ["Slots"],
    features: [
      "Lavish Gold Theme",
      "Classic Slot Mechanics",
      "Progressive Jackpot",
      "Wild Gold Symbol",
      "Scatter Gold Pot",
    ],
    info: [
      {
        RTP: "95.35%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0.05/10",
      },
    ],
    desc: "Unlock the secrets of riches with The Gold Pot, a casino game that promises a journey to wealth and prosperity! Venture deep into a magical realm filled with shimmering treasures, enchanted forests, and the elusive gold pot that could change your fortunes forever. Spin the reels adorned with symbols of wealth and good luck, and aim to strike it rich with each spin. With every turn, you'll get closer to uncovering the hidden gold pot and its bountiful rewards. Whether you're a seasoned treasure hunter or just seeking the thrill of the hunt, The Gold Pot offers a golden opportunity for big wins in a whimsical and enchanting casino adventure!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video: "/src/assets/video/potVideo.mp4",
  },
  {
    id: uuidv4(),
    title: "Ultimate Football",
    imgMain: ufBig,
    imgSmall: ufSmall,
    imgMore: [
      ufBig,
      ufImg1,
      ufImg2,
      ufImg3,
      ufImg4,
      ufImg5,
      ufImg6,
      ufImg7,
      ufImg8,
    ],
    category: ["Slots", "Sports"],
    subTitle: "Slot Machine",
    url: "https://sgaming.netlify.app/slot_ultimate_football/",
    features: [
      "Real-Time Football Match Simulation",
      "Football Reel Symbols",
      "Progressive Jackpot",
      "Football Match Bonus Round",
      "Mobile Compatibility",
    ],
    info: [
      {
        RTP: "94%",
      },
      {
        Volatility: "High",
      },
      {
        "Min/Max Bet": "0.05/10",
      },
    ],
    desc: "Get ready for the ultimate touchdown in Ultimate Football Slots! Step onto the virtual field and experience the thrill of the game with this action-packed slot machine. Spin the reels adorned with footballs, helmets, and cheerleaders as you aim to score big. Watch for special bonus symbols that can trigger exciting features and free spins, giving you a chance to win like a true MVP. Whether you're a devoted football fan or just seeking some high-energy casino action, Ultimate Football Slots delivers a winning combination of excitement and potential for big rewards. So, strap on your virtual cleats and get ready to tackle your way to victory in this game of gridiron glory!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video: "/src/assets/video/ufVideo.mp4",
  },
  {
    id: uuidv4(),
    title: "Wheel of Fortune",
    imgMain: wfBig,
    imgSmall: wfSmall,
    imgMore: [wfBig, wfImg1, wfImg2],
    subTitle: "Wheel of Fortune Gambling Game",
    category: ["Tables"],
    url: "https://sgaming.netlify.app/wheel_of_fortune/",
    features: [
      "Real-Time Football Match Simulation",
      "Football Reel Symbols",
      "Progressive Jackpot",
      "Football Match Bonus Round",
      "Mobile Compatibility",
    ],
    info: [
      {
        RTP: "98.5%",
      },
      {
        Volatility: "Medium",
      },
      {
        "Min/Max Bet": "0/100",
      },
    ],
    desc: "Take a spin on the Wheel of Fortune tables and unleash your luck! Inspired by the iconic TV game show, these tables offer a chance to test your fortune and intuition. Place your bets on various outcomes and watch as the colorful wheel spins, creating moments of suspense and excitement. Will you land on a big win or trigger a thrilling bonus round? With the anticipation of the spinning wheel and the potential for incredible payouts, the Wheel of Fortune tables provide an electrifying and engaging casino experience that's bound to keep you on the edge of your seat. Come and give the wheel a whirl, and see if fortune smiles upon you!",
    platforms: ["PC", "iOS", "Android"],
    featured: false,
    video:
      "https://www.youtube.com/embed/1GVr8lewL30?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1",
  },
];

dataGames.forEach((game) => {
  game.path = game.title.toLowerCase().replace(/\s+/g, "-");
});

/* prettier-ignore */
export const categoryIcons = {
	sports: (<MdSportsSoccer key="sport" size={25} />),
	slots: (<IconsSlot key="slot" size={27} />),
	casino: (<IconsCasino key="casino" size={38} />),
	tables: (<IconsTable key="table" size={35} />),
	crypto: (<RiNftLine key="crypto" size={27} />),
};

export const featuredGames = dataGames.filter((game) => game.featured === true);

export const allCategoriesGames = Array.from(
  dataGames.reduce((categories, game) => {
    game.category.forEach((category) => {
      categories.add(category);
    });
    return categories;
  }, new Set())
);

allCategoriesGames.unshift("All Games");

// export { allCategoriesGames };
