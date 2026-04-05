import { Link, useLocation } from "react-router-dom";
import s from "./styles.module.css";

const navItems = [
  {
    path: "/resources",
    img: "/images/btn_01-resources.png",
    alt: "Resources"
  },
  {
    path: "/blog",
    img: "/images/btn_02-blog.png",
    alt: "Blog & Beyond"
  },
  {
    path: "/lets-talk",
    img: "/images/btn_03-lets.png",
    alt: "Let's Talk"
  },
  {
    path: "/", // Or wherever Dollars goes
    img: "/images/btn_04-dollars.png",
    alt: "Dollars Thoughts"
  },
  {
    path: "/contribute",
    img: "/images/btn_05-contrib.png",
    alt: "I want to Contribute"
  },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <div className={s.container}>
        
        {/* Logo Section */}
        <Link to="/" className={s.logoLink}>
          <img src="/images/weare-logo.png" alt="Building U" className={s.mainLogo} />
        </Link>
        
        {/* Navigation Section */}
        <nav className={s.navGroup}>
          {navItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path) && item.path !== "/";
            return (
              <Link
                key={index}
                to={item.path}
                className={`${s.navItem} ${isActive ? s.active : ""}`}
              >
                <img src={item.img} alt={item.alt} className={s.navIcon} />
                {/* We rely on the images themselves if they contain the text, 
                    or fall back to accessible text if needed. Based on the mockup, 
                    the icons often have the text embedded. If not, we can add spans.
                */}
              </Link>
            );
          })}
        </nav>
        
        {/* Sign In Button */}
        <div className={s.signInWrapper}>
          <Link to="/signin-signup">
            <img src="/images/btn_06-signup.png" alt="Sign In Up" className={s.signInBtn} />
          </Link>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
