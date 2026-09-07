import React from "react";
import './Blogs.css'

const articles = [
  {
    tag: "DECARBONISATION",
    tagColor: "#2F7F7B",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
    date: "Feb 14, 2025",
    category: "Supply Chain ESG",
    title:
      "Demystifying Scope 3 Emissions in Supply Chains: A Step-by-Step Guide for MSMEs",
    excerpt:
      "How mid-sized component manufacturers can gather primary emission activity data from tier-2 sub-vendors without prohibitive digital enterprise...",
    authorInitials: "AS",
    authorColor: "#2F7F7B",
    authorName: "Dr. Ananya Sharma",
    authorRole: "Director, ESG Audit",
  },
  {
    tag: "CORPORATE GOVERNANCE",
    tagColor: "#0F2747",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    date: "Feb 08, 2025",
    category: "Statutory Law",
    title:
      "Navigating Greenwashing Risks: Legal Standards Under Indian Consumer Protection Laws",
    excerpt:
      "Analyzing the Central Consumer Protection Authority's (CCPA) 2024 guidelines against deceptive environmental claims, carbon-neutrality...",
    authorInitials: "RI",
    authorColor: "#2563EB",
    authorName: "Rajesh Iyer",
    authorRole: "Senior Legal Fellow",
  },
  {
    tag: "ENERGY TRANSITION",
    tagColor: "#166534",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    date: "Jan 29, 2025",
    category: "Clean Power PPAs",
    title:
      "The Role of Rooftop Solar & Virtual PPAs in Corporate RE100 Targets in India",
    excerpt:
      "A technical dissection of open-access wheeling charges, state electricity regulatory commissions (SERCs) banking rules, and virtual power purchase...",
    authorInitials: "VS",
    authorColor: "#166534",
    authorName: "Vikram Sen",
    authorRole: "Clean Energy Practice Lead",
  },
];

export default function PractitionerInsights() {
  return (
    <section className="pi-section" id="blogs">
      <div className="pi-container">
        <div className="pi-header">
          <div>
            <p className="pi-eyebrow">Practitioner Fieldwork</p>
            <h2 className="pi-title">Insights &amp; Expert Practitioner Analysis</h2>
            <p className="pi-subtitle">
              Practical implementation strategies authored by Chief Sustainability
              Officers, corporate lawyers, and carbon verification auditors.
            </p>
          </div>
          <a href="#" className="pi-browse-link">
            Browse All Articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="pi-grid">
          {articles.map((a, i) => (
            <article className="pi-card" key={i}>
              <div className="pi-card-media">
                <img src={a.image} alt={a.title} />
                <span className="pi-tag" style={{ background: a.tagColor }}>
                  {a.tag}
                </span>
                <span className="pi-readtime">{a.readTime}</span>
              </div>
              <div className="pi-card-body">
                <p className="pi-meta">
                  {a.date}
                  <span className="pi-dot">•</span>
                  {a.category}
                </p>
                <h3 className="pi-card-title">{a.title}</h3>
                <p className="pi-card-excerpt">{a.excerpt}</p>
                <div className="pi-author-row">
                  <div className="pi-author-left">
                    <div
                      className="pi-avatar"
                      style={{ background: a.authorColor }}
                    >
                      {a.authorInitials}
                    </div>
                    <div>
                      <p className="pi-author-name">{a.authorName}</p>
                      <p className="pi-author-role">{a.authorRole}</p>
                    </div>
                  </div>
                  <button className="pi-arrow-btn" aria-label="Read article">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
