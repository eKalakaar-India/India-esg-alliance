import React, { useState } from "react";
import "./KnowledgeHub.css";
import {
  FaSearch,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";
import ParticlesBackground from './ParticlesBackround'

// import handbook from "../../assets/esg-handbook.png"; // Replace with your image

const resources = [
  {
    id: 1,
    title: "The Definitive ESG Handbook for MSMEs",
    description:
      "Our comprehensive guide covers everything from BRSR reporting frameworks to energy efficiency audits. Specifically tailored for the Indian regulatory environment and mid-sized enterprises.",
    image: "/",
    tags: [
      "Regulatory Compliance",
      "Impact Assessment",
      "Green Finance",
    ],
  },
];

const KnowledgeHub = () => {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="knowledge-hub">
      <ParticlesBackground link = {false} />
      <div className="knowledgehero-content">
        <div className="kh-header">

          <span className="kh-badge">
            Resources & Insights
          </span>

          <h2>
            ESG Knowledge Hub
          </h2>

          <p>
            Empowering MSMEs with the tools, knowledge, and
            certification frameworks to navigate India's
            evolving Environmental, Social, and Governance
            landscape.
          </p>

          <div className="kh-search">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        <div className="kh-content">

          {filteredResources.length > 0 ? (
            filteredResources.map((item) => (

              <div
                className="resource-card"
                key={item.id}
              >

                {/* Left */}

                <div className="resource-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>

                {/* Right */}

                <div className="resource-info">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="resource-tags">

                    {item.tags.map((tag, index) => (

                      <div
                        className="tag"
                        key={index}
                      >
                        <FaCheckCircle />
                        {tag}
                      </div>

                    ))}

                  </div>

                  <div className="resource-buttons">

                    <button className="download-btn" onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/pdfs/ESG Handbook for MSMEs- IEA (English).pdf";
                            link.download = "ESG Handbook for MSMEs- IEA (English).pdf";
                            link.click();
                          }}>

                      <FaDownload />

                      Download PDF

                    </button>

                    <button className="read-btn" onClick={() => window.open("/pdfs/ESG Handbook for MSMEs- IEA (English).pdf", "_blank")}>
                      Read Online
                    </button>

                  </div>

                </div>

              </div>

            ))
          ) : (

            <div className="empty-state">

              <h3>No Resources Found</h3>

              <p>
                Try searching with another keyword.
              </p>

            </div>

          )}

        </div>
      </div>
        

      </section>
    </>
  );
};

export default KnowledgeHub;