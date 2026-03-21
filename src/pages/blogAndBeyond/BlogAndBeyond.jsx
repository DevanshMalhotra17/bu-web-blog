import { useState } from "react";
import { Layout } from "../../components/layout";
import Blog from "./Blog";
import BlogExpanded from "./BlogExpanded";
import { Header as HeaderDefault } from "./Header";
import { Header as HeaderExpanded } from "./HeaderExpanded";
import MobileBlog from "./mobile";
import s from "./styles.module.css";
import { IsMobile } from "./useIsMobile";

export default function BlogAndBeyond() {
  const isMobile = IsMobile();
  const [expandedId, setExpandedId] = useState(null);

  if (isMobile) return <MobileBlog />;

  const HeaderComponent = expandedId
    ? () => <HeaderExpanded setExpandedId={setExpandedId} />
    : HeaderDefault;

  return (
    <Layout
      className={s.container}
      Header={HeaderComponent}
      showFooter={true}
    >
      {expandedId ? (
        <BlogExpanded expandedId={expandedId} setExpandedId={setExpandedId} />
      ) : (
        <Blog setIsExpanded={setExpandedId} />
      )}
    </Layout>
  );
}