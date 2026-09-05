import React, { useState, useEffect, useRef } from "react";
import "./KnowledgeHub.css";
import {
  FaSearch,
  FaCheckCircle,
  FaDownload,
  FaChevronDown,
  FaFilePdf,
} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackround";
import esghandbook from "../../assets/esg-handbook.png";
import AOS from "aos";
import "aos/dist/aos.css";

const resources = [
  {
    id: 1,
    title: "The Definitive ESG Handbook for MSMEs",
    description:
      "Our comprehensive guide covers everything from BRSR reporting frameworks to energy efficiency audits. Specifically tailored for the Indian regulatory environment and mid-sized enterprises.",
    image: esghandbook,
    tags: ["Regulatory Compliance", "Impact Assessment", "Green Finance"],
    files: {
      english: "/pdfs/ESG Handbook for MSMEs- IEA (English) (1).pdf",
      hindi: "/pdfs/ESG Handbook- India ESG Alliance (hindi) Final 1.pdf",
    },
  },
];

const KnowledgeHub = () => {
  const [search, setSearch] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleDownload = (fileUrl, fileName) => {
    setOpenDropdownId(null);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <section className="knowledge-hub">
        <ParticlesBackground link={true} />
        <div className="knowledgehero-content">
          <div className="kh-header" data-aos="fade-up" data-aos-duration="800">
            <span className="kh-badge">Resources & Insights</span>

            <h2> India ESG Alliance Knowledge Hub</h2>

            <p>
              Empowering MSMEs with the tools, knowledge, and certification
              frameworks to navigate India's evolving Environmental, Social, and
              Governance landscape.
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

          <div className="kh-content" id="handbook">
            {filteredResources.length > 0 ? (
              filteredResources.map((item) => (
                <div
                  className="resource-card"
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  {/* Left */}
                  <div className="resource-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  {/* Right */}
                  <div className="resource-info">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className="resource-tags">
                      {item.tags.map((tag, index) => (
                        <div className="tag" key={index}>
                          <FaCheckCircle />
                          {tag}
                        </div>
                      ))}
                    </div>

                    <div className="resource-buttons">
                      {/* Dropdown for English and Hindi Download */}
                      <div
                        className="download-dropdown-wrapper"
                        ref={openDropdownId === item.id ? dropdownRef : null}
                      >
                        <button
                          type="button"
                          className="download-btn"
                          onClick={() =>
                            setOpenDropdownId(
                              openDropdownId === item.id ? null : item.id,
                            )
                          }
                        >
                          <FaDownload />
                          <span>Download PDF</span>
                          <FaChevronDown
                            className={`dropdown-caret ${
                              openDropdownId === item.id ? "open" : ""
                            }`}
                          />
                        </button>

                        {openDropdownId === item.id && (
                          <div className="download-menu">
                            <button
                              type="button"
                              className="download-menu-item"
                              onClick={() =>
                                handleDownload(
                                  item.files.english,
                                  "ESG Handbook for MSMEs- IEA (English).pdf",
                                )
                              }
                            >
                              <FaFilePdf className="pdf-icon" />
                              <div className="menu-text">
                                <strong>English Edition</strong>
                                <small>Comprehensive Guide (PDF)</small>
                              </div>
                            </button>

                            <button
                              type="button"
                              className="download-menu-item"
                              onClick={() =>
                                handleDownload(
                                  item.files.hindi,
                                  "ESG Handbook for MSMEs- IEA (Hindi).pdf",
                                )
                              }
                            >
                              <FaFilePdf className="pdf-icon" />
                              <div className="menu-text">
                                <strong>हिंदी संस्करण (Hindi)</strong>
                                <small>विस्तृत हैंडबुक (PDF)</small>
                              </div>
                            </button>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        className="read-btn"
                        onClick={() =>
                          window.open(item.files.english, "_blank")
                        }
                      >
                        Read Online
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <h3>No Resources Found</h3>
                <p>Try searching with another keyword.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeHub;
