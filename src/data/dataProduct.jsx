import {
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdOutlinePhone,
  MdSchedule,
} from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line no-param-reassign
export const dataOffice = [
  {
    id: uuidv4(),
    text: "Office",
    mainText: "Yerevan",
    subText: ["Armenia"],
    icon: (
      <MdOutlineLocationOn size={22} className="material-symbols-outlined" />
    ),
  },
  {
    id: uuidv4(),
    text: "Email Address",
    mainText: null,
    subText: ["01sungaming33@gmail.com"],
    icon: (
      <MdOutlineMailOutline size={22} className="material-symbols-outlined" />
    ),
  },
  {
    id: uuidv4(),
    text: "Phone Number",
    mainText: null,
    subText: ["(374) 0010033"],
    icon: (<MdOutlinePhone size={22} className="material-symbols-outlined" />),
  },
  {
    id: uuidv4(),
    text: "Working Hours",
    mainText: null,
    subText: ["Mon-Fri: 09:00 - 18:00 Sat-Sun: Weekend"],
    icon: (<MdSchedule size={22} className="material-symbols-outlined" />),
  },
];

export const dataSocial = {
  facebook: {
    url: "https://www.facebook.com",
  },
  instagram: {
    url: "https://www.instagram.com",
  },
  linkedin: {
    url: "https://www.linkedin.com",
  },
};
