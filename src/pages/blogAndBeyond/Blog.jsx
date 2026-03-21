import { useEffect, useState } from "react";
import { mockData } from "./mock_data";
import ScrollArea from "../../components/ScrollArea/ScrollArea";
import s from "./styles.module.css";

function formatDate(dateStr) {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return new Date(dateStr).toLocaleDateString("en-US", options);
}

export default function Blog({ setIsExpanded }) {
  // initial sort from newest to oldest
  const sortedInitialData = [...mockData].sort((a, b) =>
    new Date(b.datePublished) - new Date(a.datePublished)
  );

  const [data, setData] = useState({
    blogs: sortedInitialData,
    category: "All"
  });

  const filterData = (category) => {
    // filter from the sorted pool based on category
    const filtered = category === "All"
      ? sortedInitialData
      : sortedInitialData.filter((item) =>
        item.categories.toLowerCase().includes(category.toLowerCase())
      );

    setData({
      blogs: filtered,
      category: category
    });
  };

  useEffect(() => { }, [data.blogs]);

  return (
    <main className={s.mainContainer}>
      <aside className={s.aside}>
        <div className={s.trapezoid}></div>
        <img
          src="/images/downtou-logo.png"
          alt="down to u logo"
          className={s.logo1}
        />
        <ul className={s.categoryList}>
          <li className={s.sideTextSmall}>Archives</li>
          {[
            "All",
            "Academics",
            "Climate Change",
            "Finance",
            "Growth",
            "Technology",
          ].map((cat) => (
            <li
              key={cat}
              onClick={() => filterData(cat)}
              className={`${s.categoryItem} ${data.category === cat ? s.active : ""}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <div className={s.mainContent}>
        <ScrollArea className={s.content}>
          {data.blogs.map((item) => (
            <div key={item.id} className={s.blogCard}>
              <div className={s.blogHeader}>
                <h2 className={s.blogTitle}>{item.title.toUpperCase()}</h2>
                <span className={s.blogDate}>
                  {formatDate(item.datePublished)}
                </span>
              </div>
              <p className={s.blogAuthor}>By {item.author}</p>

              <p className={`${s.blogExcerpt} ${s.collapsed}`}>
                {item.content || "We do our best to do our part. We haul our compost bins to the town recycling centre, we clear our email inboxes so they take up less space, and we wash plastic containers before recycling them. We understand that there are wildfires and melting ice and dying animals, which is why we alter our daily habits in hopes of making a difference, however small. We bike instead of drive when we can, choose reusable over disposable, and support companies with sustainable practices. These changes may seem insignificant on their own, but together, they are part of a collective effort to slow the damage and protect the only home we have."}
              </p>

              <a
                href="#"
                className={s.readMore}
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(item.id);
                }}
              >
                Read More
              </a>
            </div>
          ))}
        </ScrollArea>

        <div className={s.moleContainer}>
          <img src="/images/mole.png" alt="mole" className={s.mole} />
        </div>
      </div>
    </main >
  );
}
