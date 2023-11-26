import { NavLink } from "react-router-dom";
// Lib & Packages
import { AnimatePresence, motion } from "framer-motion";
// Data
import { menuLinks } from "data/dataMenu";

export const Sidebar = ({ sideBar = false, showHideSidebar = (f) => f }) => {
  return (
    <>
      {sideBar ? <div className="bg-blur" /> : null}
      <AnimatePresence>
        {sideBar ? (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className="sidebar_aside"
          >
            <div className="sidebar_wrapper">
              <ul className="navbar-nav gap-4 py-4 py-lg-0 align-self-center ">
                {menuLinks.map((menuItem, index) => {
                  const { id, url, text } = menuItem;
                  const middleIndex = Math.floor(menuLinks.length / 2);
                  const delayTime =
                    middleIndex === index ? index / 70 : index / 50;
                  return (
                    <motion.li
                      key={id}
                      onClick={(e) => showHideSidebar(e, true)}
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
                          delay: 0.7 + delayTime,
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
                      }}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active fs-two" : "inactive fs-two"
                        }
                        to={url}
                      >
                        {text}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
};
