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
      <div className={`${s.container} ${s.splitLayout}`}>
        {/* Left Side: Magenta */}
        <div className={s.leftSide}>
          <div className={s.contentWrapper}>
            <h1 className={s.title}>Blog & Beyond</h1>
            <hr className={s.divider} />
            <div className={s.buttonsGroup}>
              <button 
                className={s.buttonWrap} 
                onClick={() => setIsExploring(true)}
              >
                <img src="/images/btn_01-blog.png" alt="Blog" className={s.iconBubble} />
                <span>Blog</span>
              </button>
              <a 
                href="https://www.youtube.com/@building-u" 
                target="_blank" 
                rel="noreferrer" 
                className={s.buttonWrap}
              >
                <img src="/images/btn_02-youtube.png" alt="YouTube" className={s.iconYoutube} />
                <span>Youtube</span>
              </a>
              <a 
                href="https://open.spotify.com/user/building-u" 
                target="_blank" 
                rel="noreferrer" 
                className={s.buttonWrap}
              >
                <img src="/images/btn_03-spotify.png" alt="Spotify Playlist" className={s.iconSpotify} />
                <span>Spotify Playlist</span>
              </a>
            </div>
          </div>
          
          <div className={s.footerWrapper}>
            <span className={s.poweredText}>Powered by</span>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className={s.logoCircle}>LOGO</div>
            ))}
          </div>
        </div>

        {/* Right Side: Lime Green */}
        <div className={s.rightSide}>
          <div className={s.infoBox}>
            We must write stuff about blog and channels of communication
          </div>
          <img src="/images/goat.png" alt="Goat" className={s.goat} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogAndBeyond;