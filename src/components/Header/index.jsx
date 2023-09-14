import fav from '../../assets/img/fav.webp'
import logo from '../../assets/img/logo-text.webp'

export const Header = () => {
  return (
    <header className="header-section header-menu false">
      <nav className="navbar w-100 flex-nowrap px-2 py-6 ps-2 navbar-expand-xl">
        <div className="sidebar-close mobile-menu">
          <button className="d-center d-grid d-xl-none"><i
            className="material-symbols-outlined mat-icon fs-four"> menu_open </i><span
            className="fs-six">MENU</span></button>
        </div>
        <a className="navbar-brand ms-4 ms-xxl-15 d-flex align-items-center gap-2" href="/">
          <img alt="logo" loading="lazy" width="42" height="27" decoding="async" data-nimg="1" className="logo"
               src={fav}/>
          <img src={logo} alt="logo-text" loading="lazy" width="122" height="23" decoding="async" data-nimg="1"
               className="logo-text d-xxl-block d-none"/>
        </a>
        <div className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-2" id="navbar-content">
          <ul className="navbar-nav d-xl-flex d-none gap-3 py-4 py-lg-0 m-auto pe-20 align-self-center">

            <li className="dropdown show-dropdown">
              <button type="button" aria-label="Navbar Dropdown Button"
                      className="dropdown-toggle dropdown-nav false">games
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/game">games</a></li>
                <li><a className="dropdown-item" href="/game-details">games Details</a></li>
              </ul>
            </li>
            <li className="dropdown show-dropdown">
              <button type="button" aria-label="Navbar Dropdown Button"
                      className="dropdown-toggle dropdown-nav false">Services
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/our-services-1">services one</a></li>
                <li><a className="dropdown-item" href="/our-services-2">services two</a></li>
                <li><a className="dropdown-item" href="/our-services-3">services three</a></li>
                <li><a className="dropdown-item" href="/our-services-details">services Details</a></li>
                <li><a className="dropdown-item" href="/our-services-details-2">services Details Two</a></li>
              </ul>
            </li>
            <li><a className="dropdown-nav false" href="/about-us">About</a></li>
            <li className="dropdown show-dropdown">
              <button type="button" aria-label="Navbar Dropdown Button"
                      className="dropdown-toggle dropdown-nav false">Pages
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/pricing-plan">pricing plan</a></li>
                <li><a className="dropdown-item" href="/store">Store</a></li>
                <li className="sub-dropdown">
                  <button type="button" aria-label="Navbar Dropdown Button"
                          className="dropdown-item dropdown-toggle">shop details
                  </button>
                  <ul className="sub sub-menu dropend">
                    <li><a className="dropdown-item" href="/shop-details-1">shop details one</a></li>
                    <li><a className="dropdown-item" href="/shop-details-2">shop details two</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="/cart">Cart</a></li>
                <li><a className="dropdown-item" href="/checkout">checkout</a></li>
                <li className="sub-dropdown">
                  <button type="button" aria-label="Navbar Dropdown Button"
                          className="dropdown-item dropdown-toggle">career
                  </button>
                  <ul className="sub sub-menu dropend">
                    <li><a className="dropdown-item" href="/career">career</a></li>
                    <li><a className="dropdown-item" href="/career-details">career details</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="/privacy-policy">privacy policy</a></li>
                <li><a className="dropdown-item" href="/terms-conditions">terms conditions</a></li>
              </ul>
            </li>
            <li className="dropdown show-dropdown">
              <button type="button" aria-label="Navbar Dropdown Button"
                      className="dropdown-toggle dropdown-nav false">news
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/blog">blog</a></li>
                <li><a className="dropdown-item" href="/blog-single">blog Details</a></li>
              </ul>
            </li>
            <li><a className="dropdown-item false" href="/contact">Contact</a></li>
          </ul>

        </div>
      </nav>
    </header>
  )
}
