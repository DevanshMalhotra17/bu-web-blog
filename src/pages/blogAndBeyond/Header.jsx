import s from "./styles.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="/images/weare-logo.png"
        alt="we are a building-u blog"
        className={s.logo4}
      />
      <div>
        <img
          src="/images/btn_go-back.png"
          alt="blog and beyond"
          className={s.logo2}
        />
        <img src="/images/btn_06-signup.png" alt="sign in" className={s.logo3} />
      </div>
    </header>
  )
}