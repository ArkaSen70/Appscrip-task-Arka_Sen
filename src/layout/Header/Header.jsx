import Image from "next/image";
import "./Header.css";
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X } from "@/lib/icons";

const NAV_LINKS = [
  { label: "SHOP", href: "/shop" },
  { label: "SKILLS", href: "/skills" },
  { label: "STORIES", href: "/stories" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

const BREADCRUMBS = [
  { label: "HOME", href: "/" },
  { label: "SHOP", href: "/shop" },
];



const SearchIcon = () => (
  <Search size={20} strokeWidth={1.8} aria-hidden="true" />
);

const WishlistIcon = () => (
  <Heart size={20} strokeWidth={1.8} aria-hidden="true" />
);

const CartIcon = () => (
  <ShoppingBag size={20} strokeWidth={1.8} aria-hidden="true" />
);

const AccountIcon = () => (
  <User size={20} strokeWidth={1.8} aria-hidden="true" />
);

const ChevronDownIcon = () => (
  <ChevronDown size={12} strokeWidth={2.5} aria-hidden="true" />
);

const HamburgerIcon = () => (
  <Menu size={22} strokeWidth={2} aria-hidden="true" />
);

const CloseIcon = () => (
  <X size={22} strokeWidth={2} aria-hidden="true" />
);



export default function Header() {
  return (
    <>
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="header_menu-toggle"
        aria-hidden="true"
      />

      <header className="header" role="banner">
        <div className="header_inner">

          <div className="header_topbar">

            <div className="header_left">
              <label
                htmlFor="mobile-menu-toggle"
                className="header_hamburger"
                aria-label="Open navigation menu"
                role="button"
                tabIndex={0}
              >
                <span className="header_hamburger-open"><HamburgerIcon /></span>
                <span className="header_hamburger-close"><CloseIcon /></span>
              </label>
              <a href="/" aria-label="mettā muse home" className="header_logomark-link">
                <Image src="/Logo.svg" alt="" width={36} height={36} aria-hidden="true" />
              </a>
            </div>

            <div className="header_center">
              <a href="/" className="header_wordmark" aria-label="mettā muse">
                LOGO
              </a>
            </div>

            <div className="header_right">
              <nav className="header_actions" aria-label="Site actions">
                <a href="/search" className="header_action-btn" aria-label="Search">
                  <SearchIcon />
                </a>
                <a href="/wishlist" className="header_action-btn" aria-label="Wishlist">
                  <WishlistIcon />
                </a>
                <a href="/cart" className="header_action-btn" aria-label="Shopping cart">
                  <CartIcon />
                </a>
                <a href="/account" className="header_action-btn header_action-btn-desktop" aria-label="My account">
                  <AccountIcon />
                </a>
              </nav>

              <div className="header_lang header_lang-desktop">
                <button
                  type="button"
                  className="header_lang-btn"
                  aria-label="Select language, current: English"
                  aria-haspopup="listbox"
                >
                  <span>ENG</span>
                  <ChevronDownIcon />
                </button>
              </div>
            </div>

          </div>

          <nav className="header_nav" aria-label="Main navigation">
            <ul className="header_nav-list" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="header_nav-item" role="listitem">
                  <a href={link.href} className="header_nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <nav className="header_breadcrumb" aria-label="Breadcrumb">
          <ol className="header_breadcrumb-list" role="list">
            {BREADCRUMBS.map((crumb, index) => (
              <li key={crumb.href} className="header_breadcrumb-item" role="listitem">
                {index > 0 && (
                  <span className="header_breadcrumb-sep" aria-hidden="true">|</span>
                )}
                <a
                  href={crumb.href}
                  className={`header_breadcrumb-link${index === BREADCRUMBS.length - 1 ? " header_breadcrumb-link-current" : " header_breadcrumb-link-ancestor"}`}
                  aria-current={index === BREADCRUMBS.length - 1 ? "page" : undefined}
                >
                  {crumb.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      <div className="header_drawer">
        <nav aria-label="Mobile navigation">
          <ul className="header_drawer-list" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="header_drawer-item" role="listitem">
                <a href={link.href} className="header_drawer-link">{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="header_drawer-lang">
            <button type="button" className="header_drawer-lang-btn" aria-label="Select language">
              <span>ENG</span>
              <ChevronDownIcon />
            </button>
          </div>
        </nav>
      </div>

      <label
        htmlFor="mobile-menu-toggle"
        className="header_overlay"
        aria-hidden="true"
      ></label>
    </>
  );
}
