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
import { useEffect, useState } from "react";
import { logo } from "../Images";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
    <header
      className={`header-section header-menu ${isSticky ? "sticky" : ""}`}>
      <nav
        className={`navbar w-100 flex-nowrap px-2  ps-2 navbar-expand-xl ${
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
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={HOME}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={GAMES}>
                Games
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={SERVICES}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={ABOUT}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={NEWS}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={CONTACT}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
