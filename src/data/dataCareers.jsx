import { v4 as uuidv4 } from "uuid";
import { MdDraw } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

const dataCareers = [
  {
    id: uuidv4(),
    title: "Senior React JS Developer",
    area: "React",
    role: "developer",
    term: "Permanent",
    types: "Full time",
    location: "Yerevan",
    icon: <HiOutlineCode size={28} color="#0ef0ad" />,
    level: "Senior",
    respons: [
      "Develop new user-facing features using React.js",
      "Build reusable components and front-end libraries for future use",
      "Translate designs and wireframes into high-quality code",
      "Construct visualizations that are able to depict vast amounts of data",
      "Develop a flexible and well-structured front-end architecture",
      "Develop new components and features",
      "Document and refactor our frontend codebase",
    ],
    qual: [
      "Bachelors’ degree in Computer Science or any related field",
      "At least 3 years of experience working with JavaScript, preferably React.js",
      "Knowledge of Pure JS (ES5,6,7), React.js (up to current version)",
      "Knowledge of React Reconciliation algorithm",
      "Experience with Git",
      "Experience with state management tools (Redux, MobX)",
      "Experience with bundlers (Webpack, Rollup, etc.)",
    ],
  },
  {
    id: uuidv4(),
    title: "Senior UI/UX designer",
    area: "UI/UX",
    role: "designer",
    term: "Permanent",
    types: "Full time",
    location: "Yerevan",
    icon: <MdDraw size={28} color="#0ef0ad" />,
    level: "Senior",
    respons: [
      "Create visually stunning and intuitive user interfaces that align with the company's brand identity",
      "Conduct in-depth research to understand user behavior, needs, and pain points, ensuring user-centric design solutions",
      "Work closely with cross-functional teams, including product managers, developers, and other designers, to align design objectives with project goals",
      "Utilize design systems to maintain consistency and efficiency across multiple projects",
      "Develop wireframes, mockups, and prototypes to visualize design concepts",
      "Explore new design trends and techniques to enhance UI/UX deliverables",
      "Propose non-standard design solutions that add value to user interactions",
      "Provide regular updates on the progress of tasks and projects to ensure timely completion",
    ],
    qual: [
      "Education in Graphic Design, Interaction Design, Human-Computer Interaction, or a related field",
      "4+ years of experience in UI/UX Design/Produc Design",
      "Proficiency in design tools such as Sketch, Adobe XD, Figma, or InVision",
      "Creative mindset and the ability to think outside the box to provide unique design solutions",
      "Strong understanding of user-centered design principles and practices",
      "Excellent communication and collaboration skills to work effectively in a cross-functional team",
      "Basic understanding of front-end technologies like HTML, CSS, and JavaScript is a plus",
    ],
  },
];

dataCareers.forEach((careers) => {
  careers.path = careers.title.toLowerCase().replace(/\s+/g, "-");
});

export { dataCareers };
