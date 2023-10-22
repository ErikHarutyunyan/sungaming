import "./Sidebar.css";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  GAMES,
  HOME,
  ABOUT,
  SERVICES,
  NEWS,
  CONTACT,
  CAREERS,
} from "../../router/route-path";

import logoSidebar from "../../assets/img/sungamin512.png";

const Sidebar = ({ sideBar = false, showHideSidebar = () => {} }) => {
  return (
    <>
      {sideBar && <div className="bg-blur" />}
      <AnimatePresence>
        {sideBar && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className={"sidebar_aside"}>
            <div className={"sidebar_wrapper"}>
              <img
                src={logoSidebar}
                className="logoSidebar"
                alt="logoSidebar"
                fetchPriority="high"
              />
              <ul className="navbar-nav gap-4 py-4 py-lg-0 align-self-center ">
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.72,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={HOME}>
                    Home
                  </NavLink>
                </motion.li>
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.73,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={GAMES}>
                    Games
                  </NavLink>
                </motion.li>
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.74,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={SERVICES}>
                    Services
                  </NavLink>
                </motion.li>
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.76,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={ABOUT}>
                    About Us
                  </NavLink>
                </motion.li>
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.8,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={NEWS}>
                    News
                  </NavLink>
                </motion.li>
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 1,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={CONTACT}>
                    Contact
                  </NavLink>
                </motion.li>
                <motion.li
                  onClick={showHideSidebar}
                  initial={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 1.2,
                      x: { stiffness: 5000, velocity: -100 },
                    },
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                      x: { stiffness: 1000, velocity: -100 },
                    },
                  }}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active fs-two" : "inactive fs-two"
                    }
                    to={CAREERS}>
                    Careers
                  </NavLink>
                </motion.li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
export default Sidebar;
