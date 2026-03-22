import { useState } from "react";
import { Layout } from "../../components/layout";
import Blog from "./Blog";
import BlogExpanded from "./BlogExpanded";
import { Header as HeaderDefault } from "./Header";
import { Header as HeaderExpanded } from "./HeaderExpanded";
import s from "./styles.module.css";

export default function BlogAndBeyond() {
  const [expandedId, setExpandedId] = useState(null);

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