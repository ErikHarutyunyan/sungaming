import { Link } from "react-router-dom";
import fav from "../../assets/img/fav.webp";
import logo from "../../assets/img/logo-text.webp";
import {
  GAMES,
  HOME,
  ABOUT,
  SERVICES,
  NEWS,
  CONTACT,
} from "../../router/route-path";

export const Header = () => {
  return (
    <header className="header-section header-menu false">
      <nav className="navbar w-100 flex-nowrap px-2 py-6 ps-2 navbar-expand-xl">
        <div className="sidebar-close mobile-menu">
          <button className="d-center d-grid d-xl-none">
            <i className="material-symbols-outlined mat-icon fs-four">
              {" "}
              menu_open{" "}
            </i>
            <span className="fs-six">MENU</span>
          </button>
        </div>
        {/* <a
          className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-center gap-2"
          href="/">
          <img
            alt="logo"
            loading="lazy"
            width="42"
            height="27"
            decoding="async"
            data-nimg="1"
            className="logo"
            src={fav}
          />
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
        </a> */}
        <div
          className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2"
          id="navbar-content">
          <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 m-auto pe-20 align-self-center">
            <li>
              <Link to={HOME}>Home</Link>
            </li>
            <li>
              <Link to={GAMES}>Games</Link>
            </li>
            <li>
              <Link to={SERVICES}>Services</Link>
            </li>
            <li>
              <Link to={ABOUT}>About Us</Link>
            </li>
            <li>
              <Link to={NEWS}>News</Link>
            </li>
            <li>
              <Link to={CONTACT}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
