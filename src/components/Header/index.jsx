import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import {
  GAMES,
  HOME,
  ABOUT,
  SERVICES,
  NEWS,
  CONTACT,
} from "../../router/route-path";
import { useEffect, useState, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { logo } from "../Images";
import { useDimensions } from "../../hooks/use-dimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    width: "100%",
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);
const variants = {
  open: {
    with: "100%",
    height: "100%",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


const variantsNav = {
  open: {
    with: "100%",
    height: "100%",
  },
  closed: {
    with: "300px",
  },
};

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header-section header-menu ${isSticky ? "sticky" : ""}`}>
        <motion.nav
          initial={false}
          variants={variantsNav}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="nav-mobile">
          <motion.div className="background" variants={sidebar} />
          <motion.ul variants={variants}>
            <motion.li
              variants={variantsLi}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={HOME}>
                Home
              </NavLink>
            </motion.li>
          </motion.ul>
          <button onClick={toggleOpen}>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                stroke="#0aa879"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                stroke="#0aa879"
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                stroke="#0aa879"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </motion.nav>

        <nav
          className={`nav-desktop navbar w-100 flex-nowrap px-2  ps-2 navbar-expand-xl ${
            isSticky ? "py-4" : "py-6"
          }`}>
          <div className="sidebar-close mobile-menu">
            <button className="d-center d-grid d-xl-none">
              <i className="material-symbols-outlined mat-icon fs-four">
                {" "}
                menu_open{" "}
              </i>
              <span className="fs-six">MENU</span>
            </button>
          </div>
          <Link
            className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-center gap-2"
            to={HOME}>
            {/* <img
            alt="logo"
            loading="lazy"
            width="42"
            height="27"
            decoding="async"
            data-nimg="1"
            className="logo"
            src={logo}
          /> */}
            <img
              src={logo}
              alt="logo-text"
              loading="lazy"
              width="122"
              height="23"
              decoding="async"
              data-nimg="1"
              className="logo-text d-xxl-block d-none"
            />
          </Link>
          <div
            className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2"
            id="navbar-content">
            <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 m-auto pe-20 align-self-center">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={HOME}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={GAMES}>
                  Games
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={SERVICES}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={ABOUT}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={NEWS}>
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to={CONTACT}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
