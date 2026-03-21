import { useState } from "react"
import ScrollArea from "./scroll-area"
import Footer from "../../components/partials/Footer"
import "./mobile.css"

const blogPosts = [
  {
    id: "1",
    title: "CLIMATE CHANGE: SWITCHING THE LENS",
    date: "October 01, 2022",
    authors: [
      "Anoushka Singh",
      "Akhila Lingam",
      "Sami Polumohanti",
      "Jessie Li",
      "Vanshika Bhamidipati",
      "Allie Liu",
      "Tamara Turchetta",
    ],
    excerpt:
      "We do our best to do our part. We haul our compost bins to the town recycling centre, we clear our email inboxes so they take up less space, and we wash",
    fullContent:
      "We do our best to do our part. We haul our compost bins to the town recycling centre, we clear our email inboxes so they take up less space, and we wash our clothes in cold water. But despite our individual efforts, the climate crisis continues to worsen. This disconnect between personal action and systemic change highlights the need for a fundamental shift in how we approach environmental challenges. Rather than focusing solely on individual responsibility, we must examine the larger systems and structures that perpetuate environmental degradation.",
  },
  {
    id: "2",
    title: "CLIMATE CHANGE: SWITCHING THE LENS",
    date: "October 01, 2022",
    authors: [
      "Anoushka Singh",
      "Akhila Lingam",
      "Sami Polumohanti",
      "Jessie Li",
      "Vanshika Bhamidipati",
      "Allie Liu",
      "Tamara Turchetta",
    ],
    excerpt:
      "We do our best to do our part. We haul our compost bins to the town recycling centre, we clear our email inboxes so they take up less space, and we wash",
    fullContent:
      "We do our best to do our part. We haul our compost bins to the town recycling centre, we clear our email inboxes so they take up less space, and we wash our clothes in cold water. But despite our individual efforts, the climate crisis continues to worsen.",
  },
]

const categories = ["All", "Academics", "Climate Change", "Finance", "Growth", "Technology"]

export default function BlogBeyond() {
  const [currentView, setCurrentView] = useState("blog02")
  const [selectedPost, setSelectedPost] = useState(null)

  const handleArchivesClick = () => {
    setCurrentView("blog03")
  }

  const handleReadMoreClick = (post) => {
    setSelectedPost(post)
    setCurrentView("blog04")
  }

  const handleBackClick = () => {
    if (currentView === "blog04") {
      setCurrentView("blog02")
    } else if (currentView === "blog03") {
      setCurrentView("blog02")
    }
  }

  return (
    <div className="blog-container">
      {/* Background Pattern */}
      <div className="background-pattern">
        <svg viewBox="0 0 800 600" fill="none">
          <path
            d="M100 100C150 80 200 120 250 100C300 80 350 120 400 100"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M50 200C100 180 150 220 200 200C250 180 300 220 350 200"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle cx="600" cy="150" r="30" stroke="white" strokeWidth="2" opacity="0.3" />
          <rect x="650" y="300" width="40" height="40" stroke="white" strokeWidth="2" opacity="0.3" />
          <path d="M500 400C520 380 540 420 560 400" stroke="white" strokeWidth="2" opacity="0.3" />
        </svg>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="book-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div>
            <div className="header-title">Blog &</div>
            <div className="header-title">Beyond</div>
          </div>
        </div>
        <button className="menu-button">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Logo and Back Button */}
        <div className="top-section">
          <div className="logo-container">
            <img src="/images/downtou-logo.png" alt="Down to 4" width={180} height={120} className="logo-image" />
          </div>
          <button onClick={handleBackClick} className="back-button">
            Back
          </button>
        </div>

        {/* Blog02 View - Initial State */}
        {currentView === "blog02" && (
          <div>
            <div className="archives-bar" onClick={handleArchivesClick}>
              <span className="archives-text">Archives</span>
              <span className="archives-plus">+</span>
            </div>

            <div className="blog-cards">
              <div className="blog-card">
                <h2 className="blog-card-title">{blogPosts[0].title}</h2>
                <div className="blog-card-bottom">
                  <p className="blog-card-date">{blogPosts[0].date}</p>
                  <button onClick={() => handleReadMoreClick(blogPosts[0])} className="read-more-button">
                    Read More
                  </button>
                </div>
              </div>

              <div className="blog-card">
                <h2 className="blog-card-title">{blogPosts[1].title}</h2>
                <div className="blog-card-bottom">
                  <p className="blog-card-date">{blogPosts[1].date}</p>
                  <button onClick={() => handleReadMoreClick(blogPosts[1])} className="read-more-button">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog03 View - Archives */}
        {currentView === "blog03" && (
          <div className="archives-view">
            <h2 className="archives-header">Archives</h2>
            <div className="archives-underline"></div>

            <div className="categories-list">
              {categories.map((category, index) => (
                <div key={index} className="category-item">
                  {category}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog04 View - Full Post */}
        {currentView === "blog04" && selectedPost && (
          <ScrollArea className="full-post-scroll-container">
            <div className="full-post">
              <h1 className="full-post-title">{selectedPost.title}</h1>
              <p className="full-post-date">{selectedPost.date}</p>
              <div className="full-post-authors">
                <p>By {selectedPost.authors.join(", ")}</p>
              </div>
              <div className="full-post-content">{selectedPost.fullContent}</div>
            </div>
          </ScrollArea>
        )}
      </main>

      <Footer />
    </div>
  )
}
