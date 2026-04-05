import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import s from "./styles.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const headerHeight = window.innerHeight * 0.15;
    const yOffset = -headerHeight;

    window.scrollTo({
      top: section.offsetTop + yOffset,
      behavior: "smooth",
    });
    closeMobileMenu();
  }

  const navItems = [
    { id: "resourcesSection", img: "/images/btn_01-resources.png", alt: "Resources" },
    { id: "contributeSection", img: "/images/btn_05-contrib.png", alt: "Contribute" },
    { id: "s4ytSection", img: "/images/btn_04-dollars.png", alt: "Dollars" },
    { id: "blogSection", img: "/images/btn_02-blog.png", alt: "Blog & Beyond" },
    { id: "talkSection", img: "/images/btn_03-lets.png", alt: "Let's Talk" },
    { id: "signupSection", img: "/images/btn_06-signup.png", alt: "Sign Up" },
  ];

  return (
    <header className={s.header}>
      <nav className={s.navLinksWrapper}>
        <div className={s.headerLogo}>
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/images/weare-logo.png" alt="logo" className={s.logoImg} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`${s.navLinks} ${s.desktopNav}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={s.headerButton}
              onClick={() => scrollToSection(item.id)}
            >
              <img src={item.img} alt={item.alt} className={s.navButtonImg} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className={s.menuIcon} onClick={toggleMobileMenu}>
          <img src={isMobileMenuOpen ? "/images/beyond.png" : "/images/beyond.png"} alt="menu" className={s.menuToggleImg} />
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className={`${s.mobileOffcanvas} ${isMobileMenuOpen ? s.offcanvasOpen : ""}`}>
        {/* Backdrop */}
        <div
          className={`${s.offcanvasBackdrop} ${isMobileMenuOpen ? s.backdropShow : ""}`}
          onClick={closeMobileMenu}
        ></div>

        {/* Offcanvas Panel */}
        <div className={`${s.offcanvasPanel} ${isMobileMenuOpen ? s.panelShow : ""}`}>
          <div className={s.offcanvasHeader}>
            <h3 className={s.offcanvasTitle}>Menu</h3>
            <button className={s.closeButton} onClick={closeMobileMenu}>
              <span>&times;</span>
            </button>
          </div>

          <div className={s.offcanvasBody}>
            <div className={s.mobileNavLinks}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={s.mobileHeaderButton}
                  onClick={() => scrollToSection(item.id)}
                >
                  <img src={item.img} alt={item.alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
