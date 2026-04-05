import { useState } from "react";
import { Layout } from "../../components/layout";
import Blog from "./Blog";
import BlogExpanded from "./BlogExpanded";
import { Header as HeaderDefault } from "./Header";
import { Header as HeaderExpanded } from "./HeaderExpanded";
import s from "./styles.module.css";

const BlogAndBeyond = () => {
  const [isExploring, setIsExploring] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  if (isExploring) {
    const HeaderComponent = expandedId
      ? () => <HeaderExpanded setExpandedId={setExpandedId} />
      : HeaderDefault;

    return (
      <Layout Header={HeaderComponent}>
        {expandedId ? (
          <BlogExpanded expandedId={expandedId} setExpandedId={setExpandedId} />
        ) : (
          <Blog setIsExpanded={setExpandedId} />
        )}
      </Layout>
    );
  }

  return (
    <Layout showFooter={false}>
      <section className={s.bandbSection} id="blogSection">
        {/* Desktop Section */}
        <div className={s.bandbDesktop}>
          <div className={s.bandbTitle}>
            <p className={s.bandbTitleText}>Blog & Beyond</p>
            <hr className={s.bandbTitleLine} />
          </div>
          <div className={s.bandbContents}>
            <div className={s.bandbIconsWrapper}>
              <button className={s.iconBtn} onClick={() => setIsExploring(true)}>
                <img src="/images/btn_01-blog.png" alt="blog" className={s.bandbIcons} />
              </button>
              <a href="https://www.youtube.com/@building-u" target="_blank" rel="noreferrer">
                <img src="/images/btn_02-youtube.png" alt="youtube" className={s.bandbIcons} />
              </a>
              <a href="https://open.spotify.com/user/building-u" target="_blank" rel="noreferrer">
                <img src="/images/btn_03-spotify.png" alt="spotify" className={s.bandbIcons} />
              </a>
            </div>
            <div className={s.bandbGoatContainer}>
              <div className={s.bandbGoatText}>
                <p className={s.bandbTextboxText}>
                  We must write stuff about blog and channels of communication
                </p>
              </div>
            </div>
          </div>
          <div className={s.bandbBg}></div>
        </div>

        {/* Mobile Section */}
        <div className={s.bandbMobile}>
          <div className={s.BlogPhoneBar}>
            <img
              src="/images/btn_02-blog.png"
              alt="BuildingU Logo"
              className={s.BlogBarLogo}
            />
          </div>
          <div className={s.bandbPhoneBar}>
            <img
              src="/images/btn_01-blog.png"
              alt="blog"
              className={s.bandbChoice}
              onClick={() => setIsExploring(true)}
              style={{ cursor: 'pointer' }}
            />
            <a href="https://www.youtube.com/@building-u" target="_blank" rel="noreferrer" style={{ display: 'contents' }}>
              <img
                src="/images/btn_02-youtube.png"
                alt="youtube"
                className={s.bandbChoice}
              />
            </a>
            <a href="https://open.spotify.com/user/building-u" target="_blank" rel="noreferrer" style={{ display: 'contents' }}>
              <img
                src="/images/btn_03-spotify.png"
                alt="spotify"
                className={s.bandbChoice}
              />
            </a>
          </div>
          <div className={s.bandbGreen}>
            <p className={s.bandbGreenText}>
              We must write stuff about blog and channels.
            </p>
            <img src="/images/goat.png" alt="goat" className={s.bandbGreenGoat} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogAndBeyond;