import s from "./stylesExpanded.module.css";

export const Header = ({ setExpandedId }) => {
  return (
    <header className={s.header}>
      <img
        src="/images/weare-logo.png"
        alt="we are a building-u blog"
        className={s.logo4}
      />
      <div>
        <img
          src="/images/btn_previous.png"
          className={s.logo3}
          onClick={() => setExpandedId(null)} // <-- Go back to Blog
          style={{ cursor: "pointer" }}
          alt="previous"
        />
        <img
          src="/images/btn_go-back.png"
          alt="blog and beyond"
          className={s.logo2}
        />
        <img
          src="/images/btn_06-signup.png"
          alt="sign in"
          className={s.logo3}
        />
      </div>
    </header>
  );
};
